# Convenient Service — Comprehensive User Docs

Documentation site for [Convenient Service](https://github.com/marian13/convenient_service).

## Getting started

To see a list of all available tasks, run:

```bash
task --list-all
```

Install dependencies.

```bash
task install
```

Start a dev server.

```bash
task start:dev
```

Open `http://localhost:8100`.

## Adding a doc page

1. Create `docs/your-doc-page.md`.

2. Add its URL to `sitemap.xml`. For example:

```xml
<url><loc>https://userdocs.convenientservice.org/docs/your-doc-page.md</loc></url>
<url><loc>https://userdocs.convenientservice.org/docs/your-doc-page.html</loc></url>
```

## Adding a regular page

1. Create `pages/your-regular-page.md`.

2. Add its URL to `sitemap.xml`. For example:

```xml
<url><loc>https://userdocs.convenientservice.org/pages/your-regular-page.md</loc></url>
<url><loc>https://userdocs.convenientservice.org/pages/your-regular-page.html</loc></url>
```

## Building

To build a prod ready `dist` folder, use:

```bash
task build
```

A local static server (port 8101) to verify `dist` content is also available.

```bash
task start:build
```

### How does the build work?

1. `dist/` is wiped clean.
2. A temporary Sinatra dev server starts on a free port and passes a healthcheck before proceeding.
3. Static assets are copied into `dist/`: `src/docs`, `src/components`, `src/global`, `src/utils`, `src/public`, partial CSS files from `src/views/partials/`, and `src/sitemap.xml`.
4. Every URL in `src/sitemap.xml` is processed in parallel — one thread per URL, each with its own headless Chrome (Ferrum) instance.
5. Each browser has `window.__build__ = true` injected via `Page.addScriptToEvaluateOnNewDocument` before navigation, so client JS knows it is running inside the build.
6. Once all React islands settle, `window.__ready__` is set and the browser captures `document.documentElement.outerHTML` as the static HTML file (with up to 5 seconds timeout).
7. The dev server is shut down.

### How are URLs resolved?

The dev server resolves regular page URLs in the following order for a request like `/pages/home.html`:

1. `src/pages/home.html`
2. `src/pages/home.html.erb`
3. `src/pages/home/index.html`
4. `src/pages/home/index.html.erb`

For doc page like `/docs/test.html`:

1. `src/docs/test.md`
2. `src/docs/test.md.erb`
3. `src/docs/test/index.md`
4. `src/docs/test/index.md.erb`

The sitemap always uses explicit `.html` and `.md` paths (`/pages/home.html`, `/docs/test.html`, `/docs/test.md`, etc.). The server picks whichever file exists first from the list above.

---

© 2026 Marian Kostyk
