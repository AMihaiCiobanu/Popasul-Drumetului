# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

Static marketing site for **Popasul Drumețului**, a traditional Romanian restaurant in Câmpulung Moldovenesc, Bucovina. No build system, no framework, no package manager. Plain HTML/CSS/JS served as-is via **GitHub Pages** (see `CNAME` → `popasuldrumetuluibucovina.ro`).

Primary language of user-facing content is **Romanian**; English is a runtime toggle (see i18n below).

## Running / developing

No build, no tests, no lint. Edit files and open directly, or serve statically:

```bash
python3 -m http.server 8000   # then open http://localhost:8000
```

Deploy = push to the default branch; GitHub Pages publishes the repo root. There is no CI, staging, or preview step — a bad commit ships live.

## Files

- `index.html` — the entire single-page site. Sections by `id`: `home`, `about`, `menu`, `gallery`, `services`, `payment`, `reviews`, `faq`, `contact`.
- `script.js` (~2800 lines) — all behavior AND all content data (menu + translations live here, not in HTML).
- `styles.css` — all styling.
- `termeni-conditii.html`, `politica-confidentialitate.html`, `politica-cookies.html` — standalone legal pages.
- `sitemap.xml`, `robots.txt`, `site.webmanifest`, favicons, `googlebbef51bd91bd31a5.html` (Search Console verification) — SEO/PWA infra.
- `images/` — all photos, referenced by convention (see menu images below).

## Architecture — read before editing content

### i18n is JS-driven, dual-source

Two independent translation systems in `script.js`, both must stay in sync when adding content:

1. **`translations`** (~line 42): flat `"section.key"` → string map, with parallel `ro` and `en` objects. HTML elements opt in via a `data-i18n` attribute; `changeLanguage(lang)` (~line 625) swaps text. `currentLang` defaults to `'ro'`.
2. **`menuTranslations`** (~line 750): the full menu, structured by category (`breakfast`, `soup`, `grill`, `salate`, `dessert`, tradition, fastfood…), also mirrored across `ro`/`en`. `renderMenu(category)` (~line 1949) builds the menu DOM from this.

Adding a menu item or any visible string means editing **both** `ro` and `en` branches. A string added to only one language silently falls back / breaks on toggle.

### Menu images are convention-based, not per-item paths

`createImageMap(count)` (~line 722) generates `{1: 'images/<cat>1.jpg', ...}` numbered maps per category (`breakfastImages`, `soupImages`, `grillImages`, etc.). Item images resolve by index into these maps, so image filenames must follow the category+number naming — adding an item image means placing a correctly-named file in `images/`, not wiring a path.

### Analytics / consent

Google Analytics (gtag) with **GDPR consent mode** — consent defaults to denied and is granted only after the cookie banner. A large custom event taxonomy is fired throughout `script.js`: `reservation_click`, `phone_call_click`, `menu_category_view`, `cta_click`, `scroll_depth`, `language_change`, `social_click`, etc. `getRomanianAnalyticsLabel()` (~line 521) maps labels for reporting. When adding interactive elements, follow the existing pattern of firing a matching `gtag('event', ...)`.

### Other behavior in script.js

Scroll-spy nav via `IntersectionObserver`, smooth-scroll anchors, a custom gallery **lightbox** (built dynamically ~line 1785), language dropdown, and card/feature initializers that also render from data (`initializeReviewCards`, `initializeSocialLinks`, `initializeFeatureItems`).

## Editing conventions

- **Business facts** (phone `+40 754 358 065`, address `Calea Bucovinei Nr 335C`, domain) appear in many places: `index.html` meta/OG/JSON-LD, `script.js` translations, legal pages. Change all occurrences together — grep first.
- Keep Romanian diacritics (ț, ș, ă, î, â) intact; files are UTF-8.
- Content edits usually belong in `script.js` data objects, not `index.html`.
- When adding a page, also update `sitemap.xml`.
