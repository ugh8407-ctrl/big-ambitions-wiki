import type { Locale } from "@/i18n/locales";
import { getDictionary } from "@/i18n/dictionaries";
import { legalContent } from "@/lib/legal";
import { Breadcrumbs } from "./breadcrumbs";

export function LegalPage({ locale, type }: { locale: Locale; type: "privacy" | "terms" }) {
  const dictionary = getDictionary(locale);
  const title = type === "privacy" ? dictionary.legal.privacyTitle : dictionary.legal.termsTitle;
  return <div className="narrow legal-page"><Breadcrumbs locale={locale} items={[{label:title}]}/><header><span className="tag">{dictionary.footer.legal}</span><h1>{title}</h1><p>{dictionary.legal.updated}</p></header>{legalContent[locale][type].map(([heading,paragraph])=><section key={heading}><h2>{heading}</h2><p>{paragraph}</p></section>)}</div>;
}
