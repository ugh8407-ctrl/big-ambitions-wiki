import Link from "next/link";
import type { Locale } from "@/i18n/locales";
import { getDictionary } from "@/i18n/dictionaries";

const cards = [
  ["📚","Start Here","Beginner Guide","A complete route from personal needs and early work to a stable, automated first business.","/guides/big-ambitions-guide"],
  ["🏪","Business","Best Starting Business","Compare demand, competition, rent, setup cost, staffing, and cash reserves before opening.","/guides/big-ambitions-best-starting-business"],
  ["📈","Capital","Best Investment","Decide when to reinvest in proven operations and when funds or real estate fit your cash flow.","/guides/big-ambitions-best-investment"],
  ["🚚","Locations","Truck Buying Guide","Use the map to find the vehicle dealer and prepare warehouse parking and delivery capacity.","/guides/big-ambitions-where-to-buy-truck"],
  ["🧩","Customization","Mods","Understand what is confirmed, how to back up saves, and why compatibility still needs checking.","/mods/big-ambitions-mods"],
  ["🗺️","Customization","Blueprints","Learn what blueprints can and cannot do, and how shared layouts relate to current game versions.","/mods/big-ambitions-blueprints"],
  ["🗓️","Updates","Release & Updates","Track the 1.0 release, official patch notes, and what is actually known about future updates.","/updates/big-ambitions-1-0-release-date"],
  ["🛠️","Support","Crash Fixes","Work through updates, file verification, mod removal, and support information without guessing.","/troubleshooting/big-ambitions-crashes"],
] as const;

export function GuideGrid({ locale }: { locale: Locale }) {
  const guides = getDictionary(locale).home.guides;
  return <section className="section guides-section"><div className="container"><span className="eyebrow">{guides.eyebrow}</span><div className="section-heading"><h2>{guides.title}</h2><p>{guides.description}</p></div><div className="grid grid-3 guide-grid">{cards.map(([icon,label,title,description,href])=><Link className="card guide-card" href={`/${locale}${href}`} key={title}><span className="guide-icon">{icon}</span><small>{label}</small><h3>{title}</h3><p>{description}</p><b>{getDictionary(locale).common.readGuide} →</b></Link>)}</div></div></section>;
}
