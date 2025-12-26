Visual tests for Ajay's Dev Hub

Requirements
- Node.js 16+ (or compatible)
- Internet access to load the deployed site at https://ajay3007.github.io/ajdevhub/

Quick start
1. cd tools/visual-tests
2. npm install
3. npx playwright install chromium

Run screenshots
- npm run screenshot
  Saves screenshots to tools/visual-tests/screenshots/

Run accessibility audit
- npm run a11y
  Saves axe-core JSON reports to tools/visual-tests/reports/

Notes
- The screenshot script captures desktop (1280x800), mobile (iPhone 12) and a dark-mode desktop snapshot.
- The a11y script executes axe-core on each page and writes JSON output for analysis.
- If you want, I can add a small script to convert the axe JSON into a human-readable HTML report.
