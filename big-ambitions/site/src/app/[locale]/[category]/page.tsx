import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { getArticles, getCategories } from "@/content/registry";
import { isLocale, locales } from "@/i18n/locales";

const labels: Record<string,{en:string;de:string;description:string}> = {
  guides:{en:"Big Ambitions Guides",de:"Big Ambitions Guides",description:"Business setup, locations, education, investments, and practical answers for building stable companies."},
  alternatives:{en:"Games Like Big Ambitions",de:"Alternativen zu Big Ambitions",description:"Verified comparisons for business, multiplayer, life simulation, and romance-focused alternatives."},
  updates:{en:"Big Ambitions Updates",de:"Big Ambitions Updates",description:"Release dates, future update status, and official patch-note guidance without speculation."},
  platforms:{en:"Big Ambitions Platforms",de:"Big Ambitions Plattformen",description:"Confirmed Windows and macOS availability plus honest PS5 and mobile status checks."},
  mods:{en:"Big Ambitions Mods & Blueprints",de:"Big Ambitions Mods & Blueprints",description:"Steam Workshop mods, reusable layouts, compatibility, backups, and troubleshooting."},
  reviews:{en:"Big Ambitions Review",de:"Big Ambitions Bewertung",description:"An evidence-based look at business depth, city life, automation, pacing, and player concerns."},
  troubleshooting:{en:"Big Ambitions Troubleshooting",de:"Big Ambitions Fehlerbehebung",description:"A safe, ordered process for startup crashes, shader compilation, files, mods, and support reports."},
};

export function generateStaticParams(){return locales.flatMap((locale)=>getCategories(locale).map((category)=>({locale,category})))}

export async function generateMetadata({params}:{params:Promise<{locale:string;category:string}>}):Promise<Metadata>{const {locale,category}=await params;if(!isLocale(locale)||!labels[category])return{};const item=labels[category];const title=locale==="en"?item.en:item.de;return{title,description:item.description,alternates:{canonical:`/${locale}/${category}`,languages:{en:`/en/${category}`,de:`/de/${category}`}}}}

export default async function CategoryPage({params}:{params:Promise<{locale:string;category:string}>}){const {locale,category}=await params;if(!isLocale(locale)||!labels[category])notFound();const articles=getArticles(locale).filter((article)=>article.category===category);const label=labels[category];return <div className="container category-page"><Breadcrumbs locale={locale} items={[{label:locale==="en"?label.en:label.de}]}/><header className="category-header"><span className="tag">{category}</span><h1>{locale==="en"?label.en:label.de}</h1><p>{label.description}</p></header><div className="grid grid-3 article-grid">{articles.map((article)=><Link className="card article-card" href={`/${locale}/${category}/${article.slug}`} key={article.slug}><small>{article.category}</small><h2>{article.keyword}</h2><p>{article.summary}</p><b>{locale==="en"?"Read guide →":"Guide lesen →"}</b></Link>)}</div></div>}
