import Link from "next/link";
import type { Locale } from "@/i18n/locales";
import { getDictionary } from "@/i18n/dictionaries";
import { siteData } from "@/lib/site-data";

export function SiteFooter({ locale }: { locale: Locale }) {
  const { footer } = getDictionary(locale);
  return (
    <footer className="site-footer">
      <div className="footer-grid">
        <div><div className="brand footer-brand"><span className="brand-mark">BA</span><span><strong>Big Ambitions</strong> Wiki</span></div><p>{footer.about}</p></div>
        <div><h3>{footer.guides}</h3><Link href={`/${locale}/guides`}>Beginner Guide</Link><Link href={`/${locale}/mods`}>Mods & Blueprints</Link><Link href={`/${locale}/updates`}>Updates</Link></div>
        <div><h3>{footer.official}</h3><a href={siteData.links.official}>Official Website</a><a href={siteData.links.discord}>Official Discord</a><a href={siteData.links.youtube}>Official YouTube</a></div>
        <div><h3>{footer.legal}</h3><Link href={`/${locale}/privacy`}>{footer.privacy}</Link><Link href={`/${locale}/terms`}>{footer.terms}</Link><a href={siteData.links.steam}>Steam</a></div>
      </div>
      <div className="footer-bottom"><span>© 2026 Big Ambitions Wiki — Fan site.</span><span>{footer.rights}</span></div>
    </footer>
  );
}
