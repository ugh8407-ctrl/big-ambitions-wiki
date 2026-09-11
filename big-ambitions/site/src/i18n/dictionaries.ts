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
      description: "Big Ambitions Wiki mit Einsteiger-Guides, Geschäftstipps, Investments, Mods, Blueprints, Updates, Plattformstatus und Hilfe bei Abstürzen heute.",
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

const fr: Dictionary = {
  localeName: "Français",
  nav: { guide: "Guides", business: "Entreprise", updates: "Mises à jour", mods: "Mods", platforms: "Plateformes", reviews: "Avis", steam: "Voir sur Steam", menu: "Ouvrir le menu" },
  common: { home: "Accueil", readGuide: "Lire le guide", officialMedia: "Média officiel", toConfirm: "À confirmer", browseAll: "Voir tous les guides" },
  home: {
    meta: {
      title: "Big Ambitions Wiki — Guides, mods et entreprises",
      description: "Wiki Big Ambitions en français : guides pour débuter, meilleures entreprises, investissements, mods, blueprints, mises à jour et solutions aux crashs.",
      keywords: "Big Ambitions, wiki, guide, entreprise, mods, blueprints, mises à jour",
    },
    hero: {
      eyebrow: "Guide communautaire indépendant de gestion",
      titleLead: "Bâtissez votre",
      titleAccent: "empire commercial",
      description: "Commencez avec une petite boutique, maîtrisez les mécanismes qui la rendent rentable, puis développez un réseau de magasins, entrepôts, bureaux, placements et biens immobiliers.",
      primary: "Commencer le guide du débutant",
      secondary: "Explorer les guides d’entreprise",
      updated: "Mis à jour pour la version 1.0",
      stats: [["28 août 2026", "Sortie complète"], ["126", "Succès Steam"], ["22", "Langues prises en charge"], ["Windows + macOS", "Plateformes Steam"]],
    },
    start: {
      eyebrow: "Bien commencer",
      title: "Votre parcours dans Big Ambitions",
      description: "Suivez une progression pratique : répondez aux besoins de votre personnage, ouvrez une première entreprise raisonnable, automatisez-la, puis développez-vous.",
      cards: [
        { number: "01", title: "Guide du débutant", description: "Maîtrisez les besoins personnels, les premiers objectifs, la trésorerie, le personnel et le passage du premier emploi à une boutique autonome.", href: "/guides/big-ambitions-guide" },
        { number: "02", title: "Choisir sa première entreprise", description: "Étudiez la demande, la concurrence, le loyer, les frais d’installation et les besoins en personnel plutôt que de suivre un classement figé.", href: "/guides/big-ambitions-best-starting-business" },
        { number: "03", title: "Acheter et aménager des locaux", description: "Trouvez les véhicules, équipements, sanitaires, stocks et espaces nécessaires au fonctionnement quotidien de votre activité.", href: "/guides/big-ambitions-where-to-buy-truck" },
        { number: "04", title: "Investir et se développer", description: "Comparez le réinvestissement dans vos commerces rentables avec les fonds et l’immobilier lorsque votre trésorerie devient stable.", href: "/guides/big-ambitions-best-investment" },
      ],
    },
    about: {
      eyebrow: "À propos du jeu",
      title: "Qu’est-ce que Big Ambitions ?",
      paragraphs: [
        "Big Ambitions est un jeu de simulation d’entreprise en solo développé par Hovgaard Games. Vous débutez avec peu d’argent et des besoins essentiels, puis vous louez des locaux, installez du matériel, achetez du stock et recrutez des employés à New York.",
        "La progression ne se limite pas à une seule boutique. La description officielle mentionne les entrepôts, les importations, le siège social, l’immobilier, les fonds d’investissement, la santé et le bonheur.",
      ],
      facts: [["Développeur", "Hovgaard Games"], ["Plateformes", "Windows / macOS sur Steam"], ["Genre", "Simulation d’entreprise"], ["Mode", "Solo"], ["Accès anticipé", "10 mars 2023"], ["Sortie complète", "28 août 2026"]],
    },
    guides: { eyebrow: "Tous les guides", title: "Des réponses à chaque étape", description: "Chaque page répond à une question précise et distingue clairement les faits vérifiés des informations qui restent à confirmer." },
    final: { title: "Prêt à mieux vous développer ?", description: "Commencez par le parcours du débutant, vérifiez la demande avant de dépenser et consultez nos guides lorsqu’un local, une mise à jour, une plateforme ou un problème technique vous bloque.", primary: "Lire le guide du débutant", secondary: "Jouer sur Steam" },
  },
  codes: { title: "Codes Big Ambitions", empty: "Aucun disponible", note: "Aucun système officiel de codes à utiliser dans Big Ambitions n’est confirmé. Nous ne publions jamais de codes inventés." },
  footer: { about: "Big Ambitions Wiki est un guide communautaire indépendant consacré à la création d’entreprises, aux investissements, aux mises à jour, à la personnalisation, aux plateformes et au dépannage. Ce site n’est pas affilié à Hovgaard Games.", guides: "Guides", official: "Liens officiels", legal: "Informations légales", privacy: "Politique de confidentialité", terms: "Conditions d’utilisation", rights: "Les noms et ressources du jeu appartiennent à leurs ayants droit respectifs." },
  legal: { privacyTitle: "Politique de confidentialité", termsTitle: "Conditions d’utilisation", updated: "Dernière mise à jour le 31 août 2026" },
};

