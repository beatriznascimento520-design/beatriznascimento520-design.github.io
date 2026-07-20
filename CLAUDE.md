# CLAUDE.md

Beatriz Nascimento's personal portfolio site — React 19 + Vite 8, plain CSS,
no UI framework. Adapted from the same codebase as `rique-git.github.io`.
Deployed to GitHub Pages on push to `main`.

## Commands

```bash
npm run dev      # http://localhost:5173
npm run build
npm run lint
```

Always run `npm run build` **and** `npm run lint` before declaring work done.

## Layout

```
src/
  App.jsx              HashRouter shell: Nav + <Routes> + Footer
  components/
    Home.jsx           Hero → Studies → Work → Career
    Hero.jsx           Full-viewport intro, two staggered portraits
    Studies.jsx        EDUCATION array → brand-tinted blocks + languages strip
    Work.jsx           "Experiences" carousel (reads src/data/experience.js)
    Career.jsx         CAREER array → vertical timeline
    ExperienceDetail.jsx   /experience/:slug page
    LogoChip.jsx       Logo plate with initial-letter fallback
    Flag.jsx           Simplified GB / PT flags for the language toggle
    Photo.jsx          Image with gradient-placeholder fallback
    Reveal.jsx         Scroll-reveal wrapper
  data/experience.js   Single source of truth for experiences
  i18n/
    ui.js              Interface strings + the Languages list
    context.js         LanguageContext, useLang(), pickIn()
    LanguageProvider.jsx   Provider: state, persistence, <html lang>
  hooks/               useTheme, useReveal, useSectionNav
  index.css            Design tokens (CSS variables) + resets
  App.css              All component styles
```

Content lives in plain arrays, not a CMS. `src/data/experience.js` is shared
between the carousel and the detail pages — edit it there, not in a component.

## Conventions and gotchas

**Section split is deliberate and has been corrected twice.** "Career"
(`id="career"`, the vertical timeline) holds **only the Mateo-Sídron
internship**. "Experiences" (`id="experience"`, the carousel) holds
**everything else** — the SIORTO, Super Ajudas and APDP student internships
plus the Project IN volunteering. Don't move them back into Career.

