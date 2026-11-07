import sharp from "sharp";
import { mkdir, copyFile } from "node:fs/promises";
import path from "node:path";

const root = process.cwd();
const inputDir = path.join(root, "images");
const outputDir = path.join(root, "public", "images");
const ogDir = path.join(root, "public", "og");
const appDir = path.join(root, "app");

await mkdir(outputDir, { recursive: true });
await mkdir(ogDir, { recursive: true });
await mkdir(appDir, { recursive: true });

const images = [
  {
    input: "image-4.png",
    output: "chef-mani-bista-himalaya.jpg",
    width: 1100,
    quality: 86,
  },
  {
    input: "mani-bista.jpg",
    output: "chef-mani-bista-kathmandu-temple.jpg",
    width: 1800,
    quality: 84,
  },
  {
    input: "FB_IMG_1791988077860.jpg",
    output: "chef-mani-bista-portrait.jpg",
    width: 1200,
    quality: 86,
  },
  {
    input: "IMG_20260210_141909.jpg",
    output: "chef-mani-bista-kathmandu-overlook.jpg",
    width: 1800,
    quality: 84,
  },
  {
    input: "IMG_20260318_162857_edit_417656774187757.jpg",
    output: "chef-mani-bista-modern-kathmandu.jpg",
    width: 1400,
    quality: 84,
  },
  {
    input: "IMG_20260506_140903_edit_10210591021363.jpg",
    output: "chef-mani-bista-at-work.jpg",
    width: 1400,
    quality: 84,
  },
  {
    input: "FB_IMG_1736361690569.jpg",
    output: "chef-mani-bista-signature-plate-01.jpg",
    width: 1600,
    quality: 86,
  },
  {
    input: "FB_IMG_1733942560517.jpg",
    output: "chef-mani-bista-signature-plate-02.jpg",
    width: 1400,
    quality: 86,
  },
  {
    input: "FB_IMG_1604122846702.jpg",
    output: "chef-mani-bista-signature-plate-03.jpg",
    width: 1200,
    quality: 86,
  },
  {
    input: "chicken-breast.jpg",
    output: "chef-mani-bista-signature-plate-04.jpg",
    width: 1000,
    quality: 86,
  },
];

for (const item of images) {
  await sharp(path.join(inputDir, item.input))
    .rotate()
    .resize({ width: item.width, withoutEnlargement: true })
    .jpeg({ quality: item.quality, mozjpeg: true })
    .toFile(path.join(outputDir, item.output));
  console.log(`optimized ${item.output}`);
}

// Split the editorial triptych into three vertical chapters.
const triptychPath = path.join(inputDir, "mani.jpg");
const triptychMeta = await sharp(triptychPath).metadata();
const panelWidth = Math.floor((triptychMeta.width ?? 2048) / 3);
const chapters = ["city", "mountain", "candlelight"];

for (let index = 0; index < chapters.length; index += 1) {
  const left = index * panelWidth + 2;
  const width = panelWidth - 4;
  await sharp(triptychPath)
    .extract({ left, top: 0, width, height: triptychMeta.height ?? 1143 })
    .resize({ width: 800, withoutEnlargement: true })
    .jpeg({ quality: 86, mozjpeg: true })
    .toFile(
      path.join(
        outputDir,
        `chef-mani-bista-chapter-${chapters[index]}.jpg`,
      ),
    );
  console.log(`optimized chapter ${chapters[index]}`);
}

// Social sharing image. The triptych gives the card a cinematic, three-part story.
await sharp(path.join(inputDir, "mani.jpg"))
  .resize(1200, 630, { fit: "cover", position: "centre" })
  .jpeg({ quality: 88, mozjpeg: true })
  .toFile(path.join(ogDir, "chef-mani-bista.jpg"));
console.log("optimized og image");

// App icons from the vector monogram.
const iconSvg = path.join(root, "public", "brand", "favicon.svg");
const iconSizes = [
  { size: 512, file: path.join(appDir, "icon.png") },
  { size: 180, file: path.join(appDir, "apple-icon.png") },
  { size: 512, file: path.join(root, "public", "icon-512.png") },
  { size: 192, file: path.join(root, "public", "icon-192.png") },
];

for (const icon of iconSizes) {
  await sharp(iconSvg)
    .resize(icon.size, icon.size)
    .png()
    .toFile(icon.file);
  console.log(`generated ${path.basename(icon.file)}`);
}

await copyFile(iconSvg, path.join(appDir, "icon.svg"));
console.log("copied app/icon.svg");
