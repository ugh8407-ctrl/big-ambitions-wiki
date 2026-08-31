import { describe, expect, it } from "vitest";
import { isLocale, locales } from "@/i18n/locales";

describe("locale contract", () => {
  it("supports English, German, and French", () => {
    expect(locales).toEqual(["en", "de", "fr"]);
    expect(isLocale("en")).toBe(true);
    expect(isLocale("de")).toBe(true);
    expect(isLocale("fr")).toBe(true);
  });
});
