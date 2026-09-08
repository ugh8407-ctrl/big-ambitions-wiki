import Link from "next/link";
import type { Locale } from "@/i18n/locales";
import type { Article } from "@/content/types";
import { getArticles } from "@/content/registry";
import { selectRelatedArticles } from "@/content/related-articles";
import { categoryLabel } from "@/content/guide-navigation";
import { ArticleHeader } from "./article-header";
import { CodesSidebar } from "./codes-sidebar";
import { Breadcrumbs } from "./breadcrumbs";
import { siteData } from "@/lib/site-data";

export function KeywordArticle({ article, locale }: { article: Article; locale: Locale }) {
  const ui = {
    en: { answer: "Short answer", sources: "Sources", keep: "Keep building", more: "More guides", steam: "Open Steam", contents: "On this page", related: "Related guides", next: "Continue reading" },
    de: { answer: "Kurzantwort", sources: "Quellen", keep: "Weiter aufbauen", more: "Weitere Anleitungen", steam: "Steam öffnen", contents: "Auf dieser Seite", related: "Passende Anleitungen", next: "Weiterlesen" },
    fr: { answer: "Réponse courte", sources: "Sources", keep: "Poursuivre votre développement", more: "Autres guides", steam: "Ouvrir Steam", contents: "Sur cette page", related: "Guides associés", next: "Continuer la lecture" },
  }[locale];
  const related = selectRelatedArticles(article, getArticles(locale));
  return <div className="container">
    <Breadcrumbs locale={locale} items={[{ label: categoryLabel(article.category, locale), href: `/${article.category}` }, { label: article.keyword }]} />
    <div className="content-shell">
      <article className="article">
        <ArticleHeader article={article} />
        <div className="direct-answer"><strong>{ui.answer}</strong><p>{article.answer}</p></div>
        <nav className="article-toc" aria-label={ui.contents}><strong>{ui.contents}</strong><ol>{article.sections.map((section, index) => <li key={section.heading}><a href={`#section-${index + 1}`}>{section.heading}</a></li>)}</ol></nav>
        {article.sections.map((section, index) => <section id={`section-${index + 1}`} className="article-section" key={section.heading}><h2>{section.heading}</h2>{section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}{section.bullets && <ul>{section.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul>}</section>)}
        <section><h2>{ui.sources}</h2><ul className="source-list">{article.sources.map((source) => <li key={source.href}><a href={source.href} target="_blank" rel="noreferrer">{source.label} ↗</a></li>)}</ul></section>
        <nav className="related-guides" aria-label={ui.related}><h2>{ui.related}</h2><div className="grid grid-2">{related.map((item) => <Link className="card related-guide" href={`/${locale}/${item.category}/${item.slug}`} key={item.slug}><h3>{item.title}</h3><p>{item.description}</p><b>{ui.next} →</b></Link>)}</div></nav>
        <div className="article-cta"><h2>{ui.keep}</h2><div className="button-row"><Link className="button" href={`/${locale}/${article.category}`}>{ui.more}</Link><a className="button secondary" href={siteData.links.steam}>{ui.steam}</a></div></div>
      </article>
      <CodesSidebar locale={locale} />
    </div>
  </div>;
}
