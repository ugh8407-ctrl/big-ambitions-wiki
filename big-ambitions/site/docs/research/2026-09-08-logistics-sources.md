# Logistics and Market Insider source ledger

Research date: **2026-09-08**. Content file: `src/content/growth-logistics.ts`.

This expansion adds four distinct guides in English, German and French. It does not certify every mechanic against a local playable copy. Dated developer replies establish the specific mechanics below; older answers are identified in the articles. Operational comparisons, example arithmetic, commissioning checks and budgeting advice are editorial recommendations, not published game formulas.

## Primary sources used

| Source and evidence date | Supported claim and boundary |
| --- | --- |
| [Official forum: Automatic resource purchase](https://forum.bigambitionsgame.com/t/automatic-resource-purchase/2362), Beliah, 2023-03-13 | **Community testimony on the official forum**, not a developer statement. Documents the basic warehouse, pallet shelving, vehicle, driver, HQ purchasing and logistics chain. Its minimum order, old vehicle, midnight timing and destination counts are deliberately excluded. |
| [Official forum: Setting up second warehouse](https://forum.bigambitionsgame.com/t/setting-up-second-warehouse/2862), DavidEstesCreations, 2023-03-21 | Developer describes hiring and scheduling the buyer at a headquarters desk before making an importer contract. This is the dated setup sequence, not a claim about unchanged current menu wording. |
| [Smart Delivery?](https://steamcommunity.com/app/1331550/discussions/0/573770913623000014/), developer-badged David Estes Creations, 2025-10-17 | Confirms the target-fill explanation and that Smart and recurring are independent; neither changes delivery time. The articles' 800/650 illustration is newly authored arithmetic, not a copied recommended amount. |
| [Delivery to purchasing agent doesn't work](https://steamcommunity.com/app/1331550/discussions/0/589559079513544134/), developer, 2026-07-27–28 | Developer inspected the save: employee was scheduled but not reassigned to the Purchasing Agent plan. Explicit deadline is Sunday before 20:00. Also identifies empty old HQ plans after relocation. |
| [Delivery Bug](https://steamcommunity.com/app/1331550/discussions/0/803468365964390097/), developer, 2026-03-19–20 | Order quantities represent individual items, not boxes; deliveries fill displays before storage. Tutorial-specific quantities are not generalized. |
| [Smart Delivery from warehouse to stores](https://steamcommunity.com/app/1331550/discussions/0/803468669855480810/), developer, 2026-03-23 | Confirms warehouse destination values are targets and actual delivery adjusts to the shortfall. The separate player's recommended doubling rule is excluded. |
| [Deliveries using Logistics Help](https://steamcommunity.com/app/1331550/discussions/0/838376971028320164/), developer, 2026-05-21–22 | Internal deliveries at 02:00 daily; ordinary imports Monday 08:00. Explains checking warning timestamps, destination, low/zero targets and receiving space. Also diagnoses a display warning caused by a target too small for several fridges. Exact fridge capacities are not reproduced. |
| [Can't assign two Logistics Managers to One warehouse](https://steamcommunity.com/app/1331550/discussions/0/3790381090377042669/), developer, 2023-03-13 and 2024-09-03 | One manager per warehouse; route destinations depend on manager skill and vehicle. Later reply distinguishes automatic distribution from manual cargo and counts displays plus storage. Articles date this explanation and omit exact route maxima and driver skill thresholds. |
| [EA 0.10 Issues and questions](https://steamcommunity.com/app/1331550/discussions/0/824857476143015384/), developer, 2026-02-16 | Factories manufacture and send to warehouses or export; warehouses distribute to stores. No factory production rate or profitability promise is added. |
| [Purchasing Agents discounts on contracts](https://steamcommunity.com/app/1331550/discussions/0/3826413850815386852/), developer, 2023-04-28 | Explains purchasing skill and Import Index, with prices fixed at contract creation. Explicitly treated as older economy guidance; current offers must be compared before renegotiation. |
| [Official forum: Getting bigger](https://forum.bigambitionsgame.com/t/getting-bigger/4772), developer, 2023-08-20 | Confirms more than one Purchasing Agent may contract with the same importer and employees must be seated/scheduled before assignment. Old total store/warehouse limits are excluded. |
| [MarketInsider completely unreliable](https://steamcommunity.com/app/1331550/discussions/0/4038104984934236501/), developer, 2024-01-02 | Defines the display as current unmet demand, affected by another seller including the player, and explains different product tolerance for competition. No universal cutoff or fixed decrement is claimed. |
| [Question about Demand, also Nightclubs](https://steamcommunity.com/app/1331550/discussions/0/4206993639696426186/), developer, 2024-02-03 | The demand/competition measure concerns sellers of the product; building size does not change that particular effect. Nightclub pricing and capacities are out of scope. |
| [Customer traffic fluctuations](https://steamcommunity.com/app/1331550/discussions/0/3814034023687334766/), developer, 2023-06-21 | Customer traffic also depends on building traffic, marketing, service, business type and competition; recommends BizMan Insights' hourly customer graph. No customer formula is invented. |
| [Official forum: View competitor prices in market insider app](https://forum.bigambitionsgame.com/t/view-competitor-prices-in-market-insider-app/2627), developer, 2024-03-31 | Lowest competitor price is available in BizMan. The article directs the reader there instead of claiming the original suggestion's exact requested implementation. |
| [No events in market insider?](https://steamcommunity.com/app/1331550/discussions/0/599645311739138579/), developer, 2025-02-23–24 | A relatively stable market can produce few events; HQ, warehouse and distribution do not themselves create retail product demand changes. Rival trigger numbers from the same thread are not used. |
| [Empty city after many stores shut down](https://steamcommunity.com/app/1331550/discussions/0/803470896719385599/?l=portuguese), developer, 2026-04-17 | Save diagnosis identifies custom high wages/low customer flow as profitability constraints and confirms new businesses still opened. Evidence was retrieved through localized Steam URLs; article source uses the same canonical discussion without locale query. |
| [Employee](https://steamcommunity.com/app/1331550/discussions/0/612032045420393593/), developer, 2025-03-15 | Market Insider Real Estate lists buildings, not operating businesses and their staff. No acquisition UI sequence is added. |

Steam omits the year on current-year discussion timestamps. Here the dates displayed as February, March, April, May and July are recorded as 2026, consistent with the research date and the surrounding EA 0.10/weekly import context. Older posts show their explicit years.

## Additional version research and access limits

- [EA 0.9 preview announcement](https://steamcommunity.com/games/1331550/announcements/detail/497203291915027328), 2025-08-12, resolved with the official title but exposed no body to the web reader. [SteamDB's mirror](https://steamdb.info/patchnotes/19566041/) exposes the historical weekly-import redesign. It was a discovery lead, not sole evidence for claims in the articles. The later developer replies independently establish timing, unit ordering and Smart behavior.
- [Official 3672/3674 announcement](https://steamcommunity.com/games/1331550/announcements/detail/688640522419437692) resolved with the matching title. [SteamDB's mirror](https://steamdb.info/patchnotes/25081466/) dates the initial post to 2026-09-01 and shows the employee quit-state hotfix affecting imports and deliveries. Because the direct page did not expose its body to this research tool, these articles only recommend consulting official patch notes for simultaneous system failures; they do not present the mirror as independent developer verification.
- The parent task supplied an official Steam news API verification of that hotfix. No extra hotfix claim was added to these articles on the strength of the parent summary alone.
- [Steam news URL ending 693137779588071504](https://store.steampowered.com/news/app/1331550/view/693137779588071504) exposed only the preview title to the web reader. The parent independently retrieved its full preview/changelog body through the official Steam News API, verifying the 1.0 banking and Pricing Manager details used in the other article collections.
- Secondary guides were used to discover direct Steam source links only. Their prose, formulas, arbitrary free-capacity percentages, reported build guarantees and proposed fixed targets were not adopted.

## Editorial boundaries

All three languages retain the actual setup and troubleshooting instructions. They do not invent prices, wages, pallet or box capacities, importer caps, progression unlocks or guaranteed profitability. German role names are natural descriptive translations; French role names are descriptive translations as well. Existing in-game names Big Ambitions, BizMan, Market Insider, Smart Delivery, Import Index and Real Estate remain recognizable.

The 240/90/150 route example and 800/650/150 purchasing example are illustrative subtraction with explicit labels. Estimated demand, budget comparison, keeping a buffer and testing one initial store are editorial planning advice. Current sourcing, permissions and numeric limits are to be read from the actual game.

Each article has five topic-specific sections. Source labels are translated. Related links point to the other logistics pages plus existing relevant guides.

## Content verification

Counts include answer, section headings, paragraphs and bullets, and exclude metadata, duplicate summary and source labels.

| Topic | EN words | DE words | FR words |
| --- | ---: | ---: | ---: |
| Warehouse setup | 667 | 428 | 490 |
| Logistics Manager | 630 | 420 | 507 |
| Purchasing Agent | 631 | 399 | 488 |
| Market Insider | 661 | 411 | 490 |

All 12 metadata titles are 40–60 characters and descriptions are 140–160 characters. Each contains its English keyword or natural localized equivalent. Every article is in `guides` and has `updated: "2026-09-08"`. No build, browser, commit, deployment or indexing action was performed by this content task.
