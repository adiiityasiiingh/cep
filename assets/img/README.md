# Brand and photography assets

All artwork here is **official** — supplied by ProofSlate and committed to the
repository. The hand-built SVG stand-ins that preceded it have been removed;
they remain in git history if ever needed.

## Logos

| File | Used by | Notes |
|---|---|---|
| `ocn-logo-horizontal-white.png` | masthead, footer | Reversed lockup, for the indigo header. 696×176 |
| `ocn-logo-horizontal.png` | light backgrounds | Indigo lockup on transparent. 912×273 |
| `ocn-logo-stacked.png` | square/social placements | Crest above wordmark, transparent. 482×517 |
| `ocn-logo-stacked-cream.png` | print, cream backgrounds | Stacked lockup on its cream field. 1100×1180 |
| `favicon-32.png` | browser tab | Crest, cropped from the stacked lockup |
| `favicon-180.png` | iOS home screen | Same crest at touch-icon size |

The masthead shows the horizontal lockup at 62px tall (50px on tablet, 42px on
phones), height-driven so the artwork keeps its aspect ratio.

## Photography

| File | Used by | Notes |
|---|---|---|
| `campus-main-gate.jpg` | hero background, interior page banners | Main gate at night. Sits under a heavy scrim so headline text stays well clear of AA contrast |
| `campus-main-building.jpg` | campus band on Home and About | Main Building, palm-lined lawns |

`campus-main-gate.jpg` was supplied as a 1,011 KB PNG. A photograph in a
lossless container is wasteful for a hero image, so it is re-encoded as a
progressive JPEG at the same 1110×703 dimensions — **99 KB**, a ~90% saving. The
original PNG is in git history.

### ⚠ Rights: check before launch

`campus-main-building.jpg` carries a **visible photographer's watermark**
("©H.Bal…") in the bottom-right corner. It has been left untouched — removing or
cropping out a copyright notice is not something to do casually.

Before the site goes live, either clear the licence with the photographer, or
replace the image with one the Institute owns. The `.campus__figure` markup takes
any replacement at the same 960×592 ratio with no CSS change.

`campus-main-gate.jpg` shows no watermark, but its provenance should be
confirmed too.

## Brand colours

Sampled from the official lockup and defined as custom properties at the top of
`assets/css/style.css`:

- Indigo (primary) `#2b3a8f` — the crest and wordmark blue
- Deep indigo `#1d2762`, `#141b49`, `#0d1233` — masthead, navigation, footer
- Gold `#c9a227` — accents, calls to action, the rule under the navigation
- Taupe `#8a8069` — the letterspaced "OUTREACH COURSE NETWORK" subtitle
