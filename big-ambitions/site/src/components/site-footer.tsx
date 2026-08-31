import Link from "next/link";
import type { Locale } from "@/i18n/locales";
import { getDictionary } from "@/i18n/dictionaries";
import { siteData } from "@/lib/site-data";

export function SiteFooter({ locale }: { locale: Locale }) {
  const { footer } = getDictionary(locale);
  const links = locale === "fr" ? { beginner:"Guide du débutant", workshop:"Mods et Blueprints", updates:"Mises à jour", website:"Site officiel", discord:"Discord officiel", youtube:"YouTube officiel", fan:"Site communautaire." } : locale === "de" ? { beginner:"Einsteiger-Guide", workshop:"Mods & Blueprints", updates:"Updates", website:"Offizielle Website", discord:"Offizieller Discord", youtube:"Offizielles YouTube", fan:"Fanprojekt." } : { beginner:"Beginner Guide", workshop:"Mods & Blueprints", updates:"Updates", website:"Official Website", discord:"Official Discord", youtube:"Official YouTube", fan:"Fan site." };
  return (
    <footer className="site-footer">
      <div className="footer-grid">
        <div><div className="brand footer-brand"><span className="brand-mark">BA</span><span><strong>Big Ambitions</strong> Wiki</span></div><p>{footer.about}</p></div>
        <div><h3>{footer.guides}</h3><Link href={`/${locale}/guides`}>{links.beginner}</Link><Link href={`/${locale}/mods`}>{links.workshop}</Link><Link href={`/${locale}/updates`}>{links.updates}</Link></div>
        <div><h3>{footer.official}</h3><a href={siteData.links.official}>{links.website}</a><a href={siteData.links.discord}>{links.discord}</a><a href={siteData.links.youtube}>{links.youtube}</a></div>
        <div><h3>{footer.legal}</h3><Link href={`/${locale}/privacy`}>{footer.privacy}</Link><Link href={`/${locale}/terms`}>{footer.terms}</Link><a href={siteData.links.steam}>Steam</a></div>
      </div>
      <div className="footer-bottom"><span>© 2026 Big Ambitions Wiki — {links.fan}</span><span>{footer.rights}</span></div>
    </footer>
  );
}
