import type { Locale } from "@/i18n/locales";

export type ArticleSection = { heading: string; paragraphs: string[]; bullets?: string[] };

export type Article = {
  locale: Locale;
  keyword: string;
  category: string;
  slug: string;
  title: string;
  description: string;
  summary: string;
  answer: string;
  updated: string;
  modified?: string;
  relatedSlugs?: string[];
  sections: ArticleSection[];
  sources: { label: string; href: string }[];
};