const da: Dictionary = {
  localeName: "Dansk",
  nav: { guide: "Guides", business: "Virksomhed", updates: "Opdateringer", mods: "Mods", platforms: "Platforme", reviews: "Anmeldelser", steam: "Se på Steam", menu: "Åbn menu" },
  common: { home: "Forside", readGuide: "Læs guide", officialMedia: "Officielt medie", toConfirm: "Afventer bekræftelse", browseAll: "Se alle guides" },
  home: {
    meta: {
      title: "Big Ambitions Wiki — Guides, mods og virksomheder",
      description: "Dansk Big Ambitions-wiki med begynderguides, råd om virksomheder, investeringer, mods, blueprints, opdateringer, platforme og hjælp ved nedbrud.",
      keywords: "Big Ambitions, wiki, guide, virksomhed, mods, blueprints, opdateringer",
    },
    hero: {
      eyebrow: "Uafhængig fanlavet virksomhedsguide",
      titleLead: "Byg dit",
      titleAccent: "forretningsimperium",
      description: "Begynd med en lille butik, lær systemerne bag et stabilt overskud, og udvid til et netværk af butikker, lagre, kontorer, investeringer og ejendomme.",
      primary: "Start begynderguiden",
      secondary: "Se virksomhedsguides",
      updated: "Opdateret til version 1.0",
      stats: [["28. august 2026", "Fuld udgivelse"], ["126", "Steam-præstationer"], ["22", "Understøttede sprog"], ["Windows + macOS", "Steam-platforme"]],
    },
    start: {
      eyebrow: "Start her",
      title: "Din rejse i Big Ambitions",
      description: "Følg en praktisk rækkefølge: dæk figurens behov, åbn en overskuelig første virksomhed, automatisér den, og udvid derefter.",
      cards: [
        { number: "01", title: "Begynderguide", description: "Lær om personlige behov, tidlige mål, økonomisk sikkerhed, ansatte og vejen fra det første job til en selvkørende butik.", href: "/guides/big-ambitions-guide" },
        { number: "02", title: "Vælg din første virksomhed", description: "Brug efterspørgsel, konkurrence, husleje, startomkostninger og personalebehov i stedet for en fast rangliste.", href: "/guides/big-ambitions-best-starting-business" },
        { number: "03", title: "Køb og indret lokaler", description: "Find køretøjer, udstyr, toiletinventar, varer og de lokaler, den daglige drift kræver.", href: "/guides/big-ambitions-where-to-buy-truck" },
        { number: "04", title: "Investér og udvid", description: "Sammenlign geninvestering i rentable butikker med fonde og ejendomme, når pengestrømmen er stabil.", href: "/guides/big-ambitions-best-investment" },
      ],
    },
    about: {
      eyebrow: "Om spillet",
      title: "Hvad er Big Ambitions?",
      paragraphs: [
        "Big Ambitions er en virksomhedssimulation for én spiller fra Hovgaard Games. Du starter med få penge og grundlæggende behov, lejer lokaler, placerer udstyr, køber varer og ansætter medarbejdere i New York.",
        "Væksten stopper ikke ved én butik. Den officielle beskrivelse omfatter lagre, import, hovedkontorer, ejendomme, investeringsfonde samt figurens sundhed og trivsel.",
      ],
      facts: [["Udvikler", "Hovgaard Games"], ["Platforme", "Windows / macOS på Steam"], ["Genre", "Virksomhedssimulation"], ["Spiltype", "Enkeltspiller"], ["Early Access", "10. marts 2023"], ["Fuld udgivelse", "28. august 2026"]],
    },
    guides: { eyebrow: "Alle guides", title: "Svar til alle faser", description: "Hver side besvarer et konkret spørgsmål og adskiller bekræftede fakta fra oplysninger, der stadig skal bekræftes." },
    final: { title: "Klar til at bygge smartere?", description: "Begynd med begynderruten, kontrollér efterspørgslen før større køb, og brug de målrettede guides, når lokaler, opdateringer, platforme eller tekniske problemer bremser dig.", primary: "Læs begynderguiden", secondary: "Spil på Steam" },
  },
  codes: { title: "Big Ambitions-koder", empty: "Ingen tilgængelige", note: "Der er ikke bekræftet et officielt system til indløsningskoder i Big Ambitions. Vi offentliggør ikke opdigtede koder." },
  footer: { about: "Big Ambitions Wiki er en uafhængig fanlavet guide om virksomhedsstart, investeringer, opdateringer, tilpasning, platforme og fejlfinding. Siden er ikke tilknyttet Hovgaard Games.", guides: "Guides", official: "Officielle links", legal: "Juridisk", privacy: "Privatlivspolitik", terms: "Brugsvilkår", rights: "Spilnavne og materialer tilhører deres respektive rettighedshavere." },
  legal: { privacyTitle: "Privatlivspolitik", termsTitle: "Brugsvilkår", updated: "Senest opdateret 31. august 2026" },
};

const dictionaries: Record<Locale, Dictionary> = { en, de, fr, da };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}
