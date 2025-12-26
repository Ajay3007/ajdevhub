const fs = require('fs');
const path = require('path');
const { chromium, devices } = require('playwright');

const OUT = path.join(__dirname, 'screenshots');
if (!fs.existsSync(OUT)) fs.mkdirSync(OUT, { recursive: true });

const pages = ['/', '/learning/', '/projects/', '/blogs/'];
const base = 'https://ajay3007.github.io/ajdevhub';

(async () => {
  const browser = await chromium.launch();

  // Desktop
  const context = await browser.newContext({ viewport: { width: 1280, height: 800 } });
  const page = await context.newPage();
  for (const p of pages) {
    await page.goto(base + p, { waitUntil: 'networkidle' });
    await page.screenshot({ path: path.join(OUT, `desktop${p === '/' ? 'home' : p.replace(/\//g, '')}.png`), fullPage: true });
  }
  await context.close();

  // Mobile (iPhone 12-like)
  const iPhone = devices['iPhone 12'] || devices['iPhone 12 Pro'];
  const mctx = await browser.newContext({ ...iPhone });
  const mpage = await mctx.newPage();
  for (const p of pages) {
    await mpage.goto(base + p, { waitUntil: 'networkidle' });
    await mpage.screenshot({ path: path.join(OUT, `mobile${p === '/' ? 'home' : p.replace(/\//g, '')}.png`) });
  }
  await mctx.close();

  // Dark mode screenshots (desktop)
  const dctx = await browser.newContext({ viewport: { width: 1280, height: 800 } });
  const dpage = await dctx.newPage();
  for (const p of pages) {
    await dpage.goto(base + p, { waitUntil: 'networkidle' });
    // toggle dark by setting data-theme attribute
    await dpage.evaluate(() => document.documentElement.setAttribute('data-theme', 'dark'));
    await dpage.screenshot({ path: path.join(OUT, `dark${p === '/' ? 'home' : p.replace(/\//g, '')}.png`), fullPage: true });
  }
  await dctx.close();

  await browser.close();
  console.log('Screenshots saved to', OUT);
})();
