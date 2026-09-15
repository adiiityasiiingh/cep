# IIT Kharagpur OCN — Outreach Course Network

Static website for the **Platinum Jubilee Outreach Course Network (OCN)** of the
Indian Institute of Technology Kharagpur — the Institute's Board-approved
initiative for extending credit-bearing academic programmes beyond its campus,
governed through the Office of the Dean (Outreach).

The site presents all **23 credit-bearing Micro-Specialisations across 8 themes**,
with the full course stack, L-T-P split, credits, contact hours and prerequisites
for each.

## Running it

There is no build step and no dependencies. Open `index.html`, or serve the
folder:

```sh
python3 -m http.server 8000
```

Deploys as-is to GitHub Pages, Netlify, Vercel, S3 or any static host.

## Structure

```
index.html            Home
about.html            About the Network, the construct, contributing units
programmes.html       Full catalogue with search and filtering
ms-<slug>.html        One page per Micro-Specialisation (23 pages)
admissions.html       Enrolment route, enquiry form, FAQ
partners.html         The three-layer model, partner colleges, brand licence
contact.html          Office of the Dean (Outreach)
sitemap.xml           All 29 pages
robots.txt

assets/css/style.css          Institute theme — all design tokens live at the top
assets/js/catalogue.js        Every programme. Single source of truth.
assets/js/catalogue-filter.js Catalogue search and filtering
assets/js/site.js             Navigation, accordions, text sizing, reveal
assets/img/                   Crest and lockup — see assets/img/README.md
```

## Editing the catalogue

`assets/js/catalogue.js` is the only place programme data lives. Each entry:

```js
{
  slug: 'url-name',            // becomes ms-url-name.html
  code: 'OCN-XXX-00',
  title: 'Programme title',
  theme: 'ai',                 // key from OCN_THEMES
  unit: 'Department of ...',
  credits: 12,
  courseCount: '4',            // free text: '4 of 8', '2 courses + capstone'
  contactHours: '144',
  prereq: 'None',
  summary: 'Prose description.',
  courses: [ { name, ltp, credits, core } ],
  note: 'Optional rule about electives or completion.',
  tags: ['Capstone', 'Laboratory']
}
```

The catalogue page and the home page read this file directly in the browser.
The per-programme pages are static HTML generated from the same data, so after
changing a programme's details regenerate them (see *Regenerating pages* below)
or hand-edit the matching `ms-<slug>.html`.

## Regenerating pages

The 23 programme pages and the shared header and footer were generated from
`assets/js/catalogue.js` so they could not drift apart. The generator scripts are
not committed — the HTML is the deliverable and is meant to be edited directly.
If you prefer to regenerate rather than hand-edit, the pages follow one template:
banner, overview, course stack table, delivery and assessment, credentials,
at-a-glance sidebar, related programmes.

## Accessibility

Skip link, one `<h1>` per page, landmark regions, visible focus rings, an A-/A/A+
text size control that persists per browser, `aria-expanded` and `aria-controls`
on every accordion and the mobile menu, `aria-current` on the active nav item,
`aria-live` on the filter result count, and full keyboard operation. Scroll
reveal is enhancement only — content is visible when JavaScript is off, and the
catalogue is complete in the HTML without it. `prefers-reduced-motion` is
honoured. A print stylesheet is included.

## Before going live

- [ ] Replace the stand-in crest and lockup with official artwork — see `assets/img/README.md`
- [ ] Confirm the OCN contact points with the Office of the Dean (Outreach); the
      telephone, fax and email on `contact.html` are carried from the Institute's
      Continuing Education listings and are flagged on the page for verification
- [ ] Point the enquiry form at a real endpoint (`initForm` in `assets/js/site.js`)
      and add server-side validation, spam protection and a privacy notice
- [ ] Set the production domain in `sitemap.xml` and `robots.txt`
- [ ] Add the official disclosure and privacy pages, and confirm the brand-licence
      wording on `partners.html` with the Institute
- [ ] Confirm the course stack for *Modern Methods in Thermal-Fluid Sciences and
      Engineering*, which the catalogue records as being finalised

## Source

Programme data is transcribed from *IIT Kharagpur OCN Micro-Specialisations*,
July 2026. Programme names, credits, course stacks, faculty allocation, semester
scheduling and availability are indicative and subject to academic finalisation
by the respective departments.

Academic authority, curriculum, evaluation and certification rest with IIT
Kharagpur. ProofSlate is the designated orchestration and governance partner.
