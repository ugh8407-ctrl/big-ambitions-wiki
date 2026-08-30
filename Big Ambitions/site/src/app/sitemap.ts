import type { MetadataRoute } from "next";
import { getArticles, getCategories } from "@/content/registry";
import { locales } from "@/i18n/locales";

const origin = "https://bigambitionsgame.online";
export default function sitemap():MetadataRoute.Sitemap{return locales.flatMap((locale)=>[
  {url:`${origin}/${locale}`,changeFrequency:"weekly" as const,priority:1},
  ...getCategories(locale).map((category)=>({url:`${origin}/${locale}/${category}`,changeFrequency:"weekly" as const,priority:.8})),
  ...getArticles(locale).map((article)=>({url:`${origin}/${locale}/${article.category}/${article.slug}`,lastModified:new Date("2026-08-31"),changeFrequency:"monthly" as const,priority:.7})),
  {url:`${origin}/${locale}/privacy`,changeFrequency:"yearly" as const,priority:.2},
  {url:`${origin}/${locale}/terms`,changeFrequency:"yearly" as const,priority:.2},
])}
