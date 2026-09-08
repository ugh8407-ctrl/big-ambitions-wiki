import React from "react";
import { render, screen, within, cleanup } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";
import { getArticle, getArticles } from "@/content/registry";
import { selectRelatedArticles } from "@/content/related-articles";
import { guideGroups } from "@/content/guide-navigation";
import { KeywordArticle } from "@/components/keyword-article";
import { GuideGrid } from "@/components/home/guide-grid";
import sitemap from "@/app/sitemap";
import robots from "@/app/robots";
import { siteOrigin } from "@/lib/site-url";
import { locales } from "@/i18n/locales";

afterEach(cleanup);

describe("search growth release", () => {
  it("preserves locale parity, source links and dated metadata", () => {
    const english = getArticles("en");
    for (const locale of locales) {
      const articles = getArticles(locale);
      expect(articles.map((article) => article.slug)).toEqual(english.map((article) => article.slug));
      for (const article of articles) {
        expect(article.title, article.slug).toContain("Big Ambitions");
        expect(article.title.length, article.slug).toBeGreaterThanOrEqual(40);
        expect(article.title.length, article.slug).toBeLessThanOrEqual(60);
        expect(article.description.length, article.slug).toBeGreaterThanOrEqual(140);
        expect(article.description.length, article.slug).toBeLessThanOrEqual(160);
        expect(article.title).not.toMatch(/Verified Guide|Guide vérifié/);
        expect(Number.isNaN(new Date(article.updated).getTime())).toBe(false);
        for (const source of article.sources) expect(new URL(source.href).protocol).toBe("https:");
        for (const slug of article.relatedSlugs ?? []) expect(getArticle(locale, slug), slug).toBeDefined();
      }
      for (const group of guideGroups) {
        for (const slug of group.slugs) expect(getArticle(locale, slug)?.category, slug).toBe("guides");
      }
    }
  });

  it("links every article to four distinct existing same-language pages", () => {
    for (const locale of locales) {
      const articles = getArticles(locale);
      for (const article of articles) {
        const related = selectRelatedArticles(article, articles);
        expect(related).toHaveLength(4);
        expect(new Set(related.map((item) => item.slug)).size).toBe(4);
        expect(related.every((item) => item.locale === locale && item.slug !== article.slug)).toBe(true);
      }
    }
  });

  it("uses the live www host and real modified dates in the complete sitemap", () => {
    expect(siteOrigin).toBe("https://www.bigambitionsgame.online");
    const entries = sitemap();
    expect(new Set(entries.map((entry) => entry.url)).size).toBe(entries.length);
    expect(entries.every((entry) => entry.url.startsWith(siteOrigin + "/"))).toBe(true);
    expect(robots().sitemap).toBe(siteOrigin + "/sitemap.xml");
    for (const locale of locales) {
      for (const article of getArticles(locale)) {
        const entry = entries.find((item) => item.url === `${siteOrigin}/${locale}/${article.category}/${article.slug}`);
        expect(entry?.lastModified).toEqual(new Date(article.modified ?? article.updated));
      }
    }
  });

  it("renders the specific title, working contents anchors and localized recommendations", () => {
    const article = getArticle("fr", "big-ambitions-where-to-buy-bathroom-stall")!;
    const { container } = render(<KeywordArticle article={article} locale="fr" />);
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(article.title);
    const toc = screen.getByRole("navigation", { name: "Sur cette page" });
    const links = within(toc).getAllByRole("link");
    expect(links).toHaveLength(article.sections.length);
    for (const link of links) expect(container.querySelector(link.getAttribute("href")!)).not.toBeNull();
    const related = screen.getByRole("navigation", { name: "Guides associés" });
    expect(within(related).getAllByRole("link")).toHaveLength(4);
    for (const link of within(related).getAllByRole("link")) expect(link.getAttribute("href")).toMatch(/^\/fr\//);
  });

  it("exposes the growth topics through the homepage", () => {
    const { container } = render(<GuideGrid locale="en" />);
    expect(container.querySelector('a[href="/en/guides/big-ambitions-warehouse-setup"]')).not.toBeNull();
    expect(container.querySelector('a[href="/en/guides/big-ambitions-market-insider"]')).not.toBeNull();
    expect(container.querySelector('a[href="/en/guides"]')).not.toBeNull();
  });
});
