# Gallipoli Wiki Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a production-ready Gallipoli fan wiki with a reference-matched homepage, one maps navigation page, and 16 verified English keyword pages, ready for later Turkish, German, and French content.

**Architecture:** Use Next.js App Router with locale-prefixed routes, a central verified-data registry, `next-intl` for UI strings, and `next-mdx-remote/rsc` for content. Shared layout components reproduce the reference site's information hierarchy while Gallipoli copy, official media, SEO, navigation, and MDX remain isolated data sources.

**Tech Stack:** Next.js, React, TypeScript, Tailwind CSS, next-intl, next-mdx-remote/rsc, gray-matter, Vitest, Testing Library, Playwright, ESLint.

**Spec:** `Gallipoli/docs/superpowers/specs/2026-08-24-gallipoli-wiki-design.md`

## Global Constraints

- Implement English source content first; do not publish empty Turkish, German, or French keyword pages.
- Every `keywords.json` keyword maps to exactly one indexable English page.
- Every keyword title contains the exact keyword and is 40–60 characters.
- Every meta description contains the exact keyword and is 140–160 characters.
- Article facts may only come from `Gallipoli/关键词素材.md`; uncertain facts use `To be confirmed`.
- Never invent numeric values, character names, mechanics, update dates, or redemption codes.
- Use `None available` for verified absence of codes and keep it distinct from `To be confirmed`.
- Do not copy text, images, logos, or source code from `vvultimatum.net`.
- Scan runtime source and content for old-brand terms listed in the spec.
- Use the official trailer `https://youtu.be/GEAVtcS4KMI`.
- Default theme follows the operating-system preference.

---

### Task 1: Scaffold the Next.js application and test harness

**Files:**
- Create: `Gallipoli/package.json`
- Create: `Gallipoli/tsconfig.json`
- Create: `Gallipoli/next.config.ts`
- Create: `Gallipoli/postcss.config.mjs`
- Create: `Gallipoli/eslint.config.mjs`
- Create: `Gallipoli/vitest.config.ts`
- Create: `Gallipoli/playwright.config.ts`
- Create: `Gallipoli/app/globals.css`
- Create: `Gallipoli/tests/setup.ts`
- Create: `Gallipoli/tests/smoke/project-config.test.ts`

**Interfaces:**
- Produces: npm scripts `dev`, `build`, `start`, `lint`, `test`, `test:run`, `test:e2e`, `audit:content`.
- Produces: path alias `@/*` resolving to the project root.

- [ ] **Step 1: Initialize the non-empty project without overwriting research inputs**

Run from `Gallipoli`:

```powershell
npm init -y
npm install next@latest react@latest react-dom@latest next-intl next-mdx-remote gray-matter zod
npm install -D typescript @types/node @types/react @types/react-dom tailwindcss @tailwindcss/postcss eslint eslint-config-next vitest jsdom @vitejs/plugin-react @testing-library/react @testing-library/jest-dom @testing-library/user-event @playwright/test tsx
```

Expected: existing `keywords.json`, `关键词.md`, `关键词素材.md`, and `docs/` remain intact. Create the configuration files listed for this task with App Router, strict TypeScript, the `@/*` alias, Tailwind's PostCSS plugin, and Next.js ESLint defaults.

- [ ] **Step 2: Write the failing configuration test**

```ts
import { describe, expect, it } from "vitest";
import pkg from "../../package.json";

describe("project scripts", () => {
  it("exposes the required quality gates", () => {
    expect(pkg.scripts).toMatchObject({
      build: "next build",
      lint: "eslint .",
      "test:run": "vitest run",
      "test:e2e": "playwright test",
      "audit:content": "tsx scripts/audit-content.ts",
    });
  });
});
```

- [ ] **Step 3: Run the test and confirm the missing scripts fail**

Run: `npm run test:run -- tests/smoke/project-config.test.ts`  
Expected: FAIL because Vitest and audit scripts are not fully configured.

- [ ] **Step 4: Configure Vitest, Playwright, setup, and scripts**

Use `jsdom`, load `tests/setup.ts`, enable React plugin support, and add the exact scripts asserted above. Configure Playwright to start `npm run dev` at `http://127.0.0.1:3000`.

- [ ] **Step 5: Verify the scaffold**

Run:

```powershell
npm run test:run -- tests/smoke/project-config.test.ts
npm run lint
npm run build
```

Expected: all commands exit 0.

- [ ] **Step 6: Commit**

```powershell
git add Gallipoli/package.json Gallipoli/package-lock.json Gallipoli/tsconfig.json Gallipoli/next.config.ts Gallipoli/postcss.config.mjs Gallipoli/eslint.config.mjs Gallipoli/vitest.config.ts Gallipoli/playwright.config.ts Gallipoli/app Gallipoli/tests
git commit -m "chore: scaffold Gallipoli wiki app"
```

---

### Task 2: Create the verified site-data and keyword-route registries

**Files:**
- Create: `Gallipoli/data/site.ts`
- Create: `Gallipoli/data/keyword-pages.ts`
- Create: `Gallipoli/data/maps.ts`
- Create: `Gallipoli/data/sources.ts`
- Create: `Gallipoli/lib/types.ts`
- Create: `Gallipoli/tests/data/keyword-pages.test.ts`
- Create: `Gallipoli/tests/data/site.test.ts`

**Interfaces:**
- Produces: `SiteFacts`, `OfficialLinks`, `KeywordPageDefinition` types.
- Produces: `siteFacts`, `officialLinks`, `keywordPages`, `sourceRegistry`, `getKeywordPageBySegments(locale, segments)`.
- Consumes: `keywords.json` as the canonical keyword set.

- [ ] **Step 1: Write failing registry tests**

```ts
import keywords from "../../keywords.json";
import { keywordPages } from "@/data/keyword-pages";

const sourceKeywords = keywords.categories.flatMap((group) => group.keywords);

it("maps every source keyword exactly once", () => {
  expect(keywordPages.map((page) => page.keyword).sort()).toEqual([...sourceKeywords].sort());
  expect(new Set(keywordPages.map((page) => page.keyword)).size).toBe(16);
  expect(new Set(keywordPages.map((page) => page.href)).size).toBe(16);
});
```

```ts
import { officialLinks, siteFacts } from "@/data/site";

it("contains only verified homepage facts", () => {
  expect(siteFacts).toMatchObject({
    name: "Gallipoli",
    releaseDate: "2026-08-20",
    developer: "BlackMill Games",
    publisher: "BlackMill Games",
    playerScale: 50,
    historicClasses: 10,
    launchMaps: 5,
    codesStatus: "none",
  });
  expect(officialLinks.trailer).toBe("https://youtu.be/GEAVtcS4KMI");
});
```

- [ ] **Step 2: Run tests to verify failure**

Run: `npm run test:run -- tests/data`  
Expected: FAIL because registries do not exist.

- [ ] **Step 3: Implement types and the exact 16 route records**

Each record uses:

```ts
export type KeywordPageDefinition = {
  keyword: string;
  href: string;
  contentPath: string;
  category: "guide" | "platform" | "release" | "history" | "game";
};
```

Populate the 16 routes exactly as approved in the spec, including `/en/maps`, `/en/guides/trenches`, and `/en/developer/blackmill-games`.

- [ ] **Step 4: Implement verified site facts, links, and source registry**

Store platforms as a string array, codes as `{ status: "none", label: "None available" }`, and unknown update data as `{ status: "unconfirmed", label: "To be confirmed" }`. Add every G1–G7, H1–H6, and Y1–Y5 identifier from `关键词素材.md` to `sourceRegistry` with label, URL, and source type so article citations can be validated.

- [ ] **Step 5: Run tests**

Run: `npm run test:run -- tests/data`  
Expected: PASS.

- [ ] **Step 6: Commit**

```powershell
git add Gallipoli/data Gallipoli/lib/types.ts Gallipoli/tests/data
git commit -m "feat: add verified Gallipoli data registries"
```

---

### Task 3: Add locale routing, translated UI messages, and theme tokens

**Files:**
- Create: `Gallipoli/i18n/routing.ts`
- Create: `Gallipoli/i18n/request.ts`
- Create: `Gallipoli/middleware.ts`
- Create: `Gallipoli/messages/en.json`
- Create: `Gallipoli/messages/tr.json`
- Create: `Gallipoli/messages/de.json`
- Create: `Gallipoli/messages/fr.json`
- Create: `Gallipoli/app/[locale]/layout.tsx`
- Create: `Gallipoli/app/[locale]/not-found.tsx`
- Create: `Gallipoli/components/theme/theme-provider.tsx`
- Create: `Gallipoli/components/theme/theme-toggle.tsx`
- Modify: `Gallipoli/app/globals.css`
- Test: `Gallipoli/tests/i18n/routing.test.ts`
- Test: `Gallipoli/tests/theme/theme-toggle.test.tsx`

**Interfaces:**
- Produces: `routing.locales = ["en", "tr", "de", "fr"]`, `routing.defaultLocale = "en"`.
- Produces: CSS variables `--nav-theme` and `--nav-theme-light` for light and dark themes.

- [ ] **Step 1: Write failing locale and theme tests**

Assert four supported locales, English default, translated labels for `nav.maps`, `status.none`, and `status.unconfirmed`, and a theme toggle with accessible name `Toggle theme`.

- [ ] **Step 2: Run failing tests**

Run: `npm run test:run -- tests/i18n tests/theme`  
Expected: FAIL because routing and theme modules do not exist.

- [ ] **Step 3: Implement next-intl routing and request configuration**

Use locale prefix `always`. Root `/` redirects to `/en`. Unsupported locale segments render the localized 404. Do not generate non-English article params until translated MDX exists.

- [ ] **Step 4: Add complete navigation/status translations**

Translate Maps, Guides, Platforms, Release, History, Official media, None available, To be confirmed, Read guide, Sources, and legal/footer UI into all four languages. Keep Gallipoli, BlackMill Games, Steam, PlayStation 5, and map proper nouns unchanged.

- [ ] **Step 5: Implement theme state and tokens**

Use `localStorage` only after hydration, default to `matchMedia('(prefers-color-scheme: dark)')`, and apply:

```css
:root { --nav-theme: 4 62% 39%; --nav-theme-light: 4 68% 51%; }
.dark { --nav-theme: 4 68% 48%; --nav-theme-light: 4 72% 60%; }
```

- [ ] **Step 6: Run tests and build**

Run:

```powershell
npm run test:run -- tests/i18n tests/theme
npm run build
```

Expected: PASS and successful build.

- [ ] **Step 7: Commit**

```powershell
git add Gallipoli/i18n Gallipoli/messages Gallipoli/middleware.ts Gallipoli/app Gallipoli/components/theme Gallipoli/app/globals.css Gallipoli/tests/i18n Gallipoli/tests/theme
git commit -m "feat: add locale routing and themes"
```

---

### Task 4: Build the shared reference-matched shell

**Files:**
- Create: `Gallipoli/components/layout/site-header.tsx`
- Create: `Gallipoli/components/layout/mobile-menu.tsx`
- Create: `Gallipoli/components/layout/site-footer.tsx`
- Create: `Gallipoli/components/layout/wiki-sidebar.tsx`
- Create: `Gallipoli/components/navigation/breadcrumbs.tsx`
- Create: `Gallipoli/components/navigation/locale-switcher.tsx`
- Create: `Gallipoli/data/navigation.ts`
- Modify: `Gallipoli/app/[locale]/layout.tsx`
- Test: `Gallipoli/tests/layout/site-shell.test.tsx`

**Interfaces:**
- Produces: `SiteHeader({ locale })`, `SiteFooter({ locale })`, `WikiSidebar({ locale, activeHref })`.
- Consumes: `officialLinks`, `siteFacts`, localized UI messages, and `keywordPages`.

- [ ] **Step 1: Write the failing shell test**

Render the shell and assert a Gallipoli home link, Maps/Guides/Platforms/Release/History navigation, locale selector, theme toggle, `None available` codes card, official purchase card, and non-affiliation footer.

- [ ] **Step 2: Run the test and verify failure**

Run: `npm run test:run -- tests/layout/site-shell.test.tsx`  
Expected: FAIL because shell components do not exist.

- [ ] **Step 3: Implement desktop and mobile header**

Match the reference structure: sticky bordered header, brand left, horizontal navigation center, language/theme controls right, and a single mobile disclosure menu below the breakpoint.

- [ ] **Step 4: Implement Wiki sidebar and footer**

Group links by the five approved categories. Render codes as `None available`; never render code-shaped placeholder text. Footer contains only official Gallipoli links, legal links, language links, and a fan-site disclaimer.

- [ ] **Step 5: Verify**

Run:

```powershell
npm run test:run -- tests/layout/site-shell.test.tsx
npm run lint
```

Expected: PASS.

- [ ] **Step 6: Commit**

```powershell
git add Gallipoli/components/layout Gallipoli/components/navigation Gallipoli/data/navigation.ts Gallipoli/app/[locale]/layout.tsx Gallipoli/tests/layout
git commit -m "feat: build Gallipoli wiki shell"
```

---

### Task 5: Build the MDX loader and SEO/content audit pipeline

**Files:**
- Create: `Gallipoli/lib/content/load-mdx.ts`
- Create: `Gallipoli/lib/content/frontmatter.ts`
- Create: `Gallipoli/lib/content/seo.ts`
- Create: `Gallipoli/components/content/mdx-components.tsx`
- Create: `Gallipoli/components/content/table-of-contents.tsx`
- Create: `Gallipoli/scripts/audit-content.ts`
- Create: `Gallipoli/tests/content/load-mdx.test.ts`
- Create: `Gallipoli/tests/content/seo.test.ts`
- Create: `Gallipoli/tests/fixtures/valid-article.mdx`

**Interfaces:**
- Produces: `loadArticle(locale: string, contentPath: string): Promise<ArticleDocument>`.
- Produces: `buildArticleMetadata(article: ArticleDocument, href: string): Metadata`.
- Produces: audit exit code 1 on missing keyword page, duplicate keyword/href, invalid title/description length, missing exact keyword, empty H2, old-brand residue, or invalid source ID.

Define `ArticleDocument` exactly as:

```ts
export type ArticleDocument = {
  frontmatter: {
    keyword: string;
    title: string;
    description: string;
    updatedAt: string;
    status: "verified" | "mixed";
    sources: string[];
  };
  content: React.ReactNode;
  rawBody: string;
  headings: Array<{ depth: 2; id: string; text: string }>;
};
```

- [ ] **Step 1: Write failing loader and SEO tests**

Use a fixture with frontmatter fields `keyword`, `title`, `description`, `updatedAt`, `status`, and `sources`. Assert exact title/description bounds and exact-keyword inclusion.

- [ ] **Step 2: Run failing tests**

Run: `npm run test:run -- tests/content`  
Expected: FAIL because loader and validators do not exist.

- [ ] **Step 3: Implement frontmatter schema and MDX loading**

Use Zod to reject missing fields. Resolve files only under `content/<locale>` and reject path traversal. Parse with gray-matter and render through `next-mdx-remote/rsc` with an allowlist of headings, paragraphs, lists, tables, callouts, figures, and source links.

- [ ] **Step 4: Implement metadata validation**

Count JavaScript string characters, not bytes. Reject titles outside 40–60 and descriptions outside 140–160. Require case-insensitive inclusion of the full exact keyword.

- [ ] **Step 5: Implement content audit**

Read `keywords.json`, `data/keyword-pages.ts`, and every English MDX file. Report word count excluding frontmatter and Sources, H2 count, 3–4 sentence paragraph exceptions, duplicate normalized paragraphs, `To be confirmed` occurrences, source IDs, and old-brand matches. Sentence-count and target-word deviations are reported; hard failures are missing/duplicate pages, invalid metadata, empty H2, invalid source IDs, and old-brand residue.

- [ ] **Step 6: Verify**

Run:

```powershell
npm run test:run -- tests/content
npm run audit:content
```

Expected: tests PASS; audit initially reports missing article files and exits 1, proving the gate works.

- [ ] **Step 7: Commit**

```powershell
git add Gallipoli/lib/content Gallipoli/components/content Gallipoli/scripts Gallipoli/tests/content Gallipoli/tests/fixtures
git commit -m "feat: add MDX and content quality pipeline"
```

---

### Task 6: Implement the homepage and official trailer modal

**Files:**
- Create: `Gallipoli/app/[locale]/page.tsx`
- Create: `Gallipoli/components/home/hero-section.tsx`
- Create: `Gallipoli/components/home/video-modal.tsx`
- Create: `Gallipoli/components/home/stats-chips.tsx`
- Create: `Gallipoli/components/home/latest-updates.tsx`
- Create: `Gallipoli/components/home/guide-steps.tsx`
- Create: `Gallipoli/components/home/page-carousel.tsx`
- Create: `Gallipoli/components/home/about-game.tsx`
- Create: `Gallipoli/components/home/category-grid.tsx`
- Create: `Gallipoli/components/home/final-cta.tsx`
- Test: `Gallipoli/tests/home/homepage.test.tsx`
- Test: `Gallipoli/tests/home/video-modal.test.tsx`

**Interfaces:**
- Consumes: `siteFacts`, `officialLinks`, `keywordPages`, and localized messages.
- Produces: localized homepage metadata and the reference-matched home layout.

- [ ] **Step 1: Write failing homepage tests**

Assert the verified release date, BlackMill Games, 50-player battles, 10 classes, 5 launch maps, `To be confirmed` update state, `None available` codes state, three CTA links, and official trailer label.

- [ ] **Step 2: Write failing modal interaction test**

Open the modal, assert the iframe is created only after the click, press Escape, and assert focus returns to the launch button. Assert fallback link points to `https://youtu.be/GEAVtcS4KMI`.

- [ ] **Step 3: Run tests and verify failure**

Run: `npm run test:run -- tests/home`  
Expected: FAIL because homepage components do not exist.

- [ ] **Step 4: Implement the reference-matched homepage modules**

Use the exact module order from the spec. Populate all game facts from `data/site.ts`; do not inline numbers in JSX. Use official or locally generated Gallipoli assets only.

- [ ] **Step 5: Implement the accessible lazy video modal**

Use a native dialog or equivalent focus-trapped modal, Escape handling, background close, body scroll lock, and a `youtube-nocookie.com/embed/GEAVtcS4KMI` iframe created only while open.

- [ ] **Step 6: Verify**

Run:

```powershell
npm run test:run -- tests/home
npm run lint
```

Expected: PASS.

- [ ] **Step 7: Commit**

```powershell
git add Gallipoli/app/[locale]/page.tsx Gallipoli/components/home Gallipoli/tests/home
git commit -m "feat: build Gallipoli homepage"
```

---

### Task 7: Implement maps navigation and the generic keyword article route

**Files:**
- Create: `Gallipoli/app/[locale]/maps/page.tsx`
- Create: `Gallipoli/app/[locale]/[...segments]/page.tsx`
- Create: `Gallipoli/components/maps/map-card.tsx`
- Create: `Gallipoli/components/content/keyword-article-page.tsx`
- Test: `Gallipoli/tests/pages/maps-page.test.tsx`
- Test: `Gallipoli/tests/pages/article-route.test.tsx`

**Interfaces:**
- Consumes: `keywordPages`, `maps`, `loadArticle`, `buildArticleMetadata`, `WikiSidebar`.
- Produces: the indexable `/en/maps` page and all remaining approved article routes.

- [ ] **Step 1: Write failing route tests**

Assert `/en/maps` renders map cards and a historical-vs-game clarification. Assert a known route loads its mapped MDX; an unknown route returns `notFound()`; non-English routes without content return `notFound()` and are absent from static params.

- [ ] **Step 2: Run tests and verify failure**

Run: `npm run test:run -- tests/pages`  
Expected: FAIL because routes do not exist.

- [ ] **Step 3: Implement maps navigation page**

Load `content/en/maps.mdx`, then render breadcrumb, official-media hero, MDX direct answer and verified launch-map summary, cards, and shared sidebar. Avoid claiming exact routes or tactics that are not in `关键词素材.md`.

- [ ] **Step 4: Implement generic catch-all article route**

Resolve locale plus route segments against `keywordPages`, load the exact MDX, generate metadata, render breadcrumb/title/direct-answer lead/body/TOC/sidebar/sources, and call `notFound()` for all unregistered paths.

- [ ] **Step 5: Verify**

Run:

```powershell
npm run test:run -- tests/pages
npm run build
```

Expected: PASS and successful static generation for available English pages.

- [ ] **Step 6: Commit**

```powershell
git add Gallipoli/app/[locale]/maps Gallipoli/app/[locale]/[...segments] Gallipoli/components/maps Gallipoli/components/content/keyword-article-page.tsx Gallipoli/tests/pages
git commit -m "feat: add maps and article routes"
```

---

### Task 8: Write the five maps/guide/platform/release English source pages

**Files:**
- Create: `Gallipoli/content/en/guides/trenches.mdx`
- Create: `Gallipoli/content/en/maps.mdx`
- Create: `Gallipoli/content/en/platforms/steam.mdx`
- Create: `Gallipoli/content/en/platforms/ps5.mdx`
- Create: `Gallipoli/content/en/release-date.mdx`
- Modify: `Gallipoli/app/[locale]/maps/page.tsx` to load and render `content/en/maps.mdx`
- Test: `Gallipoli/tests/content/batch-one.test.ts`

**Interfaces:**
- Consumes: source IDs G1–G7 and H1–H6 from `关键词素材.md`.
- Produces: five keyword pages: `gallipoli maps`, `gallipoli trenches`, `gallipoli steam`, `gallipoli ps5`, `gallipoli release date`.

- [ ] **Step 1: Add a failing batch coverage test**

Assert the five keywords resolve, titles/descriptions pass the shared validator, every article opens with a direct answer, and every cited source ID exists in the source registry.

- [ ] **Step 2: Run the test and verify failure**

Run: `npm run test:run -- tests/content/batch-one.test.ts`  
Expected: FAIL because content files are missing.

- [ ] **Step 3: Write each article from the approved materials**

For maps, separate launch map facts from historical map collections. For trenches, separate gameplay suppression/gun handling from 1915 trench history. For Steam and PS5, include only verified platform features and mark unverified performance details `To be confirmed`. For release date, directly state August 20, 2026 and explain why older trailer dates are not authoritative.

- [ ] **Step 4: Run page audit and fix only evidence-backed issues**

Run: `npm run audit:content`  
Expected: these five pages pass metadata, structure, source, and old-brand checks. Word-count shortfalls remain warnings if the verified source material cannot support more text.

- [ ] **Step 5: Run tests**

Run: `npm run test:run -- tests/content/batch-one.test.ts`  
Expected: PASS.

- [ ] **Step 6: Commit**

```powershell
git add Gallipoli/content/en/maps.mdx Gallipoli/content/en/guides Gallipoli/content/en/platforms Gallipoli/content/en/release-date.mdx Gallipoli/app/[locale]/maps/page.tsx Gallipoli/tests/content/batch-one.test.ts
git commit -m "content: add guide and platform pages"
```

---

### Task 9: Write the eight English historical-context pages

**Files:**
- Create: `Gallipoli/content/en/history/campaign-map.mdx`
- Create: `Gallipoli/content/en/history/landing.mdx`
- Create: `Gallipoli/content/en/history/ww1.mdx`
- Create: `Gallipoli/content/en/history/campaign.mdx`
- Create: `Gallipoli/content/en/history/battles.mdx`
- Create: `Gallipoli/content/en/history/peninsula.mdx`
- Create: `Gallipoli/content/en/history/turkey.mdx`
- Create: `Gallipoli/content/en/history/australia.mdx`
- Test: `Gallipoli/tests/content/history-pages.test.ts`

**Interfaces:**
- Consumes: H1–H6 for history and G1/G3/G5 for clearly separated game context.
- Produces: eight pages covering campaign map, landing, WW1, campaign/war synonym, battles, peninsula, Turkey, and Australia.

- [ ] **Step 1: Write the failing history coverage test**

Assert eight exact keyword mappings, valid metadata, at least two valid historical source IDs per page, and the presence of a game-vs-history clarification on map/landing/peninsula pages.

- [ ] **Step 2: Run the test and verify failure**

Run: `npm run test:run -- tests/content/history-pages.test.ts`  
Expected: FAIL because history MDX files are missing.

- [ ] **Step 3: Write campaign-map, landing, WW1, and campaign pages**

Use AWM mapping/trench collections, National Army Museum chronology, and NZ History landing plans/timeline. The campaign page covers `gallipoli war` naturally but does not create a second URL.

- [ ] **Step 4: Write battles, peninsula, Turkey, and Australia pages**

Keep individual battle names and dates limited to facts in H1–H6. Distinguish Ottoman Empire in 1915 from modern Turkey. Explain ANZAC using the AWM and NZ History sources without introducing unsupported casualty figures.

- [ ] **Step 5: Audit and test**

Run:

```powershell
npm run audit:content
npm run test:run -- tests/content/history-pages.test.ts
```

Expected: all eight pages pass hard validation; evidence-limited word-count deviations are explicit warnings.

- [ ] **Step 6: Commit**

```powershell
git add Gallipoli/content/en/history Gallipoli/tests/content/history-pages.test.ts
git commit -m "content: add Gallipoli history pages"
```

---

### Task 10: Write the three English game-information pages

**Files:**
- Create: `Gallipoli/content/en/game.mdx`
- Create: `Gallipoli/content/en/series.mdx`
- Create: `Gallipoli/content/en/developer/blackmill-games.mdx`
- Test: `Gallipoli/tests/content/game-pages.test.ts`

**Interfaces:**
- Consumes: G1–G7 and official video references Y1–Y5 from `关键词素材.md`.
- Produces: `gallipoli ww1 game`, `gallipoli series`, `gallipoli blackmill games` pages.

- [ ] **Step 1: Write the failing game-page test**

Assert exact keyword routing, metadata bounds, only verified developer/publisher names, and no unsupported sales, budget, staff, or performance figures.

- [ ] **Step 2: Run the test and verify failure**

Run: `npm run test:run -- tests/content/game-pages.test.ts`  
Expected: FAIL because three MDX files are missing.

- [ ] **Step 3: Write the three pages**

The game page answers what Gallipoli is and covers verified platforms, scale, classes, maps, bots, and Expedition. The series page explains its position after Verdun, Tannenberg, and Isonzo and that it is standalone. The BlackMill page states only verified developer/publisher and official-channel facts; company details absent from materials use `To be confirmed` or are omitted.

- [ ] **Step 4: Audit and test**

Run:

```powershell
npm run audit:content
npm run test:run -- tests/content/game-pages.test.ts
```

Expected: all 16 keywords now map to passing English pages.

- [ ] **Step 5: Commit**

```powershell
git add Gallipoli/content/en/game.mdx Gallipoli/content/en/series.mdx Gallipoli/content/en/developer Gallipoli/tests/content/game-pages.test.ts
git commit -m "content: add Gallipoli game information pages"
```

---

### Task 11: Add legal pages, sitemap, robots, and final SEO integration

**Files:**
- Create: `Gallipoli/app/[locale]/privacy-policy/page.tsx`
- Create: `Gallipoli/app/[locale]/terms-of-service/page.tsx`
- Create: `Gallipoli/app/sitemap.ts`
- Create: `Gallipoli/app/robots.ts`
- Create: `Gallipoli/lib/seo/alternates.ts`
- Test: `Gallipoli/tests/seo/site-seo.test.ts`

**Interfaces:**
- Consumes: available locale/content matrix and keyword registry.
- Produces: canonical metadata and sitemap entries only for implemented pages.

- [ ] **Step 1: Write failing SEO tests**

Assert all 16 English keyword URLs appear once, untranslated article URLs do not appear, legal pages contain Gallipoli and the fan-site disclaimer, and canonical URLs use a single configurable `SITE_URL`.

- [ ] **Step 2: Run the test and verify failure**

Run: `npm run test:run -- tests/seo/site-seo.test.ts`  
Expected: FAIL because SEO routes do not exist.

- [ ] **Step 3: Implement legal, sitemap, robots, and alternates**

Use factual fan-site language and no copied legal text. Add hreflang only when the corresponding localized content exists. Set robots to allow public pages and point to `/sitemap.xml`.

- [ ] **Step 4: Verify**

Run:

```powershell
npm run test:run -- tests/seo
npm run build
```

Expected: PASS.

- [ ] **Step 5: Commit**

```powershell
git add Gallipoli/app Gallipoli/lib/seo Gallipoli/tests/seo
git commit -m "feat: add legal and SEO routes"
```

---

### Task 12: Perform visual, responsive, link, and production verification

**Files:**
- Create: `Gallipoli/tests/e2e/home.spec.ts`
- Create: `Gallipoli/tests/e2e/maps.spec.ts`
- Create: `Gallipoli/tests/e2e/article.spec.ts`
- Create: `Gallipoli/scripts/check-links.ts`
- Modify: `Gallipoli/package.json`
- Create: `Gallipoli/docs/verification/2026-08-24-english-release.md`

**Interfaces:**
- Consumes: the complete English site.
- Produces: reproducible end-to-end and link checks plus a release verification record.

- [ ] **Step 1: Write failing Playwright tests**

Test desktop and mobile navigation, theme toggle, language menu behavior, video modal, maps cards, article TOC, sidebar collapse, 404 handling, and the absence of horizontal overflow at 390px.

- [ ] **Step 2: Add official-link checker**

Check the approved official website, Discord, YouTube, Steam, and trailer URLs with GET/HEAD fallback, timeout, redirect support, and a nonzero exit code on 404 or unreachable results. Do not crawl competitor sites.

- [ ] **Step 3: Run tests to expose visual or behavioral failures**

Run:

```powershell
npm run dev
npm run test:e2e
```

Expected: initial failures identify missing responsive or interaction details.

- [ ] **Step 4: Fix only observed failures and match the reference layout**

Compare homepage, maps list, and one article at desktop and mobile widths. Adjust container width, grid ratios, card spacing, borders, typography scale, sticky sidebar, and mobile stacking without copying protected assets.

- [ ] **Step 5: Run the complete release gate**

Run:

```powershell
npm run lint
npm run test:run
npm run audit:content
npm run test:e2e
npm run build
npx tsx scripts/check-links.ts
```

Expected: every command exits 0. Content audit reports 16 unique English keyword pages and no old-brand matches.

- [ ] **Step 6: Record verification evidence**

Write exact command results, page counts, warnings, verified link status, viewport checks, and any remaining `To be confirmed` items to `docs/verification/2026-08-24-english-release.md`.

- [ ] **Step 7: Commit**

```powershell
git add Gallipoli/tests/e2e Gallipoli/scripts/check-links.ts Gallipoli/package.json Gallipoli/package-lock.json Gallipoli/docs/verification
git commit -m "test: verify Gallipoli English release"
```
