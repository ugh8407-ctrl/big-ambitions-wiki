import type { Locale } from "@/i18n/locales";
import type { Article } from "@/content/types";
import { ArticleHeader } from "./article-header";
import { CodesSidebar } from "./codes-sidebar";
import { Breadcrumbs } from "./breadcrumbs";
import Link from "next/link";
import { siteData } from "@/lib/site-data";

export function KeywordArticle({ article, locale }: { article: Article; locale: Locale }) {
  return <div className="container"><Breadcrumbs locale={locale} items={[{label:article.category,href:`/${article.category}`},{label:article.keyword}]}/><div className="content-shell"><article className="article"><ArticleHeader article={article}/><div className="direct-answer"><strong>{locale === "en" ? "Short answer" : "Kurzantwort"}</strong><p>{article.answer}</p></div>{article.sections.map((section)=><section key={section.heading}><h2>{section.heading}</h2>{section.paragraphs.map((paragraph)=><p key={paragraph}>{paragraph}</p>)}{section.bullets&&<ul>{section.bullets.map((bullet)=><li key={bullet}>{bullet}</li>)}</ul>}</section>)}<section><h2>{locale === "en" ? "Verified sources" : "Geprüfte Quellen"}</h2><ul className="source-list">{article.sources.map((source)=><li key={source.href}><a href={source.href} target="_blank" rel="noreferrer">{source.label} ↗</a></li>)}</ul></section><div className="article-cta"><h2>{locale === "en" ? "Keep building" : "Weiter aufbauen"}</h2><div className="button-row"><Link className="button" href={`/${locale}/${article.category}`}>{locale === "en" ? "More guides" : "Weitere Guides"}</Link><a className="button secondary" href={siteData.links.steam}>{locale === "en" ? "Open Steam" : "Steam öffnen"}</a></div></div></article><CodesSidebar locale={locale}/></div></div>;
}
