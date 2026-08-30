# Big Ambitions Wiki Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a production-ready bilingual Big Ambitions guide site that faithfully reproduces the reference site's layout across a homepage, Mods navigation page, MDX article page, and legal pages.

**Architecture:** A Next.js App Router application will live in `Big Ambitions/site`, with locale-prefixed routes and a small typed dictionary layer for shared interface copy. Article bodies will be static MDX modules selected through a typed content registry; shared layout components will reproduce the reference site's header, hero, card grids, article column, sidebar, and footer without copying its brand or assets.

**Tech Stack:** Next.js, React, TypeScript, MDX, CSS, Vitest, Testing Library

**Spec:** `docs/superpowers/specs/2026-08-31-big-ambitions-wiki-design.md`

## Global Constraints

- Use Next.js App Router and TypeScript.
- Store guide article bodies in MDX and public interface copy in typed locale dictionaries.
- Support English and German at `/en` and `/de`; `/` redirects to `/en`.
- Reproduce the reference site's layout, hierarchy, spacing, card shapes, article width, and responsive behavior without copying its branding, images, or prose.
- Use only verified Big Ambitions information from the project research files; render `To be confirmed` / `Noch zu bestätigen` for uncertain facts.
- Render `None available` / `Keine verfügbar` for codes because no official code system is confirmed.
- Use `--nav-theme: 45 93% 55%` and `--nav-theme-light: 45 96% 64%`; default to a dark theme.
- Use only the verified official website, Steam, Discord, and YouTube links from the spec.
- The built site must contain no `Gamble With Your Friends`, `GWYF`, or reference-site domain strings.

---

## File Map

- `Big Ambitions/site/package.json`: scripts and dependencies.
- `Big Ambitions/site/next.config.mjs`: MDX page support and build configuration.
- `Big Ambitions/site/src/app`: locale routes, redirects, metadata, global styles, and legal pages.
- `Big Ambitions/site/src/components`: focused site shell, homepage, card, sidebar, and MDX presentation components.
- `Big Ambitions/site/src/content`: English and German MDX articles plus the content registry.
- `Big Ambitions/site/src/i18n`: locale validation and typed dictionaries.
- `Big Ambitions/site/src/lib`: verified constants and metadata helpers.
- `Big Ambitions/site/src/tests`: behavior and content-integrity tests.

### Task 1: Project Foundation and Locale Contract

**Files:**
- Create: `Big Ambitions/site/package.json`
- Create: `Big Ambitions/site/tsconfig.json`
- Create: `Big Ambitions/site/next.config.mjs`
- Create: `Big Ambitions/site/vitest.config.ts`
- Create: `Big Ambitions/site/src/tests/setup.ts`
- Create: `Big Ambitions/site/src/i18n/locales.ts`
- Create: `Big Ambitions/site/src/i18n/locales.test.ts`
- Create: `Big Ambitions/site/src/app/layout.tsx`
- Create: `Big Ambitions/site/src/app/page.tsx`

**Interfaces:**
- Produces: `type Locale = "en" | "de"`, `locales`, `isLocale(value: string): value is Locale`, and a root redirect to `/en`.

- [ ] **Step 1: Write the locale contract test**

```ts
import { describe, expect, it } from "vitest";
import { isLocale, locales } from "@/i18n/locales";

describe("locale contract", () => {
  it("supports only English and German", () => {
    expect(locales).toEqual(["en", "de"]);
    expect(isLocale("en")).toBe(true);
    expect(isLocale("fr")).toBe(false);
  });
});
```

- [ ] **Step 2: Add the package and test configuration, install dependencies, and verify the test fails because `locales.ts` is missing**

Run: `npm install && npm test -- locales.test.ts`

Expected: FAIL with a missing `@/i18n/locales` module.

- [ ] **Step 3: Implement the locale contract and root App Router files**

```ts
export const locales = ["en", "de"] as const;
export type Locale = (typeof locales)[number];
export const isLocale = (value: string): value is Locale =>
  locales.includes(value as Locale);
```

`src/app/page.tsx` must call `redirect("/en")`; the root layout must define the shared HTML and body only.

- [ ] **Step 4: Run the locale test and TypeScript check**

Run: `npm test -- locales.test.ts && npm run typecheck`

Expected: PASS and zero TypeScript errors.

- [ ] **Step 5: Commit**

```bash
git add "Big Ambitions/site"
git commit -m "chore: scaffold Big Ambitions wiki"
```

### Task 2: Verified Data and Bilingual Dictionaries

**Files:**
- Create: `Big Ambitions/site/src/lib/site-data.ts`
- Create: `Big Ambitions/site/src/i18n/dictionaries.ts`
- Create: `Big Ambitions/site/src/tests/site-data.test.ts`

**Interfaces:**
- Consumes: `Locale` from `src/i18n/locales.ts`.
- Produces: `siteData`, `Dictionary`, and `getDictionary(locale: Locale): Dictionary`.

- [ ] **Step 1: Write the verified-data integrity test**

```ts
import { describe, expect, it } from "vitest";
import { siteData } from "@/lib/site-data";

describe("verified site data", () => {
  it("uses approved identity, links, theme, and empty codes", () => {
    expect(siteData.gameName).toBe("Big Ambitions");
    expect(siteData.codes).toEqual([]);
    expect(siteData.links).toEqual({
      official: "https://www.bigambitionsgame.com/",
      steam: "https://store.steampowered.com/app/1331550/Big_Ambitions/",
      discord: "https://discord.gg/hovgaardgames",
      youtube: "https://www.youtube.com/@hovgaardgames",
    });
    expect(siteData.theme).toEqual({ base: "45 93% 55%", light: "45 96% 64%" });
  });
});
```

- [ ] **Step 2: Run the test to confirm it fails**

Run: `npm test -- site-data.test.ts`

Expected: FAIL because `site-data.ts` does not exist.

- [ ] **Step 3: Implement immutable verified constants and complete English/German dictionaries**

The dictionary must include header navigation, Hero copy, four start cards, game introduction, codes empty-state text, footer, legal page labels, CTA copy, and SEO fields. Use only the verified facts in the spec; do not add player counts, sales, code values, or unsupported platforms.

- [ ] **Step 4: Run data tests and type checking**

Run: `npm test -- site-data.test.ts && npm run typecheck`

Expected: PASS.

- [ ] **Step 5: Commit**

```bash
git add "Big Ambitions/site/src/lib" "Big Ambitions/site/src/i18n" "Big Ambitions/site/src/tests"
git commit -m "feat: add verified bilingual site data"
```

### Task 3: Shared Shell and Reference-Matched Styling

**Files:**
- Create: `Big Ambitions/site/src/app/globals.css`
- Create: `Big Ambitions/site/src/components/site-header.tsx`
- Create: `Big Ambitions/site/src/components/site-footer.tsx`
- Create: `Big Ambitions/site/src/components/codes-sidebar.tsx`
- Create: `Big Ambitions/site/src/components/breadcrumbs.tsx`
- Create: `Big Ambitions/site/src/app/[locale]/layout.tsx`
- Create: `Big Ambitions/site/src/tests/site-shell.test.tsx`

**Interfaces:**
- Consumes: `Locale`, `getDictionary`, and `siteData`.
- Produces: `SiteHeader`, `SiteFooter`, `CodesSidebar`, and `Breadcrumbs` reusable by every route.

- [ ] **Step 1: Write shell tests for branding, navigation, codes, and official links**

```tsx
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { SiteHeader } from "@/components/site-header";
import { CodesSidebar } from "@/components/codes-sidebar";

describe("site shell", () => {
  it("renders Big Ambitions and the verified empty code state", () => {
    render(<><SiteHeader locale="en" /><CodesSidebar locale="en" /></>);
    expect(screen.getByText("Big Ambitions Wiki")).toBeInTheDocument();
    expect(screen.getByText("None available")).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /Steam/i })).toHaveAttribute(
      "href",
      "https://store.steampowered.com/app/1331550/Big_Ambitions/",
    );
  });
});
```

- [ ] **Step 2: Run the shell test to confirm it fails**

Run: `npm test -- site-shell.test.tsx`

Expected: FAIL because the components do not exist.

- [ ] **Step 3: Implement the shell and global responsive CSS**

Match the reference structure: 64px black header, centered maximum-width content, yellow active state, dark cards with subtle borders, compact display headings, desktop navigation, mobile menu, article sidebar, and multi-column footer. Define the exact HSL variables from Global Constraints on `:root`.

- [ ] **Step 4: Run component tests and type checking**

Run: `npm test -- site-shell.test.tsx && npm run typecheck`

Expected: PASS.

- [ ] **Step 5: Commit**

```bash
git add "Big Ambitions/site/src/app" "Big Ambitions/site/src/components" "Big Ambitions/site/src/tests"
git commit -m "feat: build reference-matched site shell"
```

### Task 4: Researched Homepage

**Files:**
- Create: `Big Ambitions/site/src/components/home/hero.tsx`
- Create: `Big Ambitions/site/src/components/home/stats-grid.tsx`
- Create: `Big Ambitions/site/src/components/home/start-here.tsx`
- Create: `Big Ambitions/site/src/components/home/about-game.tsx`
- Create: `Big Ambitions/site/src/components/home/guide-grid.tsx`
- Create: `Big Ambitions/site/src/components/home/final-cta.tsx`
- Create: `Big Ambitions/site/src/app/[locale]/page.tsx`
- Create: `Big Ambitions/site/src/tests/homepage.test.tsx`

**Interfaces:**
- Consumes: `Locale`, `Dictionary`, `siteData`, and shared shell components.
- Produces: the locale homepage and metadata for `/en` and `/de`.

- [ ] **Step 1: Write homepage content tests**

```tsx
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Hero } from "@/components/home/hero";
import { StartHere } from "@/components/home/start-here";

describe("researched homepage", () => {
  it("uses the approved game identity and four start cards", () => {
    render(<><Hero locale="en" /><StartHere locale="en" /></>);
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent("Big Ambitions");
    expect(screen.getAllByTestId("start-card")).toHaveLength(4);
    expect(screen.getByText("Beginner Guide")).toBeInTheDocument();
  });
});
```

- [ ] **Step 2: Run the homepage test to verify it fails**

Run: `npm test -- homepage.test.tsx`

Expected: FAIL because homepage components do not exist.

- [ ] **Step 3: Implement the homepage modules and localized metadata**

Use the researched Hero, beginner guidance, business simulation description, verified stats, code empty state, and final CTA. The English metadata title must be `Big Ambitions Wiki — Guides, Mods & Business Tips`; descriptions must be 140–160 characters and keyword strings no more than 100 characters.

- [ ] **Step 4: Run homepage tests, metadata checks, and type checking**

Run: `npm test -- homepage.test.tsx && npm run typecheck`

Expected: PASS.

- [ ] **Step 5: Commit**

```bash
git add "Big Ambitions/site/src/components/home" "Big Ambitions/site/src/app/[locale]/page.tsx" "Big Ambitions/site/src/tests/homepage.test.tsx"
git commit -m "feat: add researched Big Ambitions homepage"
```

### Task 5: MDX Registry, Mods Navigation, and Article Detail

**Files:**
- Create: `Big Ambitions/site/src/content/types.ts`
- Create: `Big Ambitions/site/src/content/registry.ts`
- Create: `Big Ambitions/site/src/content/en/mods/big-ambitions-mods.mdx`
- Create: `Big Ambitions/site/src/content/de/mods/big-ambitions-mods.mdx`
- Create: `Big Ambitions/site/src/components/mdx/mdx-components.tsx`
- Create: `Big Ambitions/site/src/components/article-header.tsx`
- Create: `Big Ambitions/site/src/app/[locale]/mods/page.tsx`
- Create: `Big Ambitions/site/src/app/[locale]/mods/[slug]/page.tsx`
- Create: `Big Ambitions/site/src/tests/content-registry.test.ts`

**Interfaces:**
- Produces: `ArticleMeta`, `ArticleRecord`, `getArticles(locale: Locale)`, and `getArticle(locale: Locale, slug: string)`.
- The detail route consumes a returned MDX component and metadata; missing slugs call `notFound()`.

- [ ] **Step 1: Write registry tests for both locales and missing slugs**

```ts
import { describe, expect, it } from "vitest";
import { getArticle, getArticles } from "@/content/registry";

describe("MDX registry", () => {
  it("returns translated articles and rejects unknown slugs", () => {
    expect(getArticles("en").map((article) => article.slug)).toContain("big-ambitions-mods");
    expect(getArticle("de", "big-ambitions-mods")?.meta.title).toMatch(/Mods/);
    expect(getArticle("en", "missing-page")).toBeUndefined();
  });
});
```

- [ ] **Step 2: Run the registry test to verify it fails**

Run: `npm test -- content-registry.test.ts`

Expected: FAIL because the registry is missing.

- [ ] **Step 3: Implement the typed registry and original MDX content**

The article must cover the currently unconfirmed official mod ecosystem, safe backup workflow, blueprints, known limitations, and crash troubleshooting using the project research. Do not state that Steam Workshop or official mod support exists unless the research confirms it; use `To be confirmed` / `Noch zu bestätigen` where needed.

- [ ] **Step 4: Implement list and detail routes using the shared shell**

The Mods list must use reference-matched cards and breadcrumbs. The detail page must use the narrow article column, sidebar codes module, MDX callouts, steps, tables, FAQ, and ending CTAs.

- [ ] **Step 5: Run registry tests, type checking, and route build**

Run: `npm test -- content-registry.test.ts && npm run typecheck && npm run build`

Expected: PASS and generated locale routes for the homepage, Mods list, and article.

- [ ] **Step 6: Commit**

```bash
git add "Big Ambitions/site/src/content" "Big Ambitions/site/src/components" "Big Ambitions/site/src/app/[locale]/mods" "Big Ambitions/site/src/tests/content-registry.test.ts"
git commit -m "feat: add bilingual MDX mods guides"
```

### Task 6: Legal Pages, SEO, and Brand-Residue Guard

**Files:**
- Create: `Big Ambitions/site/src/app/[locale]/privacy/page.tsx`
- Create: `Big Ambitions/site/src/app/[locale]/terms/page.tsx`
- Create: `Big Ambitions/site/src/app/sitemap.ts`
- Create: `Big Ambitions/site/src/app/robots.ts`
- Create: `Big Ambitions/site/src/tests/content-integrity.test.ts`

**Interfaces:**
- Consumes: locale dictionaries, `siteData`, and article registry.
- Produces: localized legal pages, robots metadata, sitemap entries, and an automated residue check.

- [ ] **Step 1: Write content-integrity tests**

```ts
import fs from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";

const sourceRoot = path.resolve(process.cwd(), "src");
const banned = ["Gamble With Your Friends", "GWYF", "gamblewithyourfriends.net"];

function readSourceFiles(directory: string): string {
  return fs.readdirSync(directory, { withFileTypes: true }).map((entry) => {
    const target = path.join(directory, entry.name);
    return entry.isDirectory() ? readSourceFiles(target) : fs.readFileSync(target, "utf8");
  }).join("\n");
}

describe("content integrity", () => {
  it("contains no reference-site brand residue", () => {
    const source = readSourceFiles(sourceRoot);
    for (const phrase of banned) expect(source).not.toContain(phrase);
  });
});
```

- [ ] **Step 2: Run the integrity test to establish the guard**

Run: `npm test -- content-integrity.test.ts`

Expected: PASS only when no implementation source contains banned strings.

- [ ] **Step 3: Implement localized privacy and terms pages plus sitemap and robots metadata**

Legal copy must identify the site as an independent Big Ambitions fan guide, link only to verified official properties, and contain no reference-game identity.

- [ ] **Step 4: Run all tests and the production build**

Run: `npm test && npm run typecheck && npm run build`

Expected: all checks PASS.

- [ ] **Step 5: Commit**

```bash
git add "Big Ambitions/site/src/app" "Big Ambitions/site/src/tests/content-integrity.test.ts"
git commit -m "feat: add localized legal and SEO pages"
```

### Task 7: Browser Visual Verification and Final Audit

**Files:**
- Modify: any `Big Ambitions/site/src` file whose layout fails comparison.
- Create: `Big Ambitions/site/README.md`

**Interfaces:**
- Consumes: the complete built site.
- Produces: verified desktop/mobile pages and local run documentation.

- [ ] **Step 1: Start the production build locally**

Run: `npm run build && npm run start`

Expected: server starts without runtime errors.

- [ ] **Step 2: Compare `/en`, `/en/mods`, and `/en/mods/big-ambitions-mods` at desktop width**

Verify header height, maximum content width, hero alignment, card grid, yellow accents, article width, sidebar, and footer against the recorded reference screenshots.

- [ ] **Step 3: Compare the same routes at a mobile viewport**

Verify the navigation collapses, all cards become a single readable column, tables can scroll horizontally, the sidebar moves below content or hides, and no horizontal page overflow exists.

- [ ] **Step 4: Verify German and legal routes**

Open `/de`, `/de/mods`, `/de/mods/big-ambitions-mods`, `/en/privacy`, `/en/terms`, `/de/privacy`, and `/de/terms`; verify localized navigation, content, metadata, codes empty state, and internal links.

- [ ] **Step 5: Run final automated verification and residue scan**

Run: `npm test && npm run typecheck && npm run build`

Run from the site directory: `rg -n -i "Gamble With Your Friends|GWYF|gamblewithyourfriends\.net" src public`

Expected: tests/build PASS and the residue scan prints no matches.

- [ ] **Step 6: Write the README with install, development, test, build, and route instructions**

Document `npm install`, `npm run dev`, `npm test`, `npm run typecheck`, `npm run build`, the English/German route map, MDX content location, and verified-link policy.

- [ ] **Step 7: Commit**

```bash
git add "Big Ambitions/site"
git commit -m "docs: verify and document Big Ambitions wiki"
```
