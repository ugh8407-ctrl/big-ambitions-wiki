import Link from "next/link";
import type { Locale } from "@/i18n/locales";
import { getDictionary } from "@/i18n/dictionaries";

export function Hero({ locale }: { locale: Locale }) {
  const hero = getDictionary(locale).home.hero;
  return (
    <section className="home-hero">
      <div className="container hero-inner">
        <span className="eyebrow"><i />{hero.updated}</span>
        <h1>{hero.titleLead}<br /><span className="accent">{hero.titleAccent}</span></h1>
        <p>{hero.description}</p>
        <div className="button-row hero-buttons"><Link className="button" href={`/${locale}/guides/big-ambitions-guide`}>{hero.primary}</Link><Link className="button secondary" href={`/${locale}/guides`}>{hero.secondary}</Link></div>
        <div className="hero-stats">{hero.stats.map(([value,label])=><div key={label}><strong>{value}</strong><span>{label}</span></div>)}</div>
      </div>
    </section>
  );
}
