import fs from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";
import { legalContent } from "@/lib/legal";
import { getDictionary } from "@/i18n/dictionaries";

function readSourceFiles(directory: string): string {
  return fs.readdirSync(directory, { withFileTypes: true }).map((entry) => {
    const target = path.join(directory, entry.name);
    if (entry.isDirectory()) return readSourceFiles(target);
    if (entry.name === "content-integrity.test.ts") return "";
    return fs.readFileSync(target, "utf8");
  }).join("\n");
}

describe("content integrity", () => {
  it("contains no reference-site brand residue", () => {
    const source = readSourceFiles(path.resolve(process.cwd(), "src"));
    const banned = [["Gamble", "With", "Your", "Friends"].join(" "), ["G", "W", "Y", "F"].join(""), ["gamblewithyourfriends", ".net"].join("")];
    for (const phrase of banned) expect(source).not.toContain(phrase);
  });

  it("keeps the official game name unchanged in German content", () => {
    const source = readSourceFiles(path.resolve(process.cwd(), "src"));
    const translatedOrCompoundedNames = [
      "Big-Ambitions",
      "Big Ambitionen",
      "Große Ambitionen",
      "Grosse Ambitionen",
    ];
    for (const name of translatedOrCompoundedNames) expect(source).not.toContain(name);
  });

  it("has localized legal copy and valid home metadata lengths", () => {
    expect(legalContent.en.privacy.length).toBeGreaterThan(2);
    expect(legalContent.de.terms.length).toBeGreaterThan(2);
    for (const locale of ["en", "de", "fr", "da"] as const) {
      const meta = getDictionary(locale).home.meta;
      expect(meta.title.length).toBeLessThanOrEqual(60);
      expect(meta.description.length).toBeGreaterThanOrEqual(140);
      expect(meta.description.length).toBeLessThanOrEqual(160);
      expect(meta.keywords.length).toBeLessThanOrEqual(100);
    }
  });

  it("provides Danish interface, legal copy, and keeps the game name unchanged", () => {
    const danish = getDictionary("da");
    expect(danish.localeName).toBe("Dansk");
    expect(danish.nav.business).toBe("Virksomhed");
    expect(danish.home.about.title).toBe("Hvad er Big Ambitions?");
    expect(danish.codes.empty).toBe("Ingen tilgængelige");
    expect(legalContent.da.privacy.length).toBeGreaterThan(2);
    expect(legalContent.da.terms.length).toBeGreaterThan(2);
  });

  it("provides complete French interface and legal copy without translating the game name", () => {
    const french = getDictionary("fr");
    expect(french.localeName).toBe("Français");
    expect(french.nav.business).toBe("Entreprise");
    expect(french.home.about.title).toBe("Qu’est-ce que Big Ambitions ?");
    expect(french.codes.empty).toBe("Aucun disponible");
    expect(legalContent.fr.privacy.length).toBeGreaterThan(2);
    expect(legalContent.fr.terms.length).toBeGreaterThan(2);
    expect(JSON.stringify({ french, legal: legalContent.fr })).not.toMatch(/Grandes Ambitions|Grande Ambition/);
  });
});
