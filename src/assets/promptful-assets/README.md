# Promptful – asset hand-off

All icons, images and logos from the **AI Gender Gap Learning Website** (Figma Make project), renamed and sorted for dev review.

Open `asset-review-sheet.html` in a browser for a visual overview. `rename-map.csv` maps every original hashed file (`public/assets/xxxxx`) to its new name.

## Folders

| Folder | What's in it |
|---|---|
| `logos/` | Vector logos (SVG). Wordmark outlined to paths in Lora, the site's heading font. |
| `logos/original-png/` | The 5 original logo PNGs, for reference. |
| `icons/in-use/` | The 8 icons the current code actually uses. |
| `icons/library/` | 68 icons exported from the Figma design but not referenced in code. Named `icon-name-size-color.svg`. |
| `images/hero`, `editorial`, `team`, `mentors` | The 14 photos the site uses. |
| `images/unused/` | Two 92×92 avatar crops not referenced in code. |

## Logos

| File | Use |
|---|---|
| `promptful-logo.svg` | Header. Replaces `promptful-logo.png`. |
| `promptful-logo-reversed.svg` | Footer / dark backgrounds (transparent). Replaces `promptful-logo-footer-reversed.png`. |
| `promptful-logo-on-navy.svg` | Logo with navy background baked in. |
| `promptful-logo-glossy.svg` | Glossy gradient variant. |
| `promptful-emblem.svg` / `-reversed.svg` | Mark only (favicon, avatar, app icon). |

## Assets in use

| New path | Original | Where |
|---|---|---|
| `icons/in-use/career-healthcare.svg` | `d379b.svg` | Career areas grid (Roles page) + Pathfinder career options (data.ts) |
| `icons/in-use/career-ux-design.svg` | `2da19.svg` | Career areas grid + Pathfinder career options |
| `icons/in-use/career-product-strategy.svg` | `a69f0.svg` | Career areas grid + Pathfinder career options |
| `icons/in-use/career-education.svg` | `041a7.svg` | Career areas grid + Pathfinder career options |
| `icons/in-use/career-more-areas.svg` | `a0722.svg` | Career areas grid – “More Career Areas” tile |
| `icons/in-use/benefit-personalized-lessons.svg` | `27d70.svg` | Home – benefits row |
| `icons/in-use/benefit-real-world-application.svg` | `6425d.svg` | Home – benefits row |
| `icons/in-use/benefit-supportive-communities.svg` | `01a0e.svg` | Home – benefits row |
| `images/hero/hero-home-woman-laptop.png` | `c859a.png` | Home hero + Design System image card |
| `images/hero/hero-about-two-women-laptop.png` | `79e42.png` | About hero + Design System asset list |
| `images/hero/hero-community-woman-laptop.png` | `87a94.png` | Community hero |
| `images/hero/hero-mentors-group-workshop.png` | `afe03.png` | Mentors/community section hero + Design System asset list |
| `images/editorial/about-story-workshop.png` | `e23c3.png` | About – story section |
| `images/editorial/roles-keep-going-collaboration.png` | `102fc.png` | Roles – “Keep going” section + Design System asset list |
| `images/team/team-leila-morgan.png` | `37de2.png` | About – team (Founder & CEO) |
| `images/team/team-nia-okafor.png` | `c98d1.png` | About – team (Chief Learning Officer) |
| `images/team/team-sofia-alvarez.png` | `ff2aa.png` | About – team (Head of Product) |
| `images/team/team-mai-tran.png` | `02e8c.png` | About – team (Community Lead) |
| `images/mentors/mentor-maya-chen.png` | `551df.png` | Mentors grid + Design System profile card |
| `images/mentors/mentor-amara-yusuf.png` | `4cffb.png` | Mentors grid |
| `images/mentors/mentor-elena-romero.png` | `4ca25.png` | Mentors grid |
| `images/mentors/mentor-jordan-brooks.png` | `8e5e8.png` | Mentors grid |
| `logos/promptful-logo.svg` | `promptful-logo.png` | Header |
| `logos/promptful-logo-reversed.svg` | `promptful-logo-footer-reversed.png` | Footer |

## Removed duplicates

These were byte-identical copies of another icon and were dropped:

- `15832.svg` → duplicate of career-education.svg
- `29711.svg` → duplicate of career-education.svg
- `2b5be.svg` → duplicate of career-product-strategy.svg
- `2fcef.svg` → duplicate of career-more-areas.svg
- `30b8b.svg` → duplicate of career-ux-design.svg
- `67d1e.svg` → duplicate of career-more-areas.svg
- `7ac51.svg` → duplicate of career-healthcare.svg
- `9d267.svg` → duplicate of career-ux-design.svg
- `c373a.svg` → duplicate of career-healthcare.svg
- `e25ef.svg` → duplicate of career-ux-design.svg
- `e7245.svg` → duplicate of career-product-strategy.svg
- `ea971.svg` → duplicate of career-healthcare.svg

## Notes for review

- **Swap paths in code:** asset references live in `src/App.tsx` (`const A = "/assets/"`) and `src/data.ts` (`careerAreas[].icon`). Update file names using `rename-map.csv`.
- **Icons are Lucide.** Most library icons match Lucide names (arrow-right, sparkles, target…). Using `lucide-react` with `currentColor` may be simpler than shipping 68 colored SVG variants.
- **SVGs were lightly cleaned:** Figma's `preserveAspectRatio="none"`, `overflow="visible"` and `style="display:block"` were removed. Paths and colors are unchanged.
- **Photos are large** (1024–1200 px PNG, ~100–190 KB each). Consider WebP/AVIF and responsive sizes before launch.
- **Logo wordmark:** the SVG uses Lora, so letter shapes differ slightly from the original PNG. The reversed SVG uses a cream leaf so it stays visible on navy (the original PNG's leaf is navy).
- **Unused logo PNGs:** `promptful-emblem.png`, `promptful-logo-footer-blue.png` and `promptful-logo-footer-light.png` aren't referenced in code.
