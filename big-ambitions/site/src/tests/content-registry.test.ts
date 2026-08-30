import { describe, expect, it } from "vitest";
import { getArticle, getArticles } from "@/content/registry";

describe("keyword article registry", () => {
  it("maps all twenty approved keywords to unique bilingual pages", () => {
    const english = getArticles("en");
    const german = getArticles("de");
    expect(english).toHaveLength(20);
    expect(german).toHaveLength(20);
    expect(new Set(english.map((article) => article.slug)).size).toBe(20);
    expect(english.map((article) => article.slug)).toContain("big-ambitions-mods");
    expect(getArticle("de", "big-ambitions-mods")?.title).toMatch(/mods/i);
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
});
