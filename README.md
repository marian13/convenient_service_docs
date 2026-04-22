# Convenient Service — Comprehensive User Docs

Documentation site for [Convenient Service](https://github.com/marian13/convenient_service).

## Stack

- **Sinatra** — dev server
- **Ferrum** — headless Chrome for static site generation
- **React** — UI components, loaded via esm.sh CDN (no bundler)
- **marked** — Markdown parsing, runs in the browser

## Getting started

```bash
task install
task start:dev
```

Open `http://localhost:8100`.

## Adding a page

1. Create `docs/your-page.md`
2. Add its URL to `sitemap.xml`

## Building

```bash
task build       # generates dist/
task start:build # builds and serves dist/ on port 8101
```

### How the build works

1. `dist/` is wiped clean.
2. A temporary Sinatra dev server starts on a free port.
3. Every URL in `sitemap.xml` is processed in parallel threads — one thread per URL, each with its own headless Chrome (Ferrum) instance.
4. Each browser has `window.__build__ = true` injected via `Page.addScriptToEvaluateOnNewDocument` before navigation, so the client JS knows it is running inside the build.
5. When `renderIsland` runs in the browser it checks `window.__build__`. Non-static islands (e.g. Header) are skipped — they depend on user sessionStorage and must not be captured. Static islands (marked `data-static`, e.g. Markdown) are rendered and their output is captured.
6. After the page is idle, the browser waits 5 seconds for async rendering to finish, then captures `document.documentElement.outerHTML` as the static HTML file.
7. `src/`, `pages/`, `public/`, and `sitemap.xml` are copied into `dist/` as-is.
8. The dev server is shut down.

### Island rendering strategy (client)

| Condition | Behaviour |
|---|---|
| Pre-rendered + `data-static` | Skip — static HTML stays as-is, React never mounts |
| Pre-rendered + `data-force` | `createRoot` — always re-renders from scratch |
| Pre-rendered (default) | `hydrateRoot` — React attaches to existing DOM |
| Not pre-rendered | `createRoot` — React renders from scratch |

---

© 2026 Marian Kostyk
