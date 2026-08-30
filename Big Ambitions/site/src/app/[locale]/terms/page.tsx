import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LegalPage } from "@/components/legal-page";
import { isLocale } from "@/i18n/locales";

export async function generateMetadata({params}:{params:Promise<{locale:string}>}):Promise<Metadata>{const {locale}=await params;return{title:locale==="de"?"Nutzungsbedingungen — Big Ambitions Wiki":"Terms of Service — Big Ambitions Wiki",description:"Terms for using the independent Big Ambitions Wiki, including version-sensitive guide limits, safe mod practices, and intellectual-property status."}}
export default async function TermsPage({params}:{params:Promise<{locale:string}>}){const {locale}=await params;if(!isLocale(locale))notFound();return <LegalPage locale={locale} type="terms"/>}
