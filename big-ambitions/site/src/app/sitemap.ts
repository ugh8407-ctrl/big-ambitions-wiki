import type { MetadataRoute } from "next";
import { getArticles, getCategories } from "@/content/registry";
import { locales } from "@/i18n/locales";
import { siteOrigin } from "@/lib/site-url";

const origin = siteOrigin;
export default function sitemap():MetadataRoute.Sitemap{return locales.flatMap((locale)=>[
  {url:`${origin}/${locale}`,changeFrequency:"weekly" as const,priority:1},
  ...getCategories(locale).map((category)=>({url:`${origin}/${locale}/${category}`,changeFrequency:"weekly" as const,priority:.8})),
  ...getArticles(locale).map((article)=>({url:`${origin}/${locale}/${article.category}/${article.slug}`,lastModified:new Date(article.modified ?? article.updated),changeFrequency:"monthly" as const,priority:.7})),
  {url:`${origin}/${locale}/privacy`,changeFrequency:"yearly" as const,priority:.2},
  {url:`${origin}/${locale}/terms`,changeFrequency:"yearly" as const,priority:.2},
])}
