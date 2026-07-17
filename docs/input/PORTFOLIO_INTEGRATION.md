# Portfolio integration guide

**For the personal site:** `https://daniel-suarez.desitiondev.com`  
**Main product hub:** `https://desitiondev.com`

This document tells you exactly what to change in the **portfolio project** so both sites reinforce each other (entity SEO, first-party links, clear brand split).

The main landing (`main-landing`) is already updated:

- Public email: **`info@desitiondev.com`** (aliases like `daniels@` / `hello@` can forward here)
- Footer + About: LinkedIn, GitHub, personal site with `rel="me"`
- About: short “proof of shipping” (45k+ users) without consulting CTA
- JSON-LD: Organization + Person + `sameAs`

---

## 1. Brand split (do not mix)

| Site | Job | Primary CTA |
|------|-----|-------------|
| **desitiondev.com** | Product hub (apps, news) | See products / notify / Play |
| **daniel-suarez.desitiondev.com** | You as engineer / founder | See work · optional consulting |

**Rules for the portfolio**

- OK: consulting, resume, deep tech posts, Aloharmony case study.
- Always link to DesitionDev for **products / studio**, not only for email.
- Do **not** pretend DesitionDev products are “client work.”
- Do **not** remove DesitionDev from your identity — you are the founder.

---

## 2. Must-do links (backlinks / entity)

### A. Header or nav (recommended)

Add a permanent item:

```
DesitionDev  →  https://desitiondev.com/en/
```

Spanish UI of portfolio (if any):

```
DesitionDev  →  https://desitiondev.com/es/
```

### B. Footer (required)

Include **all** of:

| Label | URL | Attributes |
|--------|-----|------------|
| DesitionDev | `https://desitiondev.com/en/` | `rel="me"` |
| Products | `https://desitiondev.com/en/products/` | — |
| Labs | `https://desitiondev.com/en/labs/` | optional, quieter |
| GitHub | `https://github.com/dinels12` | `rel="me"` |
| LinkedIn | `https://linkedin.com/in/dinels` | `rel="me"` |
| Email | `mailto:info@desitiondev.com` | — |

Example HTML:

```html
<a href="https://desitiondev.com/en/" rel="me">DesitionDev</a>
<a href="https://github.com/dinels12" rel="me" target="_blank" rel="me noopener noreferrer">GitHub</a>
<a href="https://linkedin.com/in/dinels" rel="me noopener noreferrer" target="_blank">LinkedIn</a>
<a href="mailto:info@desitiondev.com">info@desitiondev.com</a>
```

> Note: if you use multiple `rel` values, combine: `rel="me noopener noreferrer"`.

### C. About / Home “Studio” blurb (required)

Add a short block (EN example):

```text
I also build my own products under DesitionDev — the public home of apps from DesitionLabs.

→ desitiondev.com
```

ES example:

```text
También construyo mis propios productos en DesitionDev — la casa pública de las apps de DesitionLabs.

→ desitiondev.com/es/
```

### D. Contact section

| Field | Value |
|--------|--------|
| Public email | **`info@desitiondev.com`** |
| Aliases | `daniels@…`, `hello@…` etc. may still exist as **forwards** to `info@` |
| Location | Buenos Aires, Argentina · UTC-3 |

Update any hardcoded `daniels@desitiondev.com` on the portfolio to **`info@desitiondev.com`** for public display (aliases still work if DNS/email is set that way).

---

## 3. JSON-LD on the portfolio (recommended)

On the personal site layout / homepage, publish something like:

```json
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Daniel Suarez",
  "url": "https://daniel-suarez.desitiondev.com",
  "email": "info@desitiondev.com",
  "jobTitle": "Founder & Full-Stack Engineer",
  "worksFor": {
    "@type": "Organization",
    "name": "Desition Labs",
    "alternateName": "DesitionDev",
    "url": "https://desitiondev.com"
  },
  "sameAs": [
    "https://desitiondev.com",
    "https://github.com/dinels12",
    "https://linkedin.com/in/dinels"
  ]
}
```

This mirrors the Person graph on the hub and strengthens the entity.

---

## 4. Content mapping (what stays where)

| Content from CEO-info | Portfolio | DesitionDev hub |
|------------------------|-----------|-----------------|
| Full CV / experience | Yes | No (only short proof on About) |
| Consulting CTA | Yes (if you want) | No |
| Aloharmony deep dive | Yes | Optional short mention on About only |
| Tech blogs (federation, offline, perf) | Yes (canonical) | Optional republish under `/labs/bitacora` with link back |
| DesitionDev products | Link out | Source of truth |
| Play Store apps (future) | Link to `desitiondev.com/en/p/{slug}/` | Product pages |

**Canonical rule for blog posts:**  
If a post exists on both sites, pick **one** canonical URL (usually the portfolio for career/tech essays). On the other site, either don’t duplicate or use `rel="canonical"` to the primary.

---

## 5. Suggested portfolio UI copy snippets

### Footer line

```text
Founder of DesitionDev · Built by DesitionLabs
```

### Project card (when you list studio work)

```text
DesitionDev (studio)
Independent product hub — apps by DesitionLabs.
→ https://desitiondev.com/en/products/
```

### Do not list (on portfolio as “client products”)

- Focus / Pocket / other DesitionDev apps as third-party client work  
  → list them as **own products** with link to the hub.

---

## 6. DNS / hosting checklist

| Item | Notes |
|------|--------|
| `desitiondev.com` | Main hub (this repo → Cloudflare Pages) |
| `daniel-suarez.desitiondev.com` | Portfolio CNAME → portfolio host |
| SSL | Both hosts HTTPS |
| Email | Public: `info@desitiondev.com`; aliases forward to same inbox |
| Sitemap | Both sites publish their own sitemap |
| robots | Allow both; no accidental `noindex` on production |

---

## 7. Checklist to mark done on the portfolio repo

- [x] Public email displays **`info@desitiondev.com`**
- [x] Nav or header link to `https://desitiondev.com/en/`
- [x] Footer links: DesitionDev + GitHub + LinkedIn with `rel="me"`
- [x] About/home mentions DesitionDev + DesitionLabs in one sentence
- [x] Person JSON-LD with `sameAs` including desitiondev.com
- [x] Consulting (if kept) only on portfolio, not framed as DesitionDev services
- [ ] Any product screenshots of studio apps deep-link to `/en/p/{slug}/`
- [ ] Build + deploy portfolio after changes

---

## 8. What the main hub already does (for your reference)

| Item | Status on desitiondev.com |
|------|---------------------------|
| Email `info@desitiondev.com` | Yes (`src/data/site.ts`) |
| Profile URL | `https://daniel-suarez.desitiondev.com` |
| GitHub / LinkedIn | Wired in footer + About |
| `rel="me"` | On profile/GitHub/LinkedIn links |
| Person + Org JSON-LD | Yes |
| Proof of shipping on About | Yes (45k+ without full CV) |
| Consulting CTA on hub | No (by design) |

Config file on hub: `src/data/site.ts`.

---

## 9. Optional later (both sites)

1. Shared OG image style (white canvas + brand blue).  
2. Cross-post teaser: portfolio “Writing” → “Also building in public at desitiondev.com/labs”.  
3. When first app ships: portfolio homepage stat or project card → Play + `/p/{slug}/`.

---

_Keep the portfolio about **you**. Keep the hub about **products**. Link them like two rooms in the same house._
