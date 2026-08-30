import Link from "next/link";
import type { Locale } from "@/i18n/locales";
import { getDictionary } from "@/i18n/dictionaries";
import { siteData } from "@/lib/site-data";

export function FinalCta({ locale }: { locale: Locale }) {
  const final = getDictionary(locale).home.final;
  return <section className="section"><div className="container final-cta"><span className="cta-shine"/><h2>{final.title}</h2><p>{final.description}</p><div className="button-row"><Link className="button" href={`/${locale}/guides/big-ambitions-guide`}>{final.primary}</Link><a className="button secondary" href={siteData.links.steam}>{final.secondary}</a></div></div></section>;
}
