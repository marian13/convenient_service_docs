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

1. Create `src/doc_pages/your-doc-page.md`.

That's it - the sitemap is auto-generated from `src/doc_pages/**/*.md` and `src/custom_pages/**/index.html*`.

## Adding a custom page

1. Create `src/custom_pages/your-page/index.html.erb`.

The page is served at `/your-page.html` and included in the sitemap automatically. The special case `home` is served at `/`.

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
3. Static assets are copied into `dist/`: `src/docs`, `src/components`, `src/global`, `src/utils`, `src/public`, and partial CSS files from `src/views/partials/`.
4. The sitemap is fetched from the running dev server (`/sitemap.xml`) - it is auto-generated from `src/doc_pages/**/*.md` and `src/custom_pages/**/index.html*`.
5. Every URL in the sitemap is processed in parallel - one thread per URL, each with its own headless Chrome (Ferrum) instance.
6. Each browser has `window.__build__ = true` injected via `Page.addScriptToEvaluateOnNewDocument` before navigation, so client JS knows it is running inside the build.
7. Once all React islands settle, `window.__ready__` is set and the browser captures `document.documentElement.outerHTML` as the static HTML file (with up to 5 seconds timeout).
8. The dev server is shut down.

### How are URLs resolved?

For a doc page like `/docs/test.html`:

1. `src/doc_pages/test.md`
2. `src/doc_pages/test.md.erb`
3. `src/doc_pages/test/index.md`
4. `src/doc_pages/test/index.md.erb`

For a custom page like `/your-page.html`:

1. `src/custom_pages/your-page/index.html`
2. `src/custom_pages/your-page/index.html.erb`

---

Copyright (c) 2022-2026 Marian Kostyk.
