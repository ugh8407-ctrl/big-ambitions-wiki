import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { getArticles, getCategories } from "@/content/registry";
import { isLocale, locales, type Locale } from "@/i18n/locales";
import { guideGroups } from "@/content/guide-navigation";

type LocalizedLabel = Record<Locale,{title:string;description:string}>;
const labels: Record<string,LocalizedLabel> = {
  guides:{en:{title:"Big Ambitions Guides",description:"Business setup, locations, education, investments, and practical answers for building stable companies."},de:{title:"Big Ambitions Guides",description:"Unternehmensaufbau, Standorte, Ausbildung, Investments und praktische Antworten für stabile Betriebe."},fr:{title:"Guides Big Ambitions",description:"Création d’entreprise, locaux, formation, investissements et réponses pratiques pour bâtir des activités stables."},da:{title:"Big Ambitions guides",description:"Virksomhedsstart, lokaler, uddannelse, investeringer og praktiske svar til stabile virksomheder."}},
  alternatives:{en:{title:"Games Like Big Ambitions",description:"Verified comparisons for business, multiplayer, life simulation, and romance-focused alternatives."},de:{title:"Alternativen zu Big Ambitions",description:"Geprüfte Vergleiche zu Wirtschaft, Multiplayer, Lebenssimulation und Beziehungen."},fr:{title:"Jeux similaires à Big Ambitions",description:"Comparaisons vérifiées d’alternatives axées sur l’entreprise, le multijoueur, la simulation de vie ou les relations."},da:{title:"Spil som Big Ambitions",description:"Kontrollerede sammenligninger af virksomhedsspil, multiplayer, livssimulation og romantik."}},
  updates:{en:{title:"Big Ambitions Updates",description:"Release dates, future update status, and official patch-note guidance without speculation."},de:{title:"Big Ambitions Updates",description:"Veröffentlichungen, kommende Updates und offizielle Patch Notes ohne Spekulation."},fr:{title:"Mises à jour de Big Ambitions",description:"Dates de sortie, état des prochaines versions et notes officielles, sans spéculation."},da:{title:"Big Ambitions opdateringer",description:"Udgivelsesdatoer, kommende opdateringer og officielle patch notes uden spekulation."}},
  platforms:{en:{title:"Big Ambitions Platforms",description:"Confirmed Windows and macOS availability plus honest PS5 and mobile status checks."},de:{title:"Big Ambitions Plattformen",description:"Bestätigte Verfügbarkeit für Windows und macOS sowie ehrlicher PS5- und Mobilstatus."},fr:{title:"Plateformes de Big Ambitions",description:"Disponibilité confirmée sur Windows et macOS, avec un état honnête des versions PS5 et mobile."},da:{title:"Big Ambitions platforme",description:"Bekræftet Windows- og macOS-understøttelse samt ærlig status for PS5 og mobil."}},
  mods:{en:{title:"Big Ambitions Mods & Blueprints",description:"Steam Workshop mods, reusable layouts, compatibility, backups, and troubleshooting."},de:{title:"Big Ambitions Mods & Blueprints",description:"Workshop-Mods, wiederverwendbare Layouts, Kompatibilität, Sicherungen und Fehlerbehebung."},fr:{title:"Mods et Blueprints de Big Ambitions",description:"Mods de l’atelier Steam, aménagements réutilisables, compatibilité, sauvegardes et dépannage."},da:{title:"Big Ambitions mods og blueprints",description:"Steam Workshop-mods, genanvendelige layouts, kompatibilitet, sikkerhedskopier og fejlfinding."}},
  reviews:{en:{title:"Big Ambitions Review",description:"An evidence-based look at business depth, city life, automation, pacing, and player concerns."},de:{title:"Big Ambitions Bewertung",description:"Ein faktenbasierter Blick auf Wirtschaftstiefe, Stadtleben, Automatisierung und Spieltempo."},fr:{title:"Avis sur Big Ambitions",description:"Une analyse fondée sur les sources de la gestion, de la vie urbaine, de l’automatisation, du rythme et des réserves des joueurs."},da:{title:"Big Ambitions anmeldelse",description:"Et kildebaseret blik på virksomhedsledelse, byliv, automatisering, tempo og spillernes bekymringer."}},
  troubleshooting:{en:{title:"Big Ambitions Troubleshooting",description:"A safe, ordered process for startup crashes, shader compilation, files, mods, and support reports."},de:{title:"Big Ambitions Fehlerbehebung",description:"Ein sicherer Ablauf für Startabstürze, Shader, Dateien, Mods und Supportmeldungen."},fr:{title:"Dépannage de Big Ambitions",description:"Une procédure sûre pour les crashs au démarrage, les shaders, les fichiers, les mods et les demandes d’assistance."},da:{title:"Big Ambitions fejlfinding",description:"En sikker rækkefølge til startnedbrud, shaders, filer, mods og henvendelser til support."}},
  media:{en:{title:"Big Ambitions Music",description:"Verified guidance for the soundtrack, local MP3 radio, streaming rights, and unanswered AI-music questions."},de:{title:"Big Ambitions Musik",description:"Geprüfte Hinweise zu Soundtrack, lokalem MP3-Radio, Streaming-Rechten und offenen Fragen zu KI-Musik."},fr:{title:"Musique de Big Ambitions",description:"Informations vérifiées sur la bande-son, la radio MP3 locale, le streaming et les questions encore ouvertes sur la musique IA."},da:{title:"Big Ambitions musik",description:"Kontrolleret vejledning om soundtrack, lokal MP3-radio, streamingrettigheder og spørgsmål om AI-musik."}},
};

