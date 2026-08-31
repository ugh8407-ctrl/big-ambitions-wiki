import type { Article } from "@/content/types";

export function ArticleHeader({ article }: { article: Article }) {
  const labels = article.locale === "fr" ? { verified:"Recherche vérifiée", checked:"Dernière vérification" } : article.locale === "de" ? { verified:"Geprüfte Recherche", checked:"Zuletzt geprüft" } : { verified:"Verified research", checked:"Last checked" };
  const categories: Record<string,string> = article.locale === "fr" ? { guides:"Guides", alternatives:"Alternatives", updates:"Mises à jour", platforms:"Plateformes", mods:"Mods", reviews:"Avis", troubleshooting:"Dépannage" } : {};
  return <header className="article-header"><div className="tag-row"><span className="tag">{categories[article.category] ?? article.category}</span><span className="verified-tag">{labels.verified}</span></div><h1>{article.keyword}</h1><p>{article.summary}</p><small>{labels.checked} {article.updated}</small></header>;
}
