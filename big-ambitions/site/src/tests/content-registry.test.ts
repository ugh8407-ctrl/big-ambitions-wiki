import { describe, expect, it } from "vitest";
import { getArticle, getArticles } from "@/content/registry";

describe("keyword article registry", () => {
  it("maps all twenty approved keywords to unique localized pages", () => {
    const english = getArticles("en");
    const german = getArticles("de");
    const french = getArticles("fr");
    expect(english).toHaveLength(20);
    expect(german).toHaveLength(20);
    expect(french).toHaveLength(20);
    expect(new Set(english.map((article) => article.slug)).size).toBe(20);
    expect(english.map((article) => article.slug)).toContain("big-ambitions-mods");
    expect(getArticle("de", "big-ambitions-mods")?.title).toMatch(/mods/i);
    expect(getArticle("fr", "big-ambitions-mods")?.title).toMatch(/vérifié/i);
    expect(getArticle("fr", "big-ambitions-mods")?.answer).toMatch(/atelier Steam/i);
    expect(getArticle("fr", "big-ambitions-mods")?.sections.map((section) => section.heading).join(" ")).toContain("Réponse directe");
    expect(getArticle("en", "missing-page")).toBeUndefined();
  });

  it("enforces keyword SEO limits and direct-answer content", () => {
    for (const article of getArticles("en")) {
      expect(article.title.toLowerCase()).toContain(article.keyword);
      expect(article.title.length).toBeGreaterThanOrEqual(40);
      expect(article.title.length).toBeLessThanOrEqual(60);
      expect(article.description.toLowerCase()).toContain(article.keyword);
      expect(article.description.length).toBeGreaterThanOrEqual(140);
      expect(article.description.length).toBeLessThanOrEqual(160);
      expect(article.answer.length).toBeGreaterThan(80);
      expect(article.sections.length).toBeGreaterThanOrEqual(4);
      const body = [article.answer, ...article.sections.flatMap((section) => [...section.paragraphs, ...(section.bullets ?? [])])].join(" ");
      const words = body.trim().split(/\s+/).length;
      expect(words).toBeGreaterThanOrEqual(900);
      expect(words).toBeLessThanOrEqual(1400);
    }
  });

  it("keeps French article SEO metadata within the approved limits", () => {
    for (const article of getArticles("fr")) {
      expect(article.title.length).toBeGreaterThanOrEqual(40);
      expect(article.title.length).toBeLessThanOrEqual(60);
      expect(article.description.length).toBeGreaterThanOrEqual(140);
      expect(article.description.length).toBeLessThanOrEqual(160);
      expect(article.title).toContain("Big Ambitions");
    }
  });
});
