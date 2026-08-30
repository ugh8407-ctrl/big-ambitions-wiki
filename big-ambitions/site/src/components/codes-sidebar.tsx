import type { Locale } from "@/i18n/locales";
import { getDictionary } from "@/i18n/dictionaries";

export function CodesSidebar({ locale }: { locale: Locale }) {
  const { codes } = getDictionary(locale);
  return (
    <aside className="sidebar-card" aria-labelledby="codes-heading">
      <span className="sidebar-icon" aria-hidden="true">⌁</span>
      <h2 id="codes-heading">{codes.title}</h2>
      <strong className="empty-code">{codes.empty}</strong>
      <p>{codes.note}</p>
    </aside>
  );
}
