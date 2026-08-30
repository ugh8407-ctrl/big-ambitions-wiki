import Link from "next/link";
import type { Locale } from "@/i18n/locales";
import { getDictionary } from "@/i18n/dictionaries";

export function Breadcrumbs({ locale, items }: { locale: Locale; items: { label: string; href?: string }[] }) {
  return (
    <nav className="breadcrumbs" aria-label="Breadcrumb">
      <Link href={`/${locale}`}>{getDictionary(locale).common.home}</Link>
      {items.map((item) => <span key={item.label}><b>/</b>{item.href ? <Link href={`/${locale}${item.href}`}>{item.label}</Link> : item.label}</span>)}
    </nav>
  );
}
