import fs from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";

describe("visual theme", () => {
  it("uses the approved dark emerald theme by default with a light option", () => {
    const css = fs.readFileSync(path.resolve(process.cwd(), "src/app/globals.css"), "utf8");
    expect(css).toContain("--nav-theme:161 65% 48%");
    expect(css).toContain(':root[data-theme="light"]');
    expect(css).toContain("--nav-theme:161 70% 42%");
    expect(css).toContain("color-scheme:dark");
  });
});
