import { describe, expect, it } from "vitest";
import { isLocale, locales } from "@/i18n/locales";

describe("locale contract", () => {
  it("supports only English and German", () => {
    expect(locales).toEqual(["en", "de"]);
    expect(isLocale("en")).toBe(true);
    expect(isLocale("de")).toBe(true);
    expect(isLocale("fr")).toBe(false);
  });
});
