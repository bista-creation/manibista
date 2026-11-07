import { chromium } from "playwright";

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
await page.goto("http://localhost:3000", { waitUntil: "networkidle" });
await page.waitForTimeout(2800);

const sections = await page.evaluate(() =>
  Array.from(document.querySelectorAll("section")).map((section, index) => ({
    index,
    top: section.offsetTop,
    height: section.offsetHeight,
    className: section.className,
  })),
);

console.log(JSON.stringify(sections, null, 2));

for (const section of sections) {
  await page.evaluate((top) => window.scrollTo(0, top), section.top);
  await page.waitForTimeout(1400);
  await page.screenshot({
    path: `C:/Users/bista/AppData/Local/Temp/opencode/section-${section.index}.png`,
  });
}

await browser.close();
