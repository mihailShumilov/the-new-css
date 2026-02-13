# Contributing to The New CSS

Thanks for your interest in contributing! Here's how to get started.

## Development Setup

```bash
git clone https://github.com/mihailShumilov/the-new-css.git
cd the-new-css
npm install
```

## Commands

```bash
npm run build          # Build dist/ (full, minified, core bundles)
npm run size           # Check gzipped size against 5KB budget
npm test               # Unit tests (vitest)
npm run test:e2e       # E2E tests (Playwright)
npm run dev            # Serve docs site on localhost:3000
```

## Size Budget

The full minified bundle must stay **under 5KB gzipped**. Run `npm run size` before submitting a PR to verify. This is the most important constraint of the project.

## Project Structure

- `src/` — CSS source files (tokens, base, utilities, variants)
- `scripts/` — Build and size-report scripts
- `tests/` — Unit and E2E tests
- `site/` — Documentation site (Next.js)

## How to Contribute

1. Fork the repo and create a branch from `main`
2. Make your changes in `src/`
3. Run `npm run build && npm run size` to ensure the size budget is met
4. Run `npm test` to ensure tests pass
5. Submit a pull request

## Pull Request Guidelines

- Keep PRs focused — one feature or fix per PR
- Add or update tests for any new utilities or behavior changes
- Ensure the size budget is not exceeded
- Follow existing naming conventions (e.g., `bg-*`, `text-*`, `flex-*`)

## Reporting Bugs

Open an issue with:
- A clear description of the problem
- Steps to reproduce
- Expected vs actual behavior
- Browser and OS info if relevant

## Feature Requests

Open an issue describing the use case and proposed utility classes. Keep in mind the 5KB size budget — not every utility can be included.
