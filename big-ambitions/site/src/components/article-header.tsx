import type { Article } from "@/content/types";
import { categoryLabel } from "@/content/guide-navigation";

export function ArticleHeader({ article }: { article: Article }) {
  const labels = article.locale === "fr" ? { verified:"Recherche vérifiée", checked:"Dernière vérification" } : article.locale === "de" ? { verified:"Geprüfte Recherche", checked:"Zuletzt geprüft" } : { verified:"Verified research", checked:"Last checked" };
  const date = new Intl.DateTimeFormat(article.locale, { year: "numeric", month: "long", day: "numeric", timeZone: "UTC" }).format(new Date(article.updated));
  return <header className="article-header"><div className="tag-row"><span className="tag">{categoryLabel(article.category, article.locale)}</span><span className="verified-tag">{labels.verified}</span></div><h1>{article.title}</h1><small>{labels.checked} <time dateTime={article.updated}>{date}</time></small></header>;
}
