# Repository Guidelines

## Project Structure & Module Organization
The site is a Jekyll build: authored pages live in `_pages`, posts in `_posts`, projects in `_projects`, and changelog-style updates in `_news`. Data-driven content sits under `_data/` and `_bibliography/`, while reusable UI fragments belong to `_includes/` and layouts to `_layouts/`. Styles compile from `_sass/` (extend `_sass/_custom.scss`), scripts go in `_scripts/`, and helper executables belong in `bin/`. Keep static media inside `assets/`. The generated `_site/` folder is disposable—never check it in. Update shared site knobs in `_config.yml` so Docker, GitHub Pages, and local runs stay aligned.

## Build, Test, and Development Commands
Use `bundle install` once per machine, or run `docker compose up` for a fully provisioned toolchain. During edits, start `bundle exec jekyll serve --livereload --drafts` (port 4000 by default). Before committing, mirror CI via `bundle exec jekyll build` or the stricter `bin/cibuild` (sets `JEKYLL_ENV=production` and runs plugin checks). For reproducible containers pull fresh images with `docker compose pull && docker compose up`; the slim stack is `docker compose -f docker-compose-slim.yml up`.

## Coding Style & Naming Conventions
Use two-space indentation across Liquid, HTML, and SCSS. Front matter keys stay lowercase snake_case. Posts, news, and similar content follow `YYYY-MM-DD-title.md`; project slugs use short hyphenated nouns (e.g., `quantum-sensing`). Avoid inline styles or JS inside Markdown—prefer Bootstrap utilities or `_includes/` partials. Normalize formatting before PRs via `npx prettier --write . --plugin=@shopify/prettier-plugin-liquid`.

## Testing Guidelines
All changes must pass `bundle exec jekyll build` with `JEKYLL_ENV=production`. Run `bin/cibuild` whenever navigation, feeds, or scholar integrations are touched. For layout or performance tweaks, spot-check locally with `bundle exec jekyll serve` in a private browser window and archive console logs, screenshots, or Lighthouse reports under `lighthouse_results/`.

## Commit & Pull Request Guidelines
Write short, imperative commit titles (`Add dark-mode toggle`, `Update _config.yml`). Each PR should explain the motivation, show screenshots or GIFs for UI adjustments, link issues with `Fixes #123`, and list verification commands. Keep PR scope focused—separate configuration, style, and content updates to speed up review. Always rebase on `main` after a clean `bundle exec jekyll build` (or `bin/cibuild`) before pushing.

## Security & Configuration Tips
Do not edit `_site/` directly; regenerate instead. Keep secrets out of `_config.yml`—use environment variables or Jekyll defaults files when needed. When adding automation, ensure scripts in `bin/` exit non-zero on failure and document required environment variables inline.