export function generateStaticParams(){return locales.flatMap((locale)=>getCategories(locale).map((category)=>({locale,category})))}

export async function generateMetadata({params}:{params:Promise<{locale:string;category:string}>}):Promise<Metadata>{const {locale,category}=await params;if(!isLocale(locale)||!labels[category])return{};const item=labels[category][locale];return{title:item.title,description:item.description,alternates:{canonical:`/${locale}/${category}`,languages:{en:`/en/${category}`,de:`/de/${category}`,fr:`/fr/${category}`,da:`/da/${category}`}}}}

export default async function CategoryPage({ params }: { params: Promise<{ locale: string; category: string }> }) {
  const { locale, category } = await params;
  if (!isLocale(locale) || !labels[category]) notFound();
  const articles = getArticles(locale).filter((article) => article.category === category);
  const label = labels[category][locale];
  const read = locale === "fr" ? "Lire le guide →" : locale === "de" ? "Anleitung lesen →" : locale === "da" ? "Læs guide →" : "Read guide →";
  const CardHeading = category === "guides" ? "h3" : "h2";
  const card = (article: (typeof articles)[number]) => <Link className="card article-card" href={`/${locale}/${category}/${article.slug}`} key={article.slug}><small>{label.title}</small><CardHeading>{article.title}</CardHeading><p>{article.description}</p><b>{read}</b></Link>;
  const grouped = new Set<string>(guideGroups.flatMap((group) => [...group.slugs]));
  const remaining = articles.filter((article) => !grouped.has(article.slug));
  return <div className="container category-page">
    <Breadcrumbs locale={locale} items={[{ label: label.title }]} />
    <header className="category-header"><span className="tag">{label.title}</span><h1>{label.title}</h1><p>{label.description}</p></header>
    {category === "guides" ? <>
      <nav className="guide-jump-links" aria-label={locale === "fr" ? "Thèmes des guides" : locale === "de" ? "Themen der Anleitungen" : locale === "da" ? "Guideemner" : "Guide topics"}>{guideGroups.map((group) => <a href={`#${group.id}`} key={group.id}>{group.title[locale]}</a>)}</nav>
      {guideGroups.map((group) => <section className="guide-group" id={group.id} key={group.id}><h2>{group.title[locale]}</h2><div className="grid grid-3 article-grid">{group.slugs.map((slug) => articles.find((article) => article.slug === slug)).filter((article): article is (typeof articles)[number] => Boolean(article)).map(card)}</div></section>)}
      {remaining.length > 0 && <div className="grid grid-3 article-grid">{remaining.map(card)}</div>}
    </> : <div className="grid grid-3 article-grid">{articles.map(card)}</div>}
  </div>;
}
