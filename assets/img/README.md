# Brand assets

The four SVG files in this folder are **hand-built stand-ins** for the official
IIT Kharagpur OCN artwork. They were drawn from the supplied logo because the
source files could not be retrieved in the build environment.

Replace them with the official artwork before the site goes live. Keep the
filenames exactly as they are and every page picks the new files up with no
markup change.

| File | Used by | Notes |
|---|---|---|
| `iitkgp-crest.svg` | favicon, light backgrounds | Crest only, indigo on transparent |
| `iitkgp-crest-white.svg` | masthead, footer | Crest reversed for the indigo header |
| `iitkgp-ocn-logo.svg` | light backgrounds | Full horizontal lockup |
| `iitkgp-ocn-logo-white.svg` | dark backgrounds | Full lockup reversed |

The masthead renders the crest beside live HTML text rather than the full
lockup image, so the institute name stays selectable, translatable and crisp at
every size. To use the full lockup image there instead, swap the `<img>` inside
`.lockup__crest` for `iitkgp-ocn-logo-white.svg` and remove the adjacent
`.lockup__text` block in the page chrome.

## Brand colours

Taken from the supplied logo and defined as custom properties in
`assets/css/style.css`:

- Indigo (primary) `#2b3a8f` — the crest and wordmark blue
- Deep indigo `#1d2762`, `#141b49`, `#0d1233` — masthead, navigation, footer
- Gold `#c9a227` — accents, calls to action, the rule under the navigation
- Taupe `#8a8069` — the letterspaced "OUTREACH COURSE NETWORK" subtitle