**Education content is user-supplied, not derived from the CV.** Periods are
single years (`2022` secondary, `2026` licenciatura, "In progress" for the
ISEL master's), and the two course links were given directly:
`essl.ipl.pt/cursos/9/plano-de-estudos` and
`isel.pt/curso/10539/plano-de-estudos`. The secondary school deliberately has
**no** link — don't add one back.

**Ordering.** Experiences and Education run oldest → newest, left to right.
The Career timeline runs oldest at top, newest at the bottom, and ends on a
`current: true` entry ("Now") that has no company or logo and renders the
pulsing dot. Keep that entry last.

**The hero name breaks over two lines** (`Beatriz` / `Nascimento`) via an
explicit `<br />`. That's deliberate, not a wrap — don't collapse it.

**The site is bilingual (EN / PT).** `<LanguageProvider>` wraps everything in
`App.jsx`; components read `useLang()` from `src/i18n/context.js`, which gives
`{ lang, toggle, t, pick }`. Interface strings go in `src/i18n/ui.js` via
`t("some.key")`. **Content does not** — each entry carries its own
`{ en, pt }` fields inline (see `src/data/experience.js`, and the `EDUCATION`
and `CAREER` arrays), unwrapped with `pick(field)`. That was chosen over
parallel en/pt files so the two languages can't drift apart entry by entry.

`pick` passes plain strings through untouched, so anything that reads the same
in both languages — proper nouns, years, "CAD/CAM" — stays a bare string.
Preference persists in `localStorage` under `lang`, defaults to Portuguese for
`pt-*` browsers, and the provider keeps `<html lang>` in sync.

Adding an entry means adding **both** languages. There's no build-time check;
the quickest guard is a throwaway script that imports `EXPERIENCE` and `UI`
and asserts every object field has `.en` and `.pt`.

**The flag button shows the language you're reading, not the one you'd switch
to.** Clicking swaps. `nav.toPortuguese` is deliberately Portuguese in both
locales (and `nav.toEnglish` English in both) — the label names its
destination, so it should be readable to someone who wants that destination.

**`HashRouter`, not `BrowserRouter`.** GitHub Pages has no rewrite rules, so
deep links need the hash. Don't "modernise" this.

**Section backgrounds alternate** and must stay that way: Hero `--bg` →
Studies `--bg-soft` → Experiences `--bg` → Career `--bg-soft` → Footer `--bg`.
Adding or reordering a section means rechecking the `section--soft` classes.

**`Reveal` merges an incoming `style` prop** so callers can pass `--brand`.
It sets `transitionDelay` last — don't pass `transitionDelay` through `style`,
it'll be overwritten.

**Palette is warm, not cool.** The site was deliberately moved off the blue
it was forked with onto a soft rose / warm-taupe scheme — the user asked for
"more girly … but keep it professional", so keep saturation low and the
`--accent` dark enough to hold text contrast on `--surface`. Everything lives
in `src/index.css`; `.photo--tone2` in `App.css` was warmed to match.

**Brand colours.** Each experience/education/career entry carries a `brand`
hex, applied as a `--brand` custom property. CSS derives the card wash,
border, top bar and accent text from it via `color-mix`, with separate
dark-theme rules that lighten the text so contrast holds. All are **sampled
from the real logo files**.

A brand hex has to survive two derivations and still be readable, because
`.card__period` / `.card__more` are small text:

```
light:  color-mix(brand 72%, --text)     on  color-mix(brand  7%, --surface)
dark:   color-mix(brand 45%, #ffffff)    on  color-mix(brand 13%, --surface)
```

Both must clear **4.5:1**. Check a new hex against that before committing it —
a saturated mid-tone (yellow, lime, cyan) will usually fail the light one.
Three entries deviate from their true logo colour on purpose:

| Entry | Hex | Why not the logo colour |
|---|---|---|
| Super Ajudas | `#7d8c22` | true olive `#9aae2e` only reached 3.75:1 |
| Project IN | `#dc0078` | Envolve-te's navy was indistinguishable from APDP's |
| Colégio M. Bernardes | `#1464a0` | crest blue over crest red, which collided with ISEL |

ESSLisboa's wine and ISEL's red sit next to each other in Education and are
the closest remaining pair — that's their real branding, not an oversight.

**The Languages strip reuses the `.certs` classes.** The block under Education
was a certifications list on the site this was forked from; Beatriz has no
certificates, so it now renders `LANGUAGES` from `src/i18n/ui.js` as `.tags`
pills. The class names are historical — don't be misled by them.

**`logo-chip` fixes height, flexes width.** Logos range from tall shields to
wide wordmarks; a square container makes the wide ones illegible. The white
plate is intentional — it keeps black-ink wordmarks visible in dark mode.

**Cross-page scrolling** goes through `useSectionNav` / `state.scrollTo`.
`Home.jsx` reads `location.state.scrollTo` and scrolls after **two**
animation frames — one frame fires before layout settles and lands short.

**Cards are usually links.** `.card__inner` carries the padding; `.card`
itself has `padding: 0` so the whole block is clickable. In `Studies.jsx` the
element is chosen per entry — `const Body = item.href ? "a" : "div"` — because
the secondary school has no link, and the "Ver plano curricular ↗" call to
action is suppressed on entries without one. Don't reintroduce an `<a>` with
no `href`.

**The Experiences carousel stays simple.** Native `overflow-x` track, arrows
in the section header that scroll by one card and disable at the ends.

## Assets

- `public/images/` — hero portraits, **pre-cropped to exactly 4:5** at
  760x950 (`beatriz-capa.jpg` primary, `beatriz-outdoors.jpg` accent).
  Because they already match the frame, `object-fit: cover` trims nothing and
  the old `object-position` tuning was removed. Swapping in a photo of a
  different ratio means re-cropping it, not nudging the CSS. Originals are in
  `images-source/` at the repo root. `Photo` still falls back to a gradient
  placeholder when given no `src`.
- `public/logos/` — organisation logos, **trimmed of dead whitespace and
  renamed** to the slugs the components reference. Untouched originals live in
  `logos-source/` at the repo root (outside `public/`, so they don't deploy).
  SIORTO's asset shipped with a grey plate + drop shadow baked in; the
  hueless pixels were stripped so it sits flat on the chip's white plate.
  `project-in.png` is the **Envolve-te** (Voluntariado Jovem) mark — the
  programme Project IN runs under. All logos are now present; `LogoChip` still
  falls back to the organisation's initial if a file 404s.

  Re-trimming a new logo: crop to the ink bbox, then pad ~4% of the short
  side. Without the pad, glyphs kiss the chip edge.
- `public/docs/Beatriz_Nascimento_CV.pdf` — linked from the hero

Filenames with accented characters must be percent-encoded in `href`s.

## Open items

- Nobody has viewed the site in a real browser yet — the logos were checked by
  rendering them at chip size and the palette by computing contrast ratios.
  Worth an eyeball pass in both themes and both languages.
- The Project IN card shows the **Envolve-te** logo while the entry is
  labelled "Project IN" (the CV's wording). Confirm which name should show.
- The "Now" entry in `CAREER` (`src/components/Career.jsx`) reads "Back to
  studying" — wording drafted from a loose instruction ("back to studying or
  something"), not supplied verbatim. Worth confirming.
- The **Ortopedia Super Ajudas** entry in `src/data/experience.js` has
  placeholder `detail` copy and a single generic tag — it isn't on the CV, so
  there were no bullet points to draw from. Ask before inventing any.
