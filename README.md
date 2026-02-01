# UI Playground — Playwright Test Automation

A small UI test automation project built with **Playwright Test**. It uses a simple Page Object pattern and generates a **Playwright HTML report** after runs.

## Tech stack

- Node.js + npm
- [`@playwright/test`](https://playwright.dev/docs/test-intro)
- TypeScript
- Optional tooling included in dependencies:
  - `allure-playwright` (Allure integration if you wire it as a reporter)
  - `winston` (logging)

## Project structure

- `tests/` — test specs
- `src/pages/` — page objects (locators + page actions)
- `src/utils/` — helper utilities (reporting helpers, etc.)
- `playwright.config.ts` — Playwright Test configuration
- `playwright-report/` — generated HTML report output (after a run)
- `test-results/` — run artifacts (screenshots/videos/traces, depending on config)

## Prerequisites

- Node.js (LTS recommended)
- npm

## Installation
```bash
npm install npx playwright install
```

## Configuration (env)

This repo includes an `.env.example` you can copy.
```bash
cp .env.example .env
```

Typical variables:

- `ENVIRONMENT` — logical environment name (example: `Test`)
- `URL` — base URL under test (example: `http://uitestingplayground.com/`)

Note: if you want Playwright to load `.env` automatically, you’ll need to enable dotenv loading in `playwright.config.ts` (it’s currently commented out).

## Run tests

### Run all tests

```bash
npm run web:test
```

### Run with Playwright CLI options
```bash
npx playwright test --project=chromium npx playwright test --headed npx playwright test --debug npx playwright test tests/dynamic-id.spec.ts
```

## Reports & artifacts

### HTML report (built-in)

This project is configured to use the **HTML reporter**.

After a test run, open the report with:

```bash 
npx playwright show-report

```

### Screenshots, video, traces

The Playwright config is set to collect helpful artifacts (especially on failures/retries):

- `screenshot: "on"`
- `video: "on"`
- `trace: "on-first-retry"`

Artifacts are saved under `test-results/`.

### Allure (optional)

`allure-playwright` is installed, but you must configure Playwright to use the Allure reporter if you want Allure results.

If you decide to enable it, you’ll typically:
1. Add Allure to the reporter list in `playwright.config.ts`
2. Run tests to generate Allure results
3. Generate/open the Allure report via the Allure CLI

(Keeping it optional avoids forcing extra setup for everyone.)

## CI

A GitHub Actions workflow is present under `.github/workflows/` to run Playwright tests in CI.

## Troubleshooting

- **Browsers not installed / tests fail immediately**  
  Run:
  ```bash
  npx playwright install
  ```

- **Flaky UI timing issues**  
  Prefer Playwright’s auto-waits and assertions (`toBeVisible`, `toHaveText`, etc.) over hard timeouts.

- **Need to see what happened**  
  Use:
  ```bash
  npx playwright test --headed
  npx playwright test --debug
  ```
  And open the trace (if produced) from the HTML report.

## Notes / conventions

- Page Objects live in `src/pages` and should:
    - expose meaningful actions (e.g., `navigateTo...`, `click...`)
    - keep locators encapsulated
- Tests in `tests/` should focus on behavior/assertions rather than UI mechanics.

## License

ISC (see `package.json`).