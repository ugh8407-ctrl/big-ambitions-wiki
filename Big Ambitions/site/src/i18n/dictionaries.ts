import type { Locale } from "./locales";

const en = {
  localeName: "English",
  nav: {
    guide: "Guide",
    business: "Business",
    updates: "Updates",
    mods: "Mods",
    platforms: "Platforms",
    reviews: "Reviews",
    steam: "Get on Steam",
    menu: "Open menu",
  },
  common: {
    home: "Home",
    readGuide: "Read guide",
    officialMedia: "Official media",
    toConfirm: "To be confirmed",
    browseAll: "Browse all guides",
  },
  home: {
    meta: {
      title: "Big Ambitions Wiki — Guides, Mods & Business Tips",
      description: "Big Ambitions wiki with beginner guides, best business advice, investment tips, mods, blueprints, updates, platform status, and crash fixes.",
      keywords: "Big Ambitions, wiki, guide, best business, mods, blueprints, updates",
    },
    hero: {
      eyebrow: "Independent fan-made business guide",
      titleLead: "Build Your",
      titleAccent: "Business Empire",
      description: "Start with one small shop, learn the systems that keep it profitable, and grow into a managed network of stores, warehouses, offices, investments, and property.",
      primary: "Start the Beginner Guide",
      secondary: "Explore Business Guides",
      updated: "Updated for the 1.0 release",
      stats: [
        ["Aug 28, 2026", "Full release"],
        ["126", "Steam achievements"],
        ["22", "Supported languages"],
        ["Windows + macOS", "Steam platforms"],
      ],
    },
    start: {
      eyebrow: "Start here",
      title: "Your Big Ambitions Journey",
      description: "Follow the same practical order the game teaches: stabilize your character, open a manageable first business, automate it, then expand.",
      cards: [
        { number: "01", title: "Beginner Guide", description: "Learn personal needs, early objectives, cash discipline, staffing, and the path from your first job to a self-running store.", href: "/guides/big-ambitions-guide" },
        { number: "02", title: "Choose a Starting Business", description: "Use Market Insider demand, competition, rent, setup cost, and staffing needs instead of copying a fixed ranking.", href: "/guides/big-ambitions-best-starting-business" },
        { number: "03", title: "Buy and Set Up Locations", description: "Find vehicles, business equipment, bathroom fixtures, inventory, and the spaces needed for daily operations.", href: "/guides/big-ambitions-where-to-buy-truck" },
        { number: "04", title: "Invest and Expand", description: "Compare reinvesting in proven stores with funds and real estate once stable cash flow can support longer-term choices.", href: "/guides/big-ambitions-best-investment" },
      ],
    },
    about: {
      eyebrow: "About the game",
      title: "What is Big Ambitions?",
      paragraphs: [
        "Big Ambitions is a single-player business simulation by Hovgaard Games. You begin with limited money and basic personal needs, then rent locations, place equipment, buy stock, hire employees, and build operations across New York.",
        "Growth is not limited to running one shop. The official game description includes warehouses, imports, headquarters management, real estate, investment funds, health, and happiness, so lasting progress depends on both business systems and the person behind them.",
      ],
      facts: [["Developer", "Hovgaard Games"], ["Platform", "Windows / macOS on Steam"], ["Genre", "Business simulation"], ["Mode", "Single-player"], ["Early Access", "March 10, 2023"], ["Full release", "August 28, 2026"]],
    },
    guides: {
      eyebrow: "All guides",
      title: "Answers for Every Stage",
      description: "Each page targets one real player question and separates verified facts from details that still need confirmation in the current version.",
    },
    final: {
      title: "Ready to Build Smarter?",
      description: "Start with the beginner route, validate demand before spending, and use the focused guides whenever a location, update, platform, or technical problem slows your progress.",
      primary: "Read the Beginner Guide",
      secondary: "Play on Steam",
    },
  },
  codes: {
    title: "Big Ambitions Codes",
    empty: "None available",
    note: "No official Big Ambitions redemption-code system is confirmed. We do not publish invented codes.",
  },
  footer: {
    about: "Big Ambitions Wiki is an independent fan-made guide covering business setup, investments, updates, customization, platforms, and troubleshooting. It is not affiliated with Hovgaard Games.",
    guides: "Guides",
    official: "Official links",
    legal: "Legal",
    privacy: "Privacy Policy",
    terms: "Terms of Service",
    rights: "Game names and assets belong to their respective owners.",
  },
  legal: {
    privacyTitle: "Privacy Policy",
    termsTitle: "Terms of Service",
    updated: "Last updated August 31, 2026",
  },
};

type DeepWiden<T> = T extends string
  ? string
  : T extends readonly (infer U)[]
    ? DeepWiden<U>[]
    : T extends object
      ? { -readonly [K in keyof T]: DeepWiden<T[K]> }
      : T;

export type Dictionary = DeepWiden<typeof en>;

const de: Dictionary = {
  localeName: "Deutsch",
  nav: { guide: "Guide", business: "Unternehmen", updates: "Updates", mods: "Mods", platforms: "Plattformen", reviews: "Bewertungen", steam: "Auf Steam", menu: "Menü öffnen" },
  common: { home: "Startseite", readGuide: "Guide lesen", officialMedia: "Offizielle Medien", toConfirm: "Noch zu bestätigen", browseAll: "Alle Guides ansehen" },
  home: {
    meta: {
      title: "Big Ambitions Wiki — Guides, Mods & Business-Tipps",
      description: "Big Ambitions Wiki mit Einsteiger-Guides, Geschäftstipps, Investments, Mods, Blueprints, Updates, Plattformstatus und Hilfe bei Abstürzen.",
      keywords: "Big Ambitions, Wiki, Guide, Geschäft, Mods, Blueprints, Updates",
    },
    hero: {
      eyebrow: "Unabhängiger Fan-Guide für Unternehmer",
      titleLead: "Baue dein",
      titleAccent: "Unternehmensimperium",
      description: "Starte mit einem kleinen Laden, lerne die Systeme für stabile Gewinne und entwickle daraus ein Netzwerk aus Geschäften, Lagern, Büros, Anlagen und Immobilien.",
      primary: "Einsteiger-Guide starten",
      secondary: "Unternehmens-Guides ansehen",
      updated: "Aktualisiert für Version 1.0",
      stats: [["28. Aug. 2026", "Vollversion"], ["126", "Steam-Erfolge"], ["22", "Unterstützte Sprachen"], ["Windows + macOS", "Steam-Plattformen"]],
    },
    start: {
      eyebrow: "Hier starten",
      title: "Dein Weg in Big Ambitions",
      description: "Folge einer praktischen Reihenfolge: Versorge deine Figur, eröffne ein überschaubares Geschäft, automatisiere es und expandiere erst danach.",
      cards: [
        { number: "01", title: "Einsteiger-Guide", description: "Lerne Bedürfnisse, frühe Ziele, Bargeldreserven, Personal und den Weg vom ersten Job zum selbstlaufenden Laden.", href: "/guides/big-ambitions-guide" },
        { number: "02", title: "Erstes Geschäft wählen", description: "Nutze Nachfrage, Konkurrenz, Miete, Einrichtungskosten und Personalbedarf statt einer starren Rangliste.", href: "/guides/big-ambitions-best-starting-business" },
        { number: "03", title: "Standorte einrichten", description: "Finde Fahrzeuge, Ausstattung, Toiletten, Waren und die Räume, die dein Betrieb täglich benötigt.", href: "/guides/big-ambitions-where-to-buy-truck" },
        { number: "04", title: "Investieren und wachsen", description: "Vergleiche Reinvestitionen in bewährte Läden mit Fonds und Immobilien, sobald dein Cashflow stabil ist.", href: "/guides/big-ambitions-best-investment" },
      ],
    },
    about: {
      eyebrow: "Über das Spiel",
      title: "Was ist Big Ambitions?",
      paragraphs: [
        "Big Ambitions ist eine Einzelspieler-Wirtschaftssimulation von Hovgaard Games. Du startest mit wenig Geld und grundlegenden Bedürfnissen, mietest Standorte, platzierst Ausstattung, kaufst Waren und stellst Personal ein.",
        "Wachstum endet nicht bei einem Laden. Die offizielle Beschreibung nennt Lagerhäuser, Importe, Hauptquartiere, Immobilien, Investmentfonds sowie Gesundheit und Zufriedenheit.",
      ],
      facts: [["Entwickler", "Hovgaard Games"], ["Plattform", "Windows / macOS auf Steam"], ["Genre", "Wirtschaftssimulation"], ["Modus", "Einzelspieler"], ["Early Access", "10. März 2023"], ["Vollversion", "28. August 2026"]],
    },
    guides: { eyebrow: "Alle Guides", title: "Antworten für jede Phase", description: "Jede Seite beantwortet eine konkrete Spielerfrage und trennt bestätigte Fakten von noch offenen Details." },
    final: { title: "Bereit, klüger zu wachsen?", description: "Beginne mit dem Einsteigerpfad, prüfe die Nachfrage vor Ausgaben und nutze die fokussierten Guides bei Standorten, Updates, Plattformen oder technischen Problemen.", primary: "Einsteiger-Guide lesen", secondary: "Auf Steam spielen" },
  },
  codes: { title: "Big Ambitions Codes", empty: "Keine verfügbar", note: "Ein offizielles Codesystem für Big Ambitions ist nicht bestätigt. Wir veröffentlichen keine erfundenen Codes." },
  footer: { about: "Big Ambitions Wiki ist ein unabhängiger Fan-Guide zu Unternehmensaufbau, Investments, Updates, Anpassungen, Plattformen und Fehlerbehebung. Keine Verbindung zu Hovgaard Games.", guides: "Guides", official: "Offizielle Links", legal: "Rechtliches", privacy: "Datenschutz", terms: "Nutzungsbedingungen", rights: "Spielnamen und Inhalte gehören den jeweiligen Rechteinhabern." },
  legal: { privacyTitle: "Datenschutzerklärung", termsTitle: "Nutzungsbedingungen", updated: "Zuletzt aktualisiert am 31. August 2026" },
};

const dictionaries: Record<Locale, Dictionary> = { en, de };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}
