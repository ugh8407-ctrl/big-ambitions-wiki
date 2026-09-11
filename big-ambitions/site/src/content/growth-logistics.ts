import type { Locale } from "@/i18n/locales";
import type { Article } from "./types";

type SourceLocale = Exclude<Locale, "da">;

// Hand-authored topic guides; see docs/research/2026-09-08-logistics-sources.md.
const sources = {
  "setup": {
    "href": "https://forum.bigambitionsgame.com/t/setting-up-second-warehouse/2862",
    "labels": {
      "en": "Developer reply: assigning an importer contract (2023)",
      "de": "Entwicklerantwort: Importvertrag zuweisen (2023)",
      "fr": "Réponse du développeur : attribuer un contrat (2023)"
    }
  },
  "chain": {
    "href": "https://forum.bigambitionsgame.com/t/automatic-resource-purchase/2362",
    "labels": {
      "en": "Official forum: early supply-chain walkthrough (2023)",
      "de": "Offizielles Forum: früher Ablauf der Lieferkette (2023)",
      "fr": "Forum officiel : ancien parcours logistique (2023)"
    }
  },
  "timing": {
    "href": "https://steamcommunity.com/app/1331550/discussions/0/838376971028320164/",
    "labels": {
      "en": "Developer replies: delivery times and shelf alerts (May 2026)",
      "de": "Entwicklerantworten: Lieferzeiten und Regalwarnungen (Mai 2026)",
      "fr": "Réponses du développeur : horaires et alertes de rayon (mai 2026)"
    }
  },
  "smart": {
    "href": "https://steamcommunity.com/app/1331550/discussions/0/573770913623000014/",
    "labels": {
      "en": "Developer reply: Smart Delivery and recurrence (2025)",
      "de": "Entwicklerantwort: Smart Delivery und Wiederholung (2025)",
      "fr": "Réponse du développeur : Smart Delivery et récurrence (2025)"
    }
  },
  "lock": {
    "href": "https://steamcommunity.com/app/1331550/discussions/0/589559079513544134/",
    "labels": {
      "en": "Developer save diagnosis: agent plan assignment (July 2026)",
      "de": "Entwicklerdiagnose: Einkäufer im Plan zuweisen (Juli 2026)",
      "fr": "Diagnostic du développeur : affectation au plan (juillet 2026)"
    }
  },
  "units": {
    "href": "https://steamcommunity.com/app/1331550/discussions/0/803468365964390097/",
    "labels": {
      "en": "Developer reply: individual units and display stock (March 2026)",
      "de": "Entwicklerantwort: Stückzahlen und Verkaufsbestand (März 2026)",
      "fr": "Réponse du développeur : unités et stock en rayon (mars 2026)"
    }
  },
  "targets": {
    "href": "https://steamcommunity.com/app/1331550/discussions/0/803468669855480810/",
    "labels": {
      "en": "Developer reply: warehouse delivery targets (March 2026)",
      "de": "Entwicklerantwort: Lieferziele des Lagers (März 2026)",
      "fr": "Réponse du développeur : stocks cibles des magasins (mars 2026)"
    }
  },
  "capacity": {
    "href": "https://steamcommunity.com/app/1331550/discussions/0/3790381090377042669/",
    "labels": {
      "en": "Developer replies: manager, vehicle and inventory limits (2023–2024)",
      "de": "Entwicklerantworten: Manager, Fahrzeuge und Bestand (2023–2024)",
      "fr": "Réponses du développeur : responsable, véhicules et stocks (2023–2024)"
    }
  },
  "factory": {
    "href": "https://steamcommunity.com/app/1331550/discussions/0/824857476143015384/",
    "labels": {
      "en": "Developer reply: factories and warehouse distribution (February 2026)",
      "de": "Entwicklerantwort: Fabriken und Warenverteilung (Februar 2026)",
      "fr": "Réponse du développeur : usines et distribution (février 2026)"
    }
  },
  "price": {
    "href": "https://steamcommunity.com/app/1331550/discussions/0/3826413850815386852/",
    "labels": {
      "en": "Developer reply: purchasing skill and Import Index (2023)",
      "de": "Entwicklerantwort: Einkaufskompetenz und Import Index (2023)",
      "fr": "Réponse du développeur : compétence d’achat et Import Index (2023)"
    }
  },
  "multi": {
    "href": "https://forum.bigambitionsgame.com/t/getting-bigger/4772",
    "labels": {
      "en": "Developer reply: several agents for one importer (2023)",
      "de": "Entwicklerantwort: mehrere Einkäufer je Importeur (2023)",
      "fr": "Réponse du développeur : plusieurs acheteurs par importateur (2023)"
    }
  },
  "demand": {
    "href": "https://steamcommunity.com/app/1331550/discussions/0/4038104984934236501/",
    "labels": {
      "en": "Developer explanation: unmet demand and competition (2024)",
      "de": "Entwicklererklärung: offene Nachfrage und Konkurrenz (2024)",
      "fr": "Explication du développeur : demande restante et concurrence (2024)"
    }
  },
  "demandSize": {
    "href": "https://steamcommunity.com/app/1331550/discussions/0/4206993639696426186/",
    "labels": {
      "en": "Developer reply: product demand and business size (2024)",
      "de": "Entwicklerantwort: Produktnachfrage und Geschäftsgröße (2024)",
      "fr": "Réponse du développeur : demande et taille du commerce (2024)"
    }
  },
  "insights": {
    "href": "https://steamcommunity.com/app/1331550/discussions/0/3814034023687334766/",
    "labels": {
      "en": "Developer reply: customer traffic and BizMan Insights (2023)",
      "de": "Entwicklerantwort: Kundenzahlen und BizMan Insights (2023)",
      "fr": "Réponse du développeur : fréquentation et BizMan Insights (2023)"
    }
  },
  "competitor": {
    "href": "https://forum.bigambitionsgame.com/t/view-competitor-prices-in-market-insider-app/2627",
    "labels": {
      "en": "Developer reply: competitor prices in BizMan (2024)",
      "de": "Entwicklerantwort: Konkurrenzpreise in BizMan (2024)",
      "fr": "Réponse du développeur : prix concurrents dans BizMan (2024)"
    }
  },
  "events": {
    "href": "https://steamcommunity.com/app/1331550/discussions/0/599645311739138579/",
    "labels": {
      "en": "Developer reply: quiet market events (2025)",
      "de": "Entwicklerantwort: wenige Marktereignisse (2025)",
      "fr": "Réponse du développeur : peu d’événements de marché (2025)"
    }
  },
  "custom": {
    "href": "https://steamcommunity.com/app/1331550/discussions/0/803470896719385599/",
    "labels": {
      "en": "Developer save diagnosis: custom economy and new businesses (April 2026)",
      "de": "Entwicklerdiagnose: eigene Wirtschaftseinstellungen (April 2026)",
      "fr": "Diagnostic du développeur : économie personnalisée (avril 2026)"
    }
  },
  "property": {
    "href": "https://steamcommunity.com/app/1331550/discussions/0/612032045420393593/",
    "labels": {
      "en": "Developer reply: real estate versus businesses (2025)",
      "de": "Entwicklerantwort: Immobilien und Unternehmen (2025)",
      "fr": "Réponse du développeur : immobilier et entreprises (2025)"
    }
  }
} as const;

type Draft = Omit<Article, "locale" | "category" | "updated" | "sources" | "summary" | "relatedSlugs"> & {
  sourceKeys?: (keyof typeof sources)[];
  relatedSlugs?: string[];
};

