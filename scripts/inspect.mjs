import { chromium } from "playwright";

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
const errors = [];
page.on("console", (message) => {
  if (message.type() === "error") errors.push(message.text());
});
page.on("pageerror", (error) => errors.push(error.message));

await page.goto("http://localhost:3000", { waitUntil: "networkidle" });
await page.waitForTimeout(3000);

const info = await page.evaluate(() => {
  const portrait = document.querySelector(".hero-portrait");
  const reveal = document.querySelectorAll(".reveal, .reveal-line, .reveal-image");
  const visible = document.querySelectorAll(".is-visible");
  return {
    portraitClass: portrait?.className ?? null,
    portraitRect: portrait?.getBoundingClientRect().toJSON() ?? null,
    portraitClip: portrait ? getComputedStyle(portrait).clipPath : null,
    revealCount: reveal.length,
    visibleCount: visible.length,
    visibleClasses: Array.from(visible).slice(0, 10).map((el) => el.className),
    bodyOverflow: getComputedStyle(document.body).overflow,
    scrollY: window.scrollY,
    imageComplete: document.querySelector(".hero-portrait img")?.complete ?? null,
    imageSrc: document.querySelector(".hero-portrait img")?.currentSrc ?? null,
  };
});

console.log(JSON.stringify({ info, errors }, null, 2));
await browser.close();
