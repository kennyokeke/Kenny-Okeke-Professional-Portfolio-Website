import puppeteer from './node_modules/puppeteer/lib/esm/puppeteer/puppeteer.js';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const SCREENSHOT_DIR = path.join(__dirname, 'temporary screenshots');

const pages = [
  { name: 'home', url: 'http://localhost:3000' },
  { name: 'about', url: 'http://localhost:3000/about' },
  { name: 'projects', url: 'http://localhost:3000/projects' },
  { name: 'experience', url: 'http://localhost:3000/experience' },
  { name: 'resume', url: 'http://localhost:3000/resume' },
];

const viewports = [
  { name: 'desktop', width: 1440, height: 900 },
  { name: 'mobile', width: 390, height: 844 },
];

async function takeScreenshot(page, browser, url, filename, viewport) {
  await page.setViewport({ width: viewport.width, height: viewport.height, deviceScaleFactor: 2 });
  await page.goto(url, { waitUntil: 'networkidle2', timeout: 30000 });
  // Wait a bit for animations to settle
  await new Promise(r => setTimeout(r, 1500));

  const filePath = path.join(SCREENSHOT_DIR, filename);
  await page.screenshot({ path: filePath, fullPage: true });
  console.log(`Saved: ${filename}`);
  return filePath;
}

async function main() {
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });

  try {
    const page = await browser.newPage();

    for (const pageInfo of pages) {
      for (const viewport of viewports) {
        const filename = `review-${pageInfo.name}-${viewport.name}.png`;
        await takeScreenshot(page, browser, pageInfo.url, filename, viewport);
      }
    }
  } finally {
    await browser.close();
  }

  console.log('\nAll screenshots complete!');
}

main().catch(console.error);
