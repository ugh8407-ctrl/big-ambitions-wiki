import type { Article } from "./types";
import { guideGroups } from "./guide-navigation";

export function selectRelatedArticles(article: Article, allArticles: Article[], limit = 4): Article[] {
  const sameLocale = allArticles.filter((candidate) => candidate.locale === article.locale && candidate.slug !== article.slug);
  const group = guideGroups.find((item) => item.slugs.some((slug) => slug === article.slug));
  const preferred = [...(article.relatedSlugs ?? []), ...(group?.slugs ?? [])];
  const candidates = [
    ...preferred.map((slug) => sameLocale.find((candidate) => candidate.slug === slug)),
    ...sameLocale.filter((candidate) => candidate.category === article.category),
    ...sameLocale.filter((candidate) => candidate.category === "guides"),
  ];
  const seen = new Set<string>();
  return candidates.filter((candidate): candidate is Article => {
    if (!candidate || seen.has(candidate.slug)) return false;
    seen.add(candidate.slug);
    return true;
  }).slice(0, Math.max(0, limit));
}
