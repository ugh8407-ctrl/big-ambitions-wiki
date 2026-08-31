import Link from "next/link";
import type { Locale } from "@/i18n/locales";
import { getDictionary } from "@/i18n/dictionaries";
import { siteData } from "@/lib/site-data";

const navItems = [
  ["guide", "/guides"],
  ["business", "/guides"],
  ["updates", "/updates"],
  ["mods", "/mods"],
  ["platforms", "/platforms"],
  ["reviews", "/reviews"],
] as const;

export function SiteHeader({ locale }: { locale: Locale }) {
  const dictionary = getDictionary(locale);
  const a11y = locale === "fr" ? { home:"accueil", navigation:"Navigation principale" } : locale === "de" ? { home:"Startseite", navigation:"Hauptnavigation" } : { home:"home", navigation:"Main navigation" };
  return (
    <header className="site-header">
      <div className="header-inner">
        <Link className="brand" href={`/${locale}`} aria-label={`${siteData.siteName} ${a11y.home}`}>
          <span className="brand-mark" aria-hidden="true">BA</span>
          <span><strong>Big Ambitions</strong> Wiki</span>
        </Link>
        <nav className="desktop-nav" aria-label={a11y.navigation}>
          {navItems.map(([key, href]) => <Link key={key} href={`/${locale}${href}`}>{dictionary.nav[key]}</Link>)}
        </nav>
        <div className="header-actions">
          {(["en", "de", "fr"] as const).filter((item) => item !== locale).map((item) => <Link className="language-link" href={`/${item}`} hrefLang={item} key={item}>{item.toUpperCase()}</Link>)}
          <a className="steam-button" href={siteData.links.steam} target="_blank" rel="noreferrer">◉ {dictionary.nav.steam}</a>
          <details className="mobile-menu">
            <summary aria-label={dictionary.nav.menu}>☰</summary>
            <nav>{navItems.map(([key, href]) => <Link key={key} href={`/${locale}${href}`}>{dictionary.nav[key]}</Link>)}</nav>
          </details>
        </div>
      </div>
    </header>
  );
}
