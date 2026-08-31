import fs from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";

describe("visual theme", () => {
  it("uses the approved light emerald theme by default with a dark option", () => {
    const css = fs.readFileSync(path.resolve(process.cwd(), "src/app/globals.css"), "utf8");
    expect(css).toContain("--nav-theme:161 70% 42%");
    expect(css).toContain("--nav-theme-light:161 70% 54%");
    expect(css).toContain(':root[data-theme="dark"]');
    expect(css).toContain("--nav-theme:161 65% 48%");
    expect(css).toContain("color-scheme:light");
  });
});
