import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LegalPage } from "@/components/legal-page";
import { isLocale } from "@/i18n/locales";

export async function generateMetadata({params}:{params:Promise<{locale:string}>}):Promise<Metadata>{const {locale}=await params;return locale==="fr"?{title:"Confidentialité — Big Ambitions Wiki",description:"Politique de confidentialité du wiki indépendant Big Ambitions : journaux d’hébergement, liens officiels externes, cookies et statut du site communautaire."}:{title:locale==="de"?"Datenschutz — Big Ambitions Wiki":"Privacy Policy — Big Ambitions Wiki",description:"Privacy practices for the independent Big Ambitions Wiki, including hosting logs, external official links, cookies, and fan-site status."}}
export default async function PrivacyPage({params}:{params:Promise<{locale:string}>}){const {locale}=await params;if(!isLocale(locale))notFound();return <LegalPage locale={locale} type="privacy"/>}
