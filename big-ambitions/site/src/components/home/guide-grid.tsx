import Link from "next/link";
import type { Locale } from "@/i18n/locales";
import { getDictionary } from "@/i18n/dictionaries";
import { getArticle } from "@/content/registry";
import { categoryLabel } from "@/content/guide-navigation";

const featured = [
  ["📚", "big-ambitions-guide"],
  ["🏪", "big-ambitions-best-starting-business"],
  ["📊", "big-ambitions-market-insider"],
  ["👥", "big-ambitions-customer-capacity"],
  ["📦", "big-ambitions-warehouse-setup"],
  ["🚚", "big-ambitions-logistics-manager"],
  ["🛒", "big-ambitions-purchasing-agent"],
  ["🏢", "big-ambitions-office-requirements"],
  ["🚪", "big-ambitions-where-to-buy-bathroom-stall"],
  ["📈", "big-ambitions-best-investment"],
  ["🎮", "big-ambitions-ps5"],
  ["🛠️", "big-ambitions-crashes"],
] as const;

export function GuideGrid({ locale }: { locale: Locale }) {
  const dictionary = getDictionary(locale);
  const guides = dictionary.home.guides;
  return <section className="section guides-section"><div className="container">
    <span className="eyebrow">{guides.eyebrow}</span>
    <div className="section-heading"><h2>{guides.title}</h2><p>{guides.description}</p></div>
    <div className="grid grid-3 guide-grid">{featured.map(([icon, slug]) => {
      const article = getArticle(locale, slug);
      if (!article) return null;
      return <Link className="card guide-card" href={`/${locale}/${article.category}/${slug}`} key={slug}><span className="guide-icon" aria-hidden="true">{icon}</span><small>{categoryLabel(article.category, locale)}</small><h3>{article.title}</h3><p>{article.description}</p><b>{dictionary.common.readGuide} →</b></Link>;
    })}</div>
    <div className="button-row guide-browse"><Link className="button secondary" href={`/${locale}/guides`}>{dictionary.common.browseAll} →</Link></div>
  </div></section>;
}
