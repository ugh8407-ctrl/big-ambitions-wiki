import type { Locale } from "@/i18n/locales";
import { getDictionary } from "@/i18n/dictionaries";

export function AboutGame({ locale }: { locale: Locale }) {
  const about = getDictionary(locale).home.about;
  return <section className="section about-section"><div className="container about-layout"><div><span className="eyebrow">{about.eyebrow}</span><h2>{about.title}</h2>{about.paragraphs.map((p)=><p key={p}>{p}</p>)}</div><div className="facts-card">{about.facts.map(([label,value])=><div key={label}><span>{label}</span><strong>{value}</strong></div>)}</div></div></section>;
}
