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
  const alternate = locale === "en" ? "de" : "en";
  return (
    <header className="site-header">
      <div className="header-inner">
        <Link className="brand" href={`/${locale}`} aria-label={`${siteData.siteName} home`}>
          <span className="brand-mark" aria-hidden="true">BA</span>
          <span><strong>Big Ambitions</strong> Wiki</span>
        </Link>
        <nav className="desktop-nav" aria-label="Main navigation">
          {navItems.map(([key, href]) => <Link key={key} href={`/${locale}${href}`}>{dictionary.nav[key]}</Link>)}
        </nav>
        <div className="header-actions">
          <Link className="language-link" href={`/${alternate}`} hrefLang={alternate}>{alternate.toUpperCase()}</Link>
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
