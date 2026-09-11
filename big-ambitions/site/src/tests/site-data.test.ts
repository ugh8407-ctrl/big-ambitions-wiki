import { describe, expect, it } from "vitest";
import { siteData } from "@/lib/site-data";
import { getDictionary } from "@/i18n/dictionaries";

describe("verified site data", () => {
  it("uses approved identity, links, theme, and empty codes", () => {
    expect(siteData.gameName).toBe("Big Ambitions");
    expect(siteData.codes).toEqual([]);
    expect(siteData.links).toEqual({
      official: "https://www.bigambitionsgame.com/",
      steam: "https://store.steampowered.com/app/1331550/Big_Ambitions/",
      discord: "https://discord.gg/hovgaardgames",
      youtube: "https://www.youtube.com/@hovgaardgames",
    });
    expect(siteData.theme).toEqual({ base: "45 93% 55%", light: "45 96% 64%" });
  });

  it("has complete localized home copy without invented codes", () => {
    expect(getDictionary("en").home.start.cards).toHaveLength(4);
    expect(getDictionary("de").home.start.cards).toHaveLength(4);
    expect(getDictionary("fr").home.start.cards).toHaveLength(4);
    expect(getDictionary("da").home.start.cards).toHaveLength(4);
    expect(getDictionary("en").codes.empty).toBe("None available");
    expect(getDictionary("de").codes.empty).toBe("Keine verfügbar");
    expect(getDictionary("fr").codes.empty).toBe("Aucun disponible");
    expect(getDictionary("da").codes.empty).toBe("Ingen tilgængelige");
  });
});