const english: Draft[] = [
  {
    "slug": "big-ambitions-warehouse-setup",
    "keyword": "big ambitions warehouse setup",
    "title": "Big Ambitions Warehouse Setup: A Working Supply Chain",
    "description": "Build a reliable Big Ambitions warehouse setup with pallet storage, importer orders, vehicles, drivers, and store targets that keep your businesses stocked.",
    "answer": "Set up a warehouse with pallet storage, a delivery vehicle and its driver, then connect purchasing at your headquarters and add store destinations through a Logistics Manager. Prove that stock reaches one shop before expanding. Importing into the warehouse and distributing from it are separate jobs.",
    "sections": [
      {
        "heading": "Start with the stores the warehouse must supply",
        "paragraphs": [
          "Write down which stores will use the warehouse and every product they need. Include shared consumables as well as the items customers buy. This gives the project a measurable purpose: replacing repeated supply trips for a known group of businesses. A large empty building does not solve purchasing or distribution by itself.",
          "Use current sales to estimate how much inventory those stores consume between supplier deliveries. Keep money available for the first order and ongoing wages after paying for the premises and equipment. Compare the complete expense with the time saved and the additional stock the network makes available. There is no verified universal profit threshold at which every save should open a warehouse."
        ]
      },
      {
        "heading": "Prepare the building, storage and vehicle",
        "paragraphs": [
          "Open the premises as a warehouse and install pallet shelving before its first receipt. Check the building’s vehicle spaces, then bring in a delivery vehicle and assign an eligible Delivery Driver in the warehouse management screen. The official forum’s March 2023 setup walkthrough documents this basic chain; use the present interface for equipment requirements and assignments.",
          "Plan around the actual assortment. Products arrive in different box quantities, so a list of unit targets is not a complete storage plan. Inspect each product’s packaging and the free capacity of your shelves. Leave room for the incoming order rather than assuming that goods will leave early enough to make space."
        ],
        "bullets": [
          "Confirm that the warehouse can receive the selected goods.",
          "Check vehicle and driver assignments in BizMan.",
          "Check storage capacity at the receiving shops too."
        ]
      },
      {
        "heading": "Connect purchasing to the correct receiving site",
        "paragraphs": [
          "A Purchasing Agent needs a headquarters workstation and an importer relationship. A developer’s March 2023 reply describes assigning the agent at HQ before visiting an importer to make the contract. In the current purchasing plan, verify the actual receiving warehouse and the exact products, amounts and order options before confirming.",
          "Choose Smart Delivery when you want a refill toward a target; enable recurring ordering separately when that refill should repeat. A developer clarified the two independent controls in October 2025. A recurring fixed order can accumulate stock, while Smart without recurrence does not establish a permanent weekly order. Start with quantities whose cost and storage needs you can easily check."
        ]
      },
      {
        "heading": "Add one shop and confirm the first delivery",
        "paragraphs": [
          "Open the headquarters Logistics Manager plan, select the warehouse and add a shop destination. Set positive product targets that match the shop’s needs and available space. The March 2026 developer explanation confirms that a warehouse route fills toward the destination target, so the entered amount is not an extra shipment of that size every time.",
          "Use one product as your initial check. Note its source stock, destination stock and saved target, then inspect the destination after the delivery event. Check the whole shop inventory instead of looking only for boxes in the back room: a March 2026 developer reply says receipts fill displays before storage. Once this transfer works, add the rest of the assortment and destinations."
        ]
      },
      {
        "heading": "Keep the two delivery schedules in view",
        "paragraphs": [
          "In May 2026 the developer specified daily internal deliveries at 02:00 and ordinary imports on Monday at 08:00. Monday distribution therefore occurs before that morning’s imported stock arrives. Retain enough warehouse inventory for the earlier run; a later full warehouse does not disprove a shortage warning issued before the import.",
          "If you also manufacture goods, retain the warehouse stage. The developer confirmed in February 2026 that factories send goods to warehouses or export them, and warehouses distribute to stores. For a failure, trace one item from its source to its destination: missing receipt, missing assignment, low target and insufficient receiving space require different corrections. Record the warning time before changing the plan."
        ]
      }
    ],
    "sourceKeys": [
      "chain",
      "setup",
      "smart",
      "targets",
      "units",
      "timing",
      "factory"
    ],
    "relatedSlugs": [
      "big-ambitions-purchasing-agent",
      "big-ambitions-logistics-manager",
      "big-ambitions-where-to-buy-truck",
      "big-ambitions-guide"
    ]
  },
  {
    "slug": "big-ambitions-logistics-manager",
    "keyword": "big ambitions logistics manager",
    "title": "Big Ambitions Logistics Manager: Routes and Stock",
    "description": "Use your Big Ambitions logistics manager to connect a warehouse to stores, set stock targets, check vehicle assignments, and diagnose missed deliveries.",
    "answer": "A Logistics Manager organizes deliveries from a stocked warehouse to your businesses. Assign the manager at headquarters, connect the warehouse, add each destination and set product stock targets. The manager handles distribution; a Purchasing Agent or another supply source must first provide the goods.",
    "sections": [
      {
        "heading": "Give the manager a complete route to operate",
        "paragraphs": [
          "Begin at the headquarters and open the Logistics Manager plan. Verify the employee assignment and source warehouse, then check the vehicle and driver at that warehouse. Finally add the destination store and its products. A saved destination without usable source inventory is not yet a working supply route.",
          "Treat the first store as a commissioning check. Choose an item already available in the warehouse and wanted at the shop, with enough receiving space for the refill. Record the starting quantities and inspect the result after the next internal delivery. This small check separates a configuration problem from the more complicated task of balancing a whole network."
        ]
      },
      {
        "heading": "Enter the stock you want the shop to retain",
        "paragraphs": [
          "The March 2026 developer reply on warehouse Smart Delivery confirms that the route value is a destination target. If a shop needs 240 units in total and already holds 90, its nominal shortfall is 150. These are illustrative numbers, not recommended stock levels. The target itself must come from your own shop’s use and storage.",
          "Choose a target that lasts until the next delivery, allowing for busier days. Revisit it when opening hours, product displays or sales change. A shop can run out even when its route operates correctly if you asked it to retain too little stock. Conversely, an oversized target can occupy space needed by other products."
        ]
      },
      {
        "heading": "Separate destination capacity from cargo space",
        "paragraphs": [
          "The developer’s 2023 explanation describes one Logistics Manager per warehouse, with available destinations affected by the vehicle and manager’s skill. Before recruiting another manager for the same warehouse, inspect the current route limit. Training or a different delivery vehicle may address the limitation you actually face; current numbers and driver requirements belong in the live interface.",
          "A September 2024 developer clarification also distinguishes automated deliveries from manually carried cargo: the stated limit was destinations, source inventory and receiving space, not a nightly unit cap based on the truck’s manual cargo. Treat that as dated guidance, and do not assume that buying a bigger truck will fix an empty warehouse or a full shop."
        ]
      },
      {
        "heading": "Read a shelf warning before rebuilding the route",
        "paragraphs": [
          "Check whether the alert comes from logistics or from an individual sales display. In a May 2026 exchange, the developer traced repeated low-stock warnings to a target that could not fill all the shop’s drink fridges. Products were arriving, but the amount requested was insufficient for the collection of displays.",
          "Inspect total stock across the relevant displays and storage, then compare it with the target. If one fixture is low while another holds the same product, first review that comparison. If the warehouse still holds the goods and the entire shop remains short, check the saved destination, product selection and free receiving space. Increasing the import order will not correct a destination that asks for too little."
        ]
      },
      {
        "heading": "Verify timing, then expand deliberately",
        "paragraphs": [
          "The developer’s May 2026 timing explanation puts internal deliveries at 02:00 daily. Standard imports occur later, at 08:00 on Monday. Check the timestamp on a failed-delivery message before comparing it with today’s warehouse contents. The stock may have arrived after the route attempted its transfer.",
          "For a repeat failure, preserve the warehouse, destination, item, target, employee assignments and exact warning. Check the latest official patch notes if several employee systems stopped together, and send a focused in-game bug report if the configuration still looks valid. Add further destinations only after the original shop receives the expected refill and remains supplied through a complete trading day."
        ]
      }
    ],
    "sourceKeys": [
      "chain",
      "targets",
      "capacity",
      "timing"
    ],
    "relatedSlugs": [
      "big-ambitions-warehouse-setup",
      "big-ambitions-purchasing-agent",
      "big-ambitions-where-to-buy-truck",
      "big-ambitions-patch-notes"
    ]
  },
  {
    "slug": "big-ambitions-purchasing-agent",
    "keyword": "big ambitions purchasing agent",
    "title": "Big Ambitions Purchasing Agent: Contracts and Orders",
    "description": "Set up your Big Ambitions purchasing agent, connect importer contracts, separate Smart Delivery from recurring orders, and check why a purchase was missed.",
    "answer": "Hire a Purchasing Agent for your headquarters, assign the employee to a workstation and connect an importer contract. Then assign the agent to the purchasing plan, choose the receiving location and save the products and ordering options. Being present on the HQ schedule alone does not complete the plan.",
    "sections": [
      {
        "heading": "Connect the employee, importer and purchasing plan",
        "paragraphs": [
          "The developer’s March 2023 setup answer starts with hiring the agent, providing an empty headquarters desk and assigning the employee before visiting an importer at the piers. Use that sequence to establish the relationship, then inspect the current plan rather than assuming that a visible employee automatically owns every order.",
          "Select an importer that actually offers the intended goods. Check the product’s current F1 sourcing information and the contract catalog, then verify the warehouse destination and item list. Keep a short record of which agent purchases each product for each receiving location. This becomes particularly useful once several contracts contain overlapping products."
        ]
      },
      {
        "heading": "Use Smart and recurring for different decisions",
        "paragraphs": [
          "Smart Delivery controls how much is purchased. Recurring controls whether the order repeats. The developer explicitly separated these settings in October 2025. For routine replenishment toward a chosen inventory level, enable both; for an occasional refill, Smart can be used without recurring.",
          "Think of a hypothetical target of 800 units with 650 remaining: the top-up is 150 before other order constraints. A fixed order of 800 would add another 800. This arithmetic illustrates the distinction, not a suggested warehouse size. After saving, inspect both controls so an intended refill does not become repeated accumulation or a single order that silently ends."
        ]
      },
      {
        "heading": "Reassign the plan before the Sunday cutoff",
        "paragraphs": [
          "A July 2026 developer investigation found an agent back on the HQ schedule but absent from the Purchasing Agent plan after training. The developer identified Sunday before 20:00 as the required assignment deadline. Review the plan after training or an HQ move; seeing the employee at a desk on Monday is insufficient evidence that the previous evening’s order was confirmed.",
          "Make this a quick weekly habit: check the named agent, receiving location, products and saved order status before the deadline. If you moved headquarters, inspect the former HQ for empty purchasing plans as well. Keep the old and new configurations visible while correcting the move so you can identify which plan was supposed to place the order."
        ]
      },
      {
        "heading": "Read units and prices from the actual order",
        "paragraphs": [
          "A March 2026 developer reply confirms that a quantity of one means one item, not one box. Read the units field literally and compare the proposed receipt with the receiving site’s capacity. Inspect current order limits and the quoted total before confirming; an old walkthrough’s minimum spend or box conversion is not a safe substitute.",
          "Skill is also not a promise that every new contract will be cheaper. In April 2023 the developer explained that agent skill and the Import Index both affected the offer, with prices fixed when a contract was made. That explanation predates later economy updates. Compare the live offer with your existing prices and preserve the order list before renegotiating."
        ]
      },
      {
        "heading": "Diagnose a missed purchase and scale carefully",
        "paragraphs": [
          "If no goods arrived, check the saved plan, agent assignment before cutoff, confirmed or recurring status, available cash, receiving capacity and the actual supplier message. If the warehouse received the goods but the shop is empty, move the investigation to the warehouse’s distribution plan. Purchasing and delivery to shops are separate stages.",
          "An August 2023 developer reply confirms that multiple Purchasing Agents can work with the same importer. Its practical prerequisite was that the new agents were scheduled and assigned before contracting. Use additional relationships to solve an identified sourcing need, and read current constraints before expanding. A second agent does not by itself create storage or repair a missing store route."
        ]
      }
    ],
    "sourceKeys": [
      "setup",
      "smart",
      "lock",
      "units",
      "price",
      "multi"
    ],
    "relatedSlugs": [
      "big-ambitions-warehouse-setup",
      "big-ambitions-logistics-manager",
      "big-ambitions-market-insider",
      "big-ambitions-guide"
    ]
  },
  {
    "slug": "big-ambitions-market-insider",
    "keyword": "big ambitions market insider",
    "title": "Big Ambitions Market Insider: Read Demand Correctly",
    "description": "Read Big Ambitions Market Insider demand, competition, and market events, then compare them with real store sales before choosing your next business.",
    "answer": "Use Market Insider to compare the remaining demand for products in the neighborhood you intend to serve. Check suppliers and recent market activity, then assess the site and business costs separately. Demand is an opportunity indicator; it is not a promised customer count, profit figure or forecast.",
    "sections": [
      {
        "heading": "Compare the right neighborhood and products",
        "paragraphs": [
          "Select the neighborhood of the proposed shop and record demand for its main products. Review the whole assortment rather than choosing a business because one optional item looks attractive. Recheck the selected neighborhood when opening the app while travelling so your comparison still concerns the intended site.",
          "Create a small shortlist of businesses that you can afford to open and supply. For each one, note the main product, competing suppliers, suitable premises and equipment needs. This is a planning method, not a hidden game formula. It helps turn a percentage into a decision that also accounts for rent, wages and inventory."
        ]
      },
      {
        "heading": "Understand why demand falls when you enter",
        "paragraphs": [
          "In a January 2024 developer explanation, Market Insider shows current unfulfilled demand. Adding a seller meets part of that demand, including when the new seller is you. A drop after opening therefore does not establish that the store has failed or that the earlier reading was a prediction that proved wrong.",
          "The same discussion explains that products tolerate different amounts of competition. Avoid a universal rule such as refusing every market below one chosen percentage. Use the reading to compare opportunities for that product, then examine actual sales after opening. Do not convert a percentage directly into expected daily units without testing the business."
        ]
      },
      {
        "heading": "Keep competition separate from store performance",
        "paragraphs": [
          "A February 2024 developer reply says the demand/competition measure reflects how many businesses sell the item; building size does not determine that particular reduction. A small and a large seller can affect the indicator similarly even though their operating costs and sales capacity differ substantially.",
          "Your shop’s customer flow still has other influences. A June 2023 developer reply lists building traffic, marketing, customer service, business type and competition among them, and recommends the BizMan Insights customer graph for hourly results. Follow a promising demand reading with a check of whether your own premises and staffing can serve the opportunity."
        ]
      },
      {
        "heading": "Use prices and market events as separate evidence",
        "paragraphs": [
          "Check the lowest competitor price in BizMan when reviewing your selling prices. A March 2024 developer reply confirms that this information was added there following a request for it in Market Insider. Record your current price and unit sales before changing the price, then compare a complete trading period with stock and staffing available.",
          "Read recent market activity, but do not assume a quiet event list means the simulation is broken. In February 2025 the developer explained that HQs, warehouses and distribution do not themselves alter market demand. Opening a small number of stores in a large customer market may also leave relatively little visible change. Recheck the products your retail businesses actually sell."
        ]
      },
      {
        "heading": "Choose the next business using a repeatable comparison",
        "paragraphs": [
          "Compare a candidate’s demand, premises, startup spending and supply needs with one alternative. For example, a product with stronger demand may still be a poor next step if its equipment and inventory would use all your available money. This is an operating decision based on your save; the app does not publish a universal best-business ranking.",
          "After opening, note units sold and hourly customer flow over comparable days. Check stock availability before blaming demand for low sales. Revisit the comparison after a new competitor or major change to your assortment. Custom settings matter too: an April 2026 developer save diagnosis tied difficult profitability to high wages and low customer flow.",
          "Finally, distinguish property shopping from buying a business. The developer clarified in March 2025 that Market Insider’s Real Estate tab lists buildings, not operating businesses with their employees. Read the transaction you are considering carefully, and do not include an existing workforce in a plan based only on a property listing."
        ]
      }
    ],
    "sourceKeys": [
      "demand",
      "demandSize",
      "insights",
      "competitor",
      "events",
      "custom",
      "property"
    ],
    "relatedSlugs": [
      "big-ambitions-best-starting-business",
      "big-ambitions-guide",
      "big-ambitions-purchasing-agent",
      "big-ambitions-warehouse-setup"
    ]
  }
];

