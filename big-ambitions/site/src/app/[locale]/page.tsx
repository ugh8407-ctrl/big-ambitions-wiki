import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Hero } from "@/components/home/hero";
import { StartHere } from "@/components/home/start-here";
import { AboutGame } from "@/components/home/about-game";
import { GuideGrid } from "@/components/home/guide-grid";
import { FinalCta } from "@/components/home/final-cta";
import { CodesSidebar } from "@/components/codes-sidebar";
import { getDictionary } from "@/i18n/dictionaries";
import { isLocale } from "@/i18n/locales";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const meta = getDictionary(locale).home.meta;
  return { title: meta.title, description: meta.description, keywords: meta.keywords, alternates: { canonical: `/${locale}`, languages: { en: "/en", de: "/de", fr: "/fr" } }, openGraph: { title: meta.title, description: meta.description, type: "website" } };
}

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  return <><Hero locale={locale}/><StartHere locale={locale}/><AboutGame locale={locale}/><GuideGrid locale={locale}/><section className="container codes-home"><CodesSidebar locale={locale}/></section><FinalCta locale={locale}/></>;
}
