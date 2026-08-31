import type { Locale } from "@/i18n/locales";
import type { Article } from "@/content/types";
import { ArticleHeader } from "./article-header";
import { CodesSidebar } from "./codes-sidebar";
import { Breadcrumbs } from "./breadcrumbs";
import Link from "next/link";
import { siteData } from "@/lib/site-data";

export function KeywordArticle({ article, locale }: { article: Article; locale: Locale }) {
  const ui = locale === "en" ? { answer:"Short answer", sources:"Verified sources", keep:"Keep building", more:"More guides", steam:"Open Steam" } : locale === "de" ? { answer:"Kurzantwort", sources:"Geprüfte Quellen", keep:"Weiter aufbauen", more:"Weitere Guides", steam:"Steam öffnen" } : { answer:"Réponse courte", sources:"Sources vérifiées", keep:"Poursuivre votre développement", more:"Autres guides", steam:"Ouvrir Steam" };
  const category = locale === "fr" ? ({ guides:"Guides", alternatives:"Alternatives", updates:"Mises à jour", platforms:"Plateformes", mods:"Mods", reviews:"Avis", troubleshooting:"Dépannage" }[article.category] ?? article.category) : article.category;
  return <div className="container"><Breadcrumbs locale={locale} items={[{label:category,href:`/${article.category}`},{label:article.keyword}]}/><div className="content-shell"><article className="article"><ArticleHeader article={article}/><div className="direct-answer"><strong>{ui.answer}</strong><p>{article.answer}</p></div>{article.sections.map((section)=><section key={section.heading}><h2>{section.heading}</h2>{section.paragraphs.map((paragraph)=><p key={paragraph}>{paragraph}</p>)}{section.bullets&&<ul>{section.bullets.map((bullet)=><li key={bullet}>{bullet}</li>)}</ul>}</section>)}<section><h2>{ui.sources}</h2><ul className="source-list">{article.sources.map((source)=><li key={source.href}><a href={source.href} target="_blank" rel="noreferrer">{source.label} ↗</a></li>)}</ul></section><div className="article-cta"><h2>{ui.keep}</h2><div className="button-row"><Link className="button" href={`/${locale}/${article.category}`}>{ui.more}</Link><a className="button secondary" href={siteData.links.steam}>{ui.steam}</a></div></div></article><CodesSidebar locale={locale}/></div></div>;
}