const german: Draft[] = [
  {
    "slug": "big-ambitions-warehouse-setup",
    "keyword": "Big Ambitions Lager einrichten",
    "title": "Big Ambitions Lager einrichten: Waren sicher liefern",
    "description": "Ein Big Ambitions Lager einrichten heißt, Regale, Einkauf, Fahrzeuge und Lieferziele zu verbinden. So versorgst du deine Geschäfte mit passenden Beständen.",
    "answer": "Richte ein Lager mit Palettenregalen, Lieferfahrzeug und Fahrer ein. Verbinde anschließend den Einkauf in der Zentrale und lege über den Logistikmanager die Geschäfte als Lieferziele an. Prüfe zuerst eine vollständige Lieferung zu einem Laden, bevor du das Netz erweiterst.",
    "sections": [
      {
        "heading": "Den Bedarf der Geschäfte zuerst bestimmen",
        "paragraphs": [
          "Notiere die zu beliefernden Geschäfte und alle benötigten Produkte einschließlich Verbrauchsmaterial. Schätze anhand ihrer Verkäufe den Bedarf bis zur nächsten Beschaffung. Reserviere nach Miete und Einrichtung noch Geld für Waren und Löhne. Einen allgemeingültigen Gewinnbetrag, ab dem sich jedes Lager lohnt, belegen die Quellen nicht.",
          "Vergleiche die gesamten laufenden Kosten mit der gesparten Zeit und dem Nutzen einer gemeinsamen Versorgung. Die Lagerfläche allein ersetzt weder einen Einkaufsplan noch Lieferziele."
        ]
      },
      {
        "heading": "Gebäude, Regale und Fahrzeug vorbereiten",
        "paragraphs": [
          "Eröffne die Räume als Lager und installiere vor der ersten Anlieferung Palettenregale. Prüfe die Fahrzeugplätze, bringe ein Lieferfahrzeug hinein und weise ihm einen geeigneten Fahrer zu. Dieser Grundaufbau ist im offiziellen Forum für März 2023 beschrieben; aktuelle Anforderungen und Zuordnungen kontrollierst du in BizMan.",
          "Berechne den Platz anhand der tatsächlichen Produkte und ihrer Verpackungsmengen. Halte Kapazität für die nächste Anlieferung frei. Kontrolliere auch die freien Lagerplätze der Geschäfte."
        ]
      },
      {
        "heading": "Den Einkauf mit dem richtigen Lager verbinden",
        "paragraphs": [
          "Weise dem Einkäufer einen Arbeitsplatz in der Zentrale zu und schließe mit ihm den passenden Importvertrag ab. Kontrolliere im Einkaufsplan Empfängerlager, Produkte, Mengen und Bestelloptionen.",
          "Smart Delivery ergänzt bis zum Zielbestand; die Wiederholung ist eine eigene Einstellung. Aktiviere beide für regelmäßiges Auffüllen. Eine feste wiederkehrende Menge kann Überschüsse ansammeln, Smart allein löst dagegen keine dauerhafte wöchentliche Bestellung aus. Beginne mit überschaubaren Mengen."
        ]
      },
      {
        "heading": "Eine erste Lieferung zum Geschäft prüfen",
        "paragraphs": [
          "Wähle im Plan des Logistikmanagers das Lager und zunächst einen Laden. Trage positive Produktziele ein, die zu dessen Bedarf und Platz passen. Der Zielwert beschreibt den gewünschten Gesamtbestand, keine zusätzliche Menge je Lieferung.",
          "Prüfe für ein Produkt Quellbestand, Ladenbestand und Zielwert vor und nach dem Lieferereignis. Schaue auch auf die Verkaufsregale: Laut Entwicklerantwort vom März 2026 werden zuerst diese und danach die Lagerregale aufgefüllt. Ergänze erst nach erfolgreichem Transfer weitere Produkte und Ziele."
        ]
      },
      {
        "heading": "Die beiden Lieferzeiten berücksichtigen",
        "paragraphs": [
          "Die Entwicklerantwort vom Mai 2026 nennt interne Lieferungen täglich um 02:00 Uhr und reguläre Importe montags um 08:00 Uhr. Halte deshalb noch Waren für die frühere Montagsrunde bereit. Eine Meldung über fehlende Ware kann vor dem späteren Import korrekt gewesen sein.",
          "Bei eigener Produktion bleibt das Lager nötig: Seit der im Februar 2026 erläuterten Trennung liefern Fabriken an Lager oder exportieren; Lager beliefern die Geschäfte. Verfolge bei Problemen ein einzelnes Produkt und unterscheide fehlenden Eingang, falsche Zuordnung, zu niedrigen Zielwert und fehlenden Platz. Notiere zuerst die Uhrzeit der Warnung."
        ]
      }
    ]
  },
  {
    "slug": "big-ambitions-logistics-manager",
    "keyword": "Big Ambitions Logistikmanager",
    "title": "Big Ambitions Logistikmanager: Lieferungen planen",
    "description": "Mit dem Big Ambitions Logistikmanager verbindest du Lager und Geschäfte, setzt Bestandsziele und findest Fehler bei Fahrzeugen oder ausbleibenden Lieferungen.",
    "answer": "Der Logistikmanager organisiert Lieferungen aus einem gefüllten Lager an deine Geschäfte. Weise ihm in der Zentrale das Lager zu, ergänze die Ziele und setze Produktbestände. Der Einkäufer oder eine andere Quelle muss die Ware zuvor bereitstellen.",
    "sections": [
      {
        "heading": "Eine vollständige Route zuweisen",
        "paragraphs": [
          "Öffne den Logistikplan in der Zentrale und kontrolliere Mitarbeiter und Quelllager. Prüfe dort Fahrzeug und Fahrer, dann das Zielgeschäft und die ausgewählten Produkte. Ein eingetragenes Ziel ohne Quellbestand kann noch nicht versorgt werden.",
          "Teste zuerst einen Laden mit einem verfügbaren Produkt und freiem Empfangsplatz. Vergleiche dessen Mengen vor und nach der nächsten Lieferung. So erkennst du einen Zuordnungsfehler, bevor das gesamte Netz davon abhängt."
        ]
      },
      {
        "heading": "Den gewünschten Ladenbestand eintragen",
        "paragraphs": [
          "Der Entwickler bestätigt im März 2026, dass die Liefermenge automatisch zum Zielbestand ergänzt wird. Beispiel: Bei einem Ziel von 240 Stück und 90 vorhandenen Stück fehlen 150. Diese Zahlen erklären die Rechnung und sind keine empfohlenen Bestände.",
          "Wähle den Zielwert anhand des Bedarfs bis zur nächsten Lieferung und stärkerer Verkaufstage. Passe ihn bei geänderten Öffnungszeiten, Auslagen oder Verkäufen an. Ein zu kleiner Wert verursacht trotz funktionierender Lieferung Engpässe; ein zu großer belegt Platz anderer Produkte."
        ]
      },
      {
        "heading": "Lieferziele und Frachtraum unterscheiden",
        "paragraphs": [
          "Laut Entwicklererklärung von 2023 ist ein Logistikmanager je Lager vorgesehen; Fahrzeug und Kompetenz beeinflussen die Zahl der Ziele. Prüfe das aktuelle Limit, bevor du einen weiteren Manager einstellst. Ausbildung oder ein anderes Fahrzeug können die passende Lösung sein. Aktuelle Werte und Fahreranforderungen stehen im Spiel.",
          "Eine Entwicklerantwort von September 2024 unterscheidet zudem manuelles Ladevolumen von automatischer Verteilung. Damals begrenzten Ziele, Quellbestand und Empfangsplatz den Ablauf, nicht ein nächtliches Stücklimit durch den Kofferraum. Ein größeres Fahrzeug behebt daher weder fehlende Waren noch volle Geschäfte."
        ]
      },
      {
        "heading": "Regalwarnungen richtig einordnen",
        "paragraphs": [
          "Kläre, ob die Warnung von der Logistik oder von einem einzelnen Verkaufsregal stammt. Im Mai 2026 erklärte der Entwickler einen Fall, in dem der Zielwert nicht genügte, um sämtliche Getränkekühlschränke zu füllen, obwohl geliefert wurde.",
          "Vergleiche Auslagen und Lagerbestand zusammen mit dem Ziel. Ist nur ein Regal knapp, prüfe zuerst diese Verteilung. Fehlt Ware im gesamten Laden, kontrolliere Zielgeschäft, Produkt und freien Platz. Mehr Einkauf korrigiert keinen zu niedrigen Lieferzielwert."
        ]
      },
      {
        "heading": "Zeitpunkt prüfen und anschließend erweitern",
        "paragraphs": [
          "Interne Lieferungen erfolgen laut Entwicklerantwort vom Mai 2026 täglich um 02:00 Uhr; reguläre Montagsimporte kommen um 08:00 Uhr. Vergleiche eine Warnung deshalb mit dem Bestand zu ihrem tatsächlichen Zeitpunkt.",
          "Notiere bei wiederholten Fehlern Lager, Ziel, Produkt, Zielwert, Personalzuordnung und Meldung. Prüfe offizielle Patchnotes, wenn mehrere Mitarbeitersysteme gleichzeitig ausfallen; melde einen weiterhin nachvollziehbaren Fehler im Spiel. Erweitere die Route erst, wenn der erste Laden korrekt ergänzt wird und einen vollständigen Verkaufstag versorgt bleibt."
        ]
      }
    ]
  },
  {
    "slug": "big-ambitions-purchasing-agent",
    "keyword": "Big Ambitions Einkäufer",
    "title": "Big Ambitions Einkäufer: Verträge und Bestellungen",
    "description": "Richte deinen Big Ambitions Einkäufer ein, verbinde Importverträge, prüfe Smart Delivery und Wiederholung und behebe Fehler bei fehlenden Warenbestellungen.",
    "answer": "Stelle einen Einkäufer für die Zentrale ein, weise ihm einen Arbeitsplatz zu und verbinde einen Importvertrag. Ordne ihn danach ausdrücklich dem Einkaufsplan zu und speichere Empfänger, Produkte und Bestelloptionen. Der Dienstplan der Zentrale allein reicht nicht.",
    "sections": [
      {
        "heading": "Mitarbeiter, Importeur und Plan verbinden",
        "paragraphs": [
          "Die Entwicklerantwort von März 2023 nennt zuerst Einstellung, freien Schreibtisch und Zuweisung in der Zentrale, danach den Vertragsabschluss beim Importeur an den Piers. Kontrolliere anschließend den aktuellen Einkaufsplan.",
          "Wähle den Lieferanten nach dem benötigten Produkt. Prüfe dessen aktuelle Bezugsquelle in F1 und im Vertragsangebot sowie das Empfängerlager. Notiere bei mehreren Verträgen, welcher Einkäufer welches Produkt an welchen Standort bestellt."
        ]
      },
      {
        "heading": "Smart Delivery und Wiederholung getrennt wählen",
        "paragraphs": [
          "Smart Delivery bestimmt die Ergänzungsmenge, Wiederholung die erneute Ausführung. Für regelmäßiges Auffüllen aktivierst du beide; für eine gelegentliche Ergänzung kann Smart allein dienen. Dies bestätigt der Entwickler im Oktober 2025.",
          "Bei beispielhaften 800 Stück Zielbestand und 650 vorhandenen Stück fehlen 150, vorbehaltlich weiterer Beschränkungen. Eine feste Bestellung über 800 addiert dagegen 800. Prüfe nach dem Speichern beide Optionen, damit weder Überschüsse noch eine unbeabsichtigt einmalige Bestellung entstehen."
        ]
      },
      {
        "heading": "Den Plan vor Sonntagabend neu zuweisen",
        "paragraphs": [
          "Im Juli 2026 untersuchte der Entwickler einen Spielstand, in dem ein Einkäufer nach einer Schulung wieder im Dienstplan, aber nicht im Einkaufsplan stand. Die Zuweisung muss laut Antwort vor Sonntag 20:00 Uhr erfolgen. Seine Anwesenheit am Montag beweist keine rechtzeitige Bestellung.",
          "Prüfe nach Schulungen und Umzügen Mitarbeiter, Empfänger, Produkte und Bestellstatus. Kontrolliere auch die frühere Zentrale auf leere Einkaufspläne. Halte alte und neue Zuordnungen beim Umstellen nachvollziehbar."
        ]
      },
      {
        "heading": "Stückzahlen und Vertragspreise kontrollieren",
        "paragraphs": [
          "Eine Mengenangabe von eins bedeutet ein einzelnes Produkt, keinen Karton; das bestätigt eine Entwicklerantwort von März 2026. Vergleiche Stückzahl, Platz, aktuelle Bestellgrenzen und Angebotssumme. Übernimm keine alte Mindestbestellsumme oder pauschale Kartonumrechnung.",
          "Die ältere Entwicklererklärung von April 2023 nennt Kompetenz und Import Index als Preiseinflüsse mit Preisbindung beim Vertragsabschluss. Vergleiche nach späteren Wirtschaftsänderungen das tatsächliche Angebot mit dem bestehenden Vertrag. Sichere die Produktliste vor Neuverhandlungen; höhere Kompetenz garantiert nicht überall einen günstigeren neuen Preis."
        ]
      },
      {
        "heading": "Fehlende Bestellungen eingrenzen und ausbauen",
        "paragraphs": [
          "Prüfe bei fehlendem Wareneingang den gespeicherten Plan, die rechtzeitige Mitarbeiterzuordnung, Bestätigung beziehungsweise Wiederholung, Geld, Empfangsplatz und Lieferantenmeldung. Ist die Ware im Lager angekommen, liegt die weitere Prüfung beim Verteilungsplan zum Geschäft.",
          "Der Entwickler bestätigte im August 2023 mehrere Einkäufer je Importeur; neue Mitarbeiter mussten vorher eingeplant und zugewiesen sein. Nutze weitere Verträge für einen konkreten Beschaffungsbedarf und prüfe aktuelle Grenzen. Ein zusätzlicher Einkäufer schafft keinen Lagerplatz und repariert keine fehlende Ladenroute."
        ]
      }
    ]
  },
  {
    "slug": "big-ambitions-market-insider",
    "keyword": "Big Ambitions Market Insider",
    "title": "Big Ambitions Market Insider: Nachfrage verstehen",
    "description": "Lis im Big Ambitions Market Insider Nachfrage, Konkurrenz und Marktereignisse und vergleiche sie mit Verkäufen, bevor du dein nächstes Geschäft eröffnest.",
    "answer": "Vergleiche im Market Insider die ungedeckte Produktnachfrage im gewünschten Stadtviertel. Prüfe Anbieter und Marktereignisse, danach Standort und Kosten. Die Nachfrage ist ein Hinweis auf Chancen, keine zugesicherte Kundenzahl, Gewinnangabe oder Prognose.",
    "sections": [
      {
        "heading": "Stadtviertel und Sortiment richtig vergleichen",
        "paragraphs": [
          "Wähle das Viertel des geplanten Geschäfts und notiere die Nachfrage nach seinen Hauptprodukten. Entscheide nicht nur anhand eines attraktiven Nebenartikels. Kontrolliere die Gebietsauswahl erneut, wenn du die App unterwegs öffnest.",
          "Vergleiche einige finanzierbare Konzepte nach Hauptprodukt, Anbietern, geeigneten Räumen und Einrichtung. Diese Planung verbindet die Anzeige mit Miete, Löhnen und Warenbedarf; sie ist keine versteckte Spielformel."
        ]
      },
      {
        "heading": "Den Nachfragerückgang nach dem Einstieg verstehen",
        "paragraphs": [
          "Laut Entwicklererklärung von Januar 2024 zeigt die App gegenwärtig unbefriedigte Nachfrage. Ein neuer Anbieter deckt einen Teil davon, auch wenn du selbst dieser Anbieter bist. Ein Rückgang nach der Eröffnung beweist deshalb keinen Misserfolg.",
          "Produkte vertragen unterschiedlich viel Konkurrenz. Verwirf nicht pauschal jedes Angebot unter einem selbst gewählten Prozentwert. Vergleiche Chancen für dasselbe Produkt und kontrolliere nach der Eröffnung tatsächliche Verkäufe, statt Prozente direkt in Tagesmengen umzuwandeln."
        ]
      },
      {
        "heading": "Konkurrenz und Leistung des Ladens trennen",
        "paragraphs": [
          "Eine Entwicklerantwort von Februar 2024 beschreibt die Nachfrageanzeige als Maß für die Zahl der Anbieter. Die Gebäudegröße bestimmt diese Nachfrageveränderung nicht. Dennoch können kleine und große Geschäfte sehr verschiedene Kosten und Verkaufsmöglichkeiten haben.",
          "Für Kundenzahlen nennt der Entwickler im Juni 2023 unter anderem Verkehr am Gebäude, Werbung, Kundenservice, Geschäftstyp und Konkurrenz. Prüfe im Kundendiagramm von BizMan Insights den stündlichen Verlauf und ob Standort und Personal die Chance tatsächlich nutzen können."
        ]
      },
      {
        "heading": "Preise und Ereignisse ergänzend prüfen",
        "paragraphs": [
          "Den niedrigsten Konkurrenzpreis findest du laut Entwicklerantwort von März 2024 in BizMan. Notiere deinen Preis und die Stückverkäufe vor einer Änderung und vergleiche vollständige Handelstage mit verfügbaren Waren und Personal.",
          "Eine ruhige Ereignisliste muss kein Fehler sein. Der Entwickler erklärte im Februar 2025, dass Zentrale, Lager und Verteilung allein keine Marktnachfrage verändern. Wenige neue Geschäfte können in einem großen Kundenmarkt ebenfalls wenig sichtbare Wirkung haben. Prüfe die tatsächlich verkauften Produkte."
        ]
      },
      {
        "heading": "Eine Entscheidung anhand des eigenen Spielstands treffen",
        "paragraphs": [
          "Vergleiche Nachfrage, Räume, Eröffnungskosten und Versorgung mit mindestens einer Alternative. Hohe Nachfrage hilft wenig, wenn Einrichtung und Waren dein gesamtes Geld verbrauchen würden. Nach dem Start prüfst du vergleichbare Verkaufstage, stündlichen Kundenfluss und fehlende Bestände. Wiederhole den Vergleich nach neuen Konkurrenten oder Sortimentswechseln.",
          "Berücksichtige eigene Schwierigkeitseinstellungen: Ein Entwicklerdiagnosefall von April 2026 erklärt geringe Rentabilität durch hohe Löhne und niedrigen Kundenfluss. Zudem zeigt der Bereich Real Estate laut Entwicklerantwort von März 2025 Immobilien und keine bestehenden Unternehmen samt Personal. Plane bei einem Gebäudeangebot daher nicht automatisch mit vorhandenen Beschäftigten."
        ]
      }
    ]
  }
];

