const fs = require('fs');
const path = require('path');
const { chromium } = require('playwright');
const axeSource = require('axe-core').source;

const OUT = path.join(__dirname, 'reports');
if (!fs.existsSync(OUT)) fs.mkdirSync(OUT, { recursive: true });

const pages = ['/', '/learning/', '/projects/', '/blogs/'];
const base = 'https://ajay3007.github.io/ajdevhub';

(async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext({ viewport: { width: 1280, height: 800 } });
  const page = await context.newPage();
  const summary = [];

  for (const p of pages) {
    const url = base + p;
    await page.goto(url, { waitUntil: 'networkidle' });
    await page.addScriptTag({ content: axeSource });
    const results = await page.evaluate(async () => await axe.run());
    const name = p === '/' ? 'home' : p.replace(/\//g, '');
    const outFile = path.join(OUT, `${name}.json`);
    fs.writeFileSync(outFile, JSON.stringify(results, null, 2));
    summary.push({ page: url, violations: results.violations.length });
    console.log(`Checked ${url}: ${results.violations.length} violations`);
  }

  fs.writeFileSync(path.join(OUT, 'summary.json'), JSON.stringify(summary, null, 2));
  await browser.close();
  console.log('A11y reports saved to', OUT);
})();
