import { describe, expect, it } from "vitest";
import { isLocale, locales } from "@/i18n/locales";

describe("locale contract", () => {
  it("supports English, German, French, and Danish", () => {
    expect(locales).toEqual(["en", "de", "fr", "da"]);
    expect(isLocale("en")).toBe(true);
    expect(isLocale("de")).toBe(true);
    expect(isLocale("fr")).toBe(true);
    expect(isLocale("da")).toBe(true);
  });
});
