const puppeteer = require('puppeteer');
const fs = require('fs');

(async () => {
  try {
    const browser = await puppeteer.launch({ headless: 'new' });
    const page = await browser.newPage();
    await page.goto('https://performancealignment.lovable.app/', { waitUntil: 'networkidle0' });
    const html = await page.content();
    fs.writeFileSync('lovable_rendered.html', html);
    await browser.close();
    console.log("Scrape successful.");
  } catch(e) {
    console.error(e);
  }
})();
