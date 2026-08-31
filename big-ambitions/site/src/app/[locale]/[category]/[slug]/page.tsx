import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ArticleShell from "@/content/article-shell.mdx";
import { getArticle, getArticles } from "@/content/registry";
import { isLocale, locales } from "@/i18n/locales";

export function generateStaticParams(){return locales.flatMap((locale)=>getArticles(locale).map((article)=>({locale,category:article.category,slug:article.slug})))}

export async function generateMetadata({params}:{params:Promise<{locale:string;category:string;slug:string}>}):Promise<Metadata>{const {locale,category,slug}=await params;if(!isLocale(locale))return{};const article=getArticle(locale,slug);if(!article||article.category!==category)return{};return{title:article.title,description:article.description,keywords:article.keyword,alternates:{canonical:`/${locale}/${category}/${slug}`,languages:{en:`/en/${category}/${slug}`,de:`/de/${category}/${slug}`,fr:`/fr/${category}/${slug}`}},openGraph:{title:article.title,description:article.description,type:"article"}}}

export default async function ArticlePage({params}:{params:Promise<{locale:string;category:string;slug:string}>}){const {locale,category,slug}=await params;if(!isLocale(locale))notFound();const article=getArticle(locale,slug);if(!article||article.category!==category)notFound();return <ArticleShell article={article} locale={locale}/>}
