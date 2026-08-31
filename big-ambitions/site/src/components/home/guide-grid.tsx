import Link from "next/link";
import type { Locale } from "@/i18n/locales";
import { getDictionary } from "@/i18n/dictionaries";

const englishCards = [
  ["📚","Start Here","Beginner Guide","A complete route from personal needs and early work to a stable, automated first business.","/guides/big-ambitions-guide"],
  ["🏪","Business","Best Starting Business","Compare demand, competition, rent, setup cost, staffing, and cash reserves before opening.","/guides/big-ambitions-best-starting-business"],
  ["📈","Capital","Best Investment","Decide when to reinvest in proven operations and when funds or real estate fit your cash flow.","/guides/big-ambitions-best-investment"],
  ["🚚","Locations","Truck Buying Guide","Use the map to find the vehicle dealer and prepare warehouse parking and delivery capacity.","/guides/big-ambitions-where-to-buy-truck"],
  ["🧩","Customization","Mods","Understand what is confirmed, how to back up saves, and why compatibility still needs checking.","/mods/big-ambitions-mods"],
  ["🗺️","Customization","Blueprints","Learn what blueprints can and cannot do, and how shared layouts relate to current game versions.","/mods/big-ambitions-blueprints"],
  ["🗓️","Updates","Release & Updates","Track the 1.0 release, official patch notes, and what is actually known about future updates.","/updates/big-ambitions-1-0-release-date"],
  ["🛠️","Support","Crash Fixes","Work through updates, file verification, mod removal, and support information without guessing.","/troubleshooting/big-ambitions-crashes"],
] as const;

const frenchCards = [
  ["📚","Bien commencer","Guide du débutant","Un parcours complet, des besoins personnels et du premier emploi jusqu’à une première entreprise stable et automatisée.","/guides/big-ambitions-guide"],
  ["🏪","Entreprise","Meilleure entreprise pour débuter","Comparez la demande, la concurrence, le loyer, les frais d’installation, le personnel et la réserve de trésorerie.","/guides/big-ambitions-best-starting-business"],
  ["📈","Capital","Meilleur investissement","Déterminez quand réinvestir dans vos activités rentables et quand choisir les fonds ou l’immobilier.","/guides/big-ambitions-best-investment"],
  ["🚚","Locaux","Guide d’achat du camion","Utilisez la carte pour trouver le concessionnaire et préparez le stationnement et la capacité de livraison de l’entrepôt.","/guides/big-ambitions-where-to-buy-truck"],
  ["🧩","Personnalisation","Mods","Découvrez les informations confirmées, la sauvegarde des parties et les vérifications de compatibilité indispensables.","/mods/big-ambitions-mods"],
  ["🗺️","Personnalisation","Blueprints","Comprenez le rôle des Blueprints et leur compatibilité avec les versions actuelles du jeu.","/mods/big-ambitions-blueprints"],
  ["🗓️","Mises à jour","Sortie et mises à jour","Suivez la sortie 1.0, les notes officielles et les informations réellement connues sur les futures versions.","/updates/big-ambitions-1-0-release-date"],
  ["🛠️","Assistance","Résoudre les crashs","Vérifiez les mises à jour, les fichiers et les mods dans un ordre sûr, sans inventer de solution.","/troubleshooting/big-ambitions-crashes"],
] as const;

export function GuideGrid({ locale }: { locale: Locale }) {
  const guides = getDictionary(locale).home.guides;
  const cards = locale === "fr" ? frenchCards : englishCards;
  return <section className="section guides-section"><div className="container"><span className="eyebrow">{guides.eyebrow}</span><div className="section-heading"><h2>{guides.title}</h2><p>{guides.description}</p></div><div className="grid grid-3 guide-grid">{cards.map(([icon,label,title,description,href])=><Link className="card guide-card" href={`/${locale}${href}`} key={title}><span className="guide-icon">{icon}</span><small>{label}</small><h3>{title}</h3><p>{description}</p><b>{getDictionary(locale).common.readGuide} →</b></Link>)}</div></div></section>;
}
