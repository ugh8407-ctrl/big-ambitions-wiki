import Link from "next/link";
import type { Locale } from "@/i18n/locales";
import { getDictionary } from "@/i18n/dictionaries";
import { getArticle } from "@/content/registry";

const quickSlugs = ["big-ambitions-best-starting-business", "big-ambitions-best-investment", "big-ambitions-warehouse-setup", "big-ambitions-where-to-buy-bathroom-stall"];

export function Hero({ locale }: { locale: Locale }) {
  const hero = getDictionary(locale).home.hero;
  return (
    <section className="home-hero">
      <div className="container hero-inner">
        <span className="eyebrow"><i />{hero.updated}</span>
        <h1>{hero.titleLead}<br /><span className="accent">{hero.titleAccent}</span></h1>
        <p>{hero.description}</p>
        <div className="button-row hero-buttons"><Link className="button" href={`/${locale}/guides/big-ambitions-guide`}>{hero.primary}</Link><Link className="button secondary" href={`/${locale}/guides`}>{hero.secondary}</Link></div>
        <div className="guide-jump-links hero-quick-links">{quickSlugs.map(slug => {
          const article = getArticle(locale, slug);
          return article ? <Link key={slug} href={`/${locale}/${article.category}/${slug}`}>{article.title}</Link> : null;
        })}</div>
        <div className="hero-stats">{hero.stats.map(([value,label])=><div key={label}><strong>{value}</strong><span>{label}</span></div>)}</div>
      </div>
    </section>
  );
}
