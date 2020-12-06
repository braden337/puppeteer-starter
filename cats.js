const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto('https://duckduckgo.com');

  await page.keyboard.type("cats");
  await page.keyboard.press("Enter");

  await page.waitForNavigation({waitUntil: "networkidle2"});

  await page.click("[data-zci-link='images']");

  await page.waitForTimeout(1000);

  await page.screenshot({ path: 'cats.png' });
  await browser.close();
})();