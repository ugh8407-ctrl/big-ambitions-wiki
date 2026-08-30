# Big Ambitions Wiki

A bilingual Next.js and MDX fan guide for Big Ambitions. The site uses verified project research, one page per approved keyword, a dark reference-matched layout, English and German routes, and explicit confirmation labels for version-sensitive facts.

## Local development

```bash
npm install
npm run dev
```

Open `http://localhost:3000/en` for English or `http://localhost:3000/de` for German.

## Verification

```bash
npm test
npm run typecheck
npm run build
```

## Routes

- `/en` and `/de`: homepages
- `/:locale/guides`: guide index
- `/:locale/mods`: Mods and Blueprints index
- `/:locale/:category/:slug`: keyword article
- `/:locale/privacy`: privacy policy
- `/:locale/terms`: terms of service

## Content policy

Article records are defined in `src/content/registry.ts` and rendered through the MDX shell in `src/content/article-shell.mdx`. Official game, Steam, roadmap, forum, Workshop, and community research are kept distinct. Unverified dates, values, platform releases, items, and workflows must remain marked `To be confirmed` or `Noch zu bestätigen`; no redemption codes may be invented.
