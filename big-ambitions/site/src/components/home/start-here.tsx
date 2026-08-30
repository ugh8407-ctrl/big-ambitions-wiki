import Link from "next/link";
import type { Locale } from "@/i18n/locales";
import { getDictionary } from "@/i18n/dictionaries";

export function StartHere({ locale }: { locale: Locale }) {
  const start = getDictionary(locale).home.start;
  return <section className="section start-section"><div className="container"><span className="eyebrow">{start.eyebrow}</span><div className="section-heading"><h2>{start.title}</h2><p>{start.description}</p></div><div className="grid grid-2 start-grid">{start.cards.map((card)=><Link data-testid="start-card" className="card start-card" key={card.number} href={`/${locale}${card.href}`}><span>{card.number}</span><div><h3>{card.title}</h3><p>{card.description}</p></div></Link>)}</div></div></section>;
}