const french: Draft[] = [
  {
    "slug": "big-ambitions-warehouse-setup",
    "keyword": "entrepôt Big Ambitions",
    "title": "Entrepôt Big Ambitions : installation et livraisons",
    "description": "Prépare ton entrepôt Big Ambitions avec rayonnages, achats, véhicule et chauffeur, puis règle les stocks cibles pour approvisionner tous tes magasins.",
    "answer": "Installe un entrepôt avec des rayonnages à palettes, un véhicule de livraison et son chauffeur. Relie ensuite les achats au siège et ajoute les magasins dans le plan du responsable logistique. Vérifie une livraison complète vers une boutique avant d’étendre le réseau.",
    "sections": [
      {
        "heading": "Partir des besoins des magasins",
        "paragraphs": [
          "Liste les magasins à desservir et leurs produits, y compris les consommables. Estime leur consommation entre deux approvisionnements à partir des ventes. Après le local et l’équipement, garde de l’argent pour la première commande et les salaires. Aucun seuil de bénéfice universel pour ouvrir un entrepôt n’est établi.",
          "Compare les dépenses totales au temps économisé et à l’intérêt d’un approvisionnement commun. Le bâtiment seul ne remplace ni un plan d’achat ni des destinations de livraison."
        ]
      },
      {
        "heading": "Préparer le bâtiment et les moyens de livraison",
        "paragraphs": [
          "Ouvre le local comme entrepôt et installe les rayonnages à palettes avant la première réception. Vérifie les emplacements pour véhicules, amène un véhicule adapté et affecte un chauffeur autorisé. Ce montage apparaît dans un témoignage du forum officiel de mars 2023 ; contrôle les exigences actuelles dans BizMan.",
          "Calcule la place nécessaire avec les produits et leurs conditionnements réels. Préserve de la capacité pour la prochaine commande et vérifie aussi les espaces de stockage des magasins destinataires."
        ]
      },
      {
        "heading": "Relier les achats au bon entrepôt",
        "paragraphs": [
          "Affecte l’agent d’achat à un poste au siège et établis son contrat avec l’importateur approprié. Dans le plan, vérifie l’entrepôt destinataire, les produits, les quantités et les options de commande.",
          "Smart Delivery complète un stock cible ; la récurrence est un réglage distinct. Active les deux pour un réapprovisionnement régulier. Une quantité fixe récurrente peut accumuler du surplus, tandis que Smart seul ne crée pas une commande hebdomadaire permanente. Commence par des quantités faciles à contrôler."
        ]
      },
      {
        "heading": "Vérifier un premier transfert vers une boutique",
        "paragraphs": [
          "Dans le plan du responsable logistique, sélectionne l’entrepôt et une première boutique. Saisis des cibles positives adaptées à son besoin et à sa place disponible. La cible représente le stock total souhaité, pas une quantité ajoutée à chaque livraison.",
          "Pour un produit, relève les stocks de départ et d’arrivée ainsi que la cible, puis compare après la livraison. Regarde aussi les présentoirs : le développeur précise en mars 2026 qu’ils sont remplis avant les réserves. Ajoute les autres produits et destinations une fois ce transfert confirmé."
        ]
      },
      {
        "heading": "Tenir compte des deux horaires",
        "paragraphs": [
          "La réponse du développeur de mai 2026 indique des livraisons internes quotidiennes à 02 h et des importations ordinaires le lundi à 08 h. Conserve donc du stock pour la tournée du lundi qui précède l’importation. Une ancienne alerte peut être correcte même si l’entrepôt est plein plus tard.",
          "Pour les produits fabriqués, garde l’étape entrepôt : la séparation expliquée en février 2026 fait passer les marchandises de l’usine à l’entrepôt ou à l’export, puis de l’entrepôt aux magasins. En cas d’échec, suis un seul produit et distingue réception manquante, mauvaise affectation, cible faible et manque de place. Relève d’abord l’heure du message."
        ]
      }
    ]
  },
  {
    "slug": "big-ambitions-logistics-manager",
    "keyword": "responsable logistique Big Ambitions",
    "title": "Responsable logistique Big Ambitions : stocks et trajets",
    "description": "Configure le responsable logistique Big Ambitions pour relier tes magasins, régler leurs stocks cibles et comprendre les livraisons absentes ou incomplètes.",
    "answer": "Le responsable logistique organise les livraisons d’un entrepôt approvisionné vers tes entreprises. Affecte-le au siège, relie l’entrepôt et ajoute les destinations avec leurs stocks cibles. L’agent d’achat ou une autre source doit fournir les marchandises en amont.",
    "sections": [
      {
        "heading": "Affecter une chaîne complète au responsable",
        "paragraphs": [
          "Ouvre le plan logistique au siège et vérifie l’employé ainsi que l’entrepôt source. Contrôle le véhicule et son chauffeur à l’entrepôt, puis le magasin et les produits choisis. Une destination enregistrée sans marchandises disponibles ne peut pas être approvisionnée.",
          "Teste d’abord une boutique, un produit déjà présent et une capacité de réception suffisante. Compare les quantités avant et après la prochaine livraison afin d’identifier un problème d’affectation avant de dépendre du réseau entier."
        ]
      },
      {
        "heading": "Saisir le stock souhaité dans le magasin",
        "paragraphs": [
          "Le développeur confirme en mars 2026 que la livraison complète automatiquement jusqu’à la cible. Exemple : une cible de 240 unités avec 90 présentes laisse un manque de 150. Ces nombres illustrent le calcul ; ce ne sont pas des niveaux conseillés.",
          "Choisis la cible selon la consommation jusqu’à la prochaine livraison et les journées plus actives. Révise-la quand les horaires, présentoirs ou ventes changent. Une cible basse provoque des ruptures même si la tournée fonctionne ; une cible trop haute peut prendre la place d’autres articles."
        ]
      },
      {
        "heading": "Distinguer destinations et volume du véhicule",
        "paragraphs": [
          "L’explication du développeur de 2023 prévoit un responsable par entrepôt ; le véhicule et la compétence influencent les destinations disponibles. Consulte la limite actuelle avant d’embaucher un second responsable pour ce même site. Une formation ou un autre véhicule peut résoudre le besoin réel. Vérifie dans le jeu les valeurs et exigences du chauffeur.",
          "En septembre 2024, le développeur distinguait aussi la cargaison manuelle des livraisons automatiques. Les contraintes citées étaient les destinations, le stock source et la place à l’arrivée, pas un plafond nocturne d’unités fondé sur le coffre. Un camion plus grand ne corrige donc pas un entrepôt vide ou un magasin plein."
        ]
      },
      {
        "heading": "Interpréter une alerte de présentoir",
        "paragraphs": [
          "Vérifie si le message vient de la logistique ou d’un présentoir précis. En mai 2026, le développeur a expliqué des alertes répétées par une cible insuffisante pour remplir tous les réfrigérateurs de boissons, malgré des livraisons effectives.",
          "Compare le stock total des présentoirs et des réserves à la cible. Si seul un meuble est presque vide, examine d’abord cette répartition. Si tout le magasin manque du produit, vérifie destination, article et place libre. Augmenter les achats ne répare pas une cible de livraison trop faible."
        ]
      },
      {
        "heading": "Contrôler l’heure avant d’étendre le réseau",
        "paragraphs": [
          "La réponse de mai 2026 situe les livraisons internes à 02 h chaque jour, et les importations ordinaires du lundi à 08 h. Compare donc une alerte au stock disponible à son heure d’émission, pas seulement au stock visible plus tard.",
          "Pour un échec répété, relève source, destination, produit, cible, affectations et message exact. Consulte les notes officielles si plusieurs systèmes d’employés cessent ensemble de fonctionner et signale dans le jeu un problème reproductible. Ajoute des destinations après avoir confirmé le réapprovisionnement de la première boutique pendant une journée complète."
        ]
      }
    ]
  },
  {
    "slug": "big-ambitions-purchasing-agent",
    "keyword": "agent d’achat Big Ambitions",
    "title": "Agent d’achat Big Ambitions : contrats et commandes",
    "description": "Configure ton agent d’achat Big Ambitions, vérifie ses contrats, distingue Smart Delivery de la récurrence et retrouve la cause des commandes non reçues.",
    "answer": "Recrute un agent d’achat au siège, affecte-lui un poste et relie un contrat d’importation. Attribue ensuite l’employé au plan d’achat et enregistre le destinataire, les produits et les options. Sa présence dans le planning du siège ne suffit pas.",
    "sections": [
      {
        "heading": "Relier l’employé, l’importateur et le plan",
        "paragraphs": [
          "La réponse du développeur de mars 2023 commence par le recrutement, un bureau libre et l’affectation au siège, puis le contrat auprès d’un importateur sur les quais. Inspecte ensuite le plan actuel au lieu de supposer que l’employé visible possède déjà la commande.",
          "Choisis le fournisseur d’après le produit recherché. Vérifie la source actuelle dans F1, le catalogue du contrat et l’entrepôt destinataire. Note quel agent commande chaque produit pour chaque site, surtout lorsque plusieurs contrats proposent les mêmes articles."
        ]
      },
      {
        "heading": "Régler Smart Delivery et la récurrence séparément",
        "paragraphs": [
          "Smart Delivery détermine la quantité à compléter ; la récurrence détermine la répétition. Active les deux pour un réapprovisionnement régulier, ou Smart seul pour un complément occasionnel. Le développeur confirme cette distinction en octobre 2025.",
          "Avec une cible illustrative de 800 unités et 650 restantes, il manque 150, sous réserve des autres contraintes. Une commande fixe de 800 en ajoute 800. Vérifie les deux options après l’enregistrement pour éviter un surplus ou une commande unique involontaire."
        ]
      },
      {
        "heading": "Réaffecter le plan avant dimanche soir",
        "paragraphs": [
          "En juillet 2026, le développeur a trouvé un agent revenu de formation dans le planning du siège, mais absent du plan d’achat. Son affectation au plan devait être faite avant dimanche 20 h. Le voir au bureau lundi ne prouve pas que la commande a été validée à temps.",
          "Après une formation ou un déménagement, contrôle l’agent nommé, le destinataire, les produits et le statut de commande. Inspecte aussi l’ancien siège pour trouver d’éventuels plans vides. Garde les anciennes et nouvelles affectations compréhensibles pendant le changement."
        ]
      },
      {
        "heading": "Vérifier les unités et le prix réellement proposé",
        "paragraphs": [
          "Une quantité de un désigne un article individuel, pas un carton, comme le précise le développeur en mars 2026. Compare unités, capacité de réception, limites actuelles et montant total. Ne reprends pas un ancien minimum d’achat ou une conversion universelle en cartons.",
          "L’explication d’avril 2023 cite compétence et Import Index comme facteurs de prix, fixés lors du contrat. Après les changements économiques ultérieurs, compare l’offre réelle au contrat existant. Conserve la liste d’achat avant de renégocier ; une meilleure compétence ne garantit pas un nouveau prix inférieur pour chaque article."
        ]
      },
      {
        "heading": "Diagnostiquer un achat manqué et développer les contrats",
        "paragraphs": [
          "En l’absence de réception, vérifie plan enregistré, affectation avant l’échéance, confirmation ou récurrence, argent disponible, place et message du fournisseur. Si les marchandises sont dans l’entrepôt mais pas en boutique, examine le plan de distribution.",
          "En août 2023, le développeur confirme plusieurs agents auprès du même importateur, après leur planification et leur affectation. Ajoute des contrats pour un besoin identifié et vérifie les contraintes actuelles. Un agent supplémentaire ne crée pas de place et ne répare pas une destination de livraison manquante."
        ]
      }
    ]
  },
  {
    "slug": "big-ambitions-market-insider",
    "keyword": "Big Ambitions Market Insider",
    "title": "Big Ambitions Market Insider : comprendre la demande",
    "description": "Avec Big Ambitions Market Insider, compare demande, concurrents et événements aux ventes de tes magasins pour choisir une prochaine activité viable.",
    "answer": "Consulte Market Insider pour comparer la demande encore insatisfaite de chaque produit dans le quartier visé. Examine fournisseurs et événements, puis locaux et coûts séparément. La demande signale une possibilité ; elle ne garantit ni clientèle, ni bénéfice, ni évolution future.",
    "sections": [
      {
        "heading": "Comparer le bon quartier et les bons produits",
        "paragraphs": [
          "Sélectionne le quartier du futur magasin et relève la demande de ses produits principaux. Ne choisis pas tout le concept pour un article secondaire attractif. Vérifie de nouveau le quartier affiché lorsque tu ouvres l’application en déplacement.",
          "Compare quelques activités finançables selon produit principal, fournisseurs concurrents, locaux adaptés et équipement. Cette méthode relie l’indicateur au loyer, aux salaires et aux marchandises ; elle ne décrit pas une formule cachée du jeu."
        ]
      },
      {
        "heading": "Comprendre la baisse après ton arrivée",
        "paragraphs": [
          "Le développeur explique en janvier 2024 que la demande affichée est la demande actuellement insatisfaite. Un nouveau vendeur en couvre une partie, y compris lorsque ce vendeur est toi. Une baisse après l’ouverture ne démontre donc pas l’échec du magasin.",
          "Les produits supportent des niveaux de concurrence différents. N’écarte pas systématiquement tous les marchés sous un même pourcentage. Compare les possibilités pour le produit concerné, puis observe les ventes réelles ; ne transforme pas directement un pourcentage en unités quotidiennes."
        ]
      },
      {
        "heading": "Séparer concurrence et performance du magasin",
        "paragraphs": [
          "Selon la réponse de février 2024, l’indicateur de demande et concurrence reflète le nombre d’entreprises vendant l’article. La taille du bâtiment ne détermine pas cette baisse particulière, même si petits et grands magasins ont des coûts et capacités différents.",
          "Pour la fréquentation, le développeur cite en juin 2023 trafic du bâtiment, marketing, service client, activité et concurrence. Consulte le graphique horaire des clients dans BizMan Insights et vérifie que locaux et personnel permettent de profiter du marché."
        ]
      },
      {
        "heading": "Ajouter les prix et événements à la comparaison",
        "paragraphs": [
          "Le prix concurrent le plus bas se consulte dans BizMan, d’après une réponse de mars 2024. Note ton prix et les unités vendues avant un changement ; compare ensuite des journées complètes avec marchandises et personnel disponibles.",
          "Une liste d’événements calme ne signifie pas forcément un défaut. En février 2025, le développeur précise que siège, entrepôts et distribution ne modifient pas eux-mêmes la demande. Quelques magasins dans un grand marché peuvent aussi avoir peu d’effet visible. Examine les produits réellement vendus."
        ]
      },
      {
        "heading": "Choisir avec les données de ta partie",
        "paragraphs": [
          "Compare demande, locaux, frais d’ouverture et approvisionnement avec au moins une autre activité. Une forte demande ne compense pas automatiquement un équipement qui absorbe tout ton argent. Après l’ouverture, compare ventes et fréquentation sur des jours similaires, en vérifiant les ruptures. Recommence après un concurrent supplémentaire ou un changement de gamme.",
          "Les réglages personnalisés comptent : un diagnostic du développeur d’avril 2026 relie une rentabilité difficile à des salaires élevés et une faible fréquentation. Enfin, l’onglet Real Estate montre des bâtiments, pas des entreprises avec leurs employés, comme le précise une réponse de mars 2025. N’inclus pas automatiquement un personnel existant dans l’achat d’un local."
        ]
      }
    ]
  }
];

function localize(drafts: Draft[], locale: SourceLocale): Article[] {
  return drafts.map((draft) => {
    const original = english.find((article) => article.slug === draft.slug);
    if (!original) throw new Error(`Missing logistics source article: ${draft.slug}`);
    const { sourceKeys, ...content } = draft;
    return {
      ...content,
      locale,
      category: "guides",
      updated: "2026-09-08",
      summary: draft.answer,
      relatedSlugs: draft.relatedSlugs ?? original.relatedSlugs,
      sources: (sourceKeys ?? original.sourceKeys ?? []).map((key) => ({
        label: sources[key].labels[locale],
        href: sources[key].href,
      })),
    };
  });
}

export const growthLogisticsArticles: Record<SourceLocale, Article[]> = {
  en: localize(english, "en"),
  de: localize(german, "de"),
  fr: localize(french, "fr"),
};
