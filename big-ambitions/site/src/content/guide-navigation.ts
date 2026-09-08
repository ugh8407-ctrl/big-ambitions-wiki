import type { Locale } from "@/i18n/locales";

export const guideGroups = [
  { id: "business", title: { en: "Start and grow a business", de: "Ein Unternehmen aufbauen", fr: "Créer et développer une entreprise" }, slugs: ["big-ambitions-guide", "big-ambitions-best-starting-business", "big-ambitions-market-insider", "big-ambitions-customer-capacity", "big-ambitions-product-pricing", "big-ambitions-employee-scheduling"] },
  { id: "logistics", title: { en: "Warehouses and deliveries", de: "Lager und Lieferungen", fr: "Entrepôts et livraisons" }, slugs: ["big-ambitions-warehouse-setup", "big-ambitions-purchasing-agent", "big-ambitions-logistics-manager", "big-ambitions-where-to-buy-truck"] },
  { id: "equipment", title: { en: "Offices and equipment", de: "Büros und Ausstattung", fr: "Bureaux et équipements" }, slugs: ["big-ambitions-office-requirements", "big-ambitions-where-to-buy-bathroom-stall", "big-ambitions-water-cooler", "big-ambitions-uniform"] },
  { id: "investments", title: { en: "Investments and customization", de: "Investitionen und Anpassung", fr: "Investissements et personnalisation" }, slugs: ["big-ambitions-best-investment", "big-ambitions-how-to-upload-images", "big-ambitions-how-to-take-courses", "big-ambitions-how-to-get-diploma"] },
] as const;

export function categoryLabel(category: string, locale: Locale): string {
  const names: Record<string, Record<Locale, string>> = {
    guides: { en: "Guides", de: "Anleitungen", fr: "Guides" },
    alternatives: { en: "Similar games", de: "Ähnliche Spiele", fr: "Jeux similaires" },
    updates: { en: "Updates", de: "Aktualisierungen", fr: "Mises à jour" },
    platforms: { en: "Platforms", de: "Plattformen", fr: "Plateformes" },
    mods: { en: "Mods and blueprints", de: "Mods und Baupläne", fr: "Mods et plans" },
    reviews: { en: "Reviews", de: "Bewertungen", fr: "Avis" },
    troubleshooting: { en: "Troubleshooting", de: "Fehlerbehebung", fr: "Dépannage" },
    media: { en: "Music", de: "Musik", fr: "Musique" },
  };
  return names[category]?.[locale] ?? category;
}
