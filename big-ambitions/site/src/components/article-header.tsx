import type { Article } from "@/content/types";

export function ArticleHeader({ article }: { article: Article }) {
  return <header className="article-header"><div className="tag-row"><span className="tag">{article.category}</span><span className="verified-tag">Verified research</span></div><h1>{article.keyword}</h1><p>{article.summary}</p><small>Last checked {article.updated}</small></header>;
}
