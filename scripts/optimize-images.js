// Simple local optimizer to convert heavy PNG/JPG to WebP
// Usage: npm run optimize-images

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Prefer sharp if available; otherwise try cwebp via imagemin-webp CLI
let sharp;
try {
  sharp = require('sharp');
} catch (_) {
  sharp = null;
}

const projectRoot = process.cwd();
const publicDir = path.join(projectRoot, 'public');
const targets = [
  'slider/slider-1.png',
  'slider/slider-2.png',
  'slider/slider-3.png',
  'slider/slider-4.png',
  'images/unilogo.png',
  'images/university.png',
  'images/marshmallo1.jpg'
];

async function convertWithSharp(inputPath, outputPath) {
  const dir = path.dirname(outputPath);
  fs.mkdirSync(dir, { recursive: true });
  await sharp(inputPath)
    .webp({ quality: 80 })
    .toFile(outputPath);
}

function convertWithCwebp(inputPath, outputPath) {
  const dir = path.dirname(outputPath);
  fs.mkdirSync(dir, { recursive: true });
  execSync(`cwebp -q 80 "${inputPath}" -o "${outputPath}"`, { stdio: 'inherit' });
}

(async () => {
  for (const rel of targets) {
    const src = path.join(publicDir, rel);
    if (!fs.existsSync(src)) {
      console.log(`[skip] ${rel} not found`);
      continue;
    }
    const out = path.join(publicDir, rel.replace(/\.(png|jpg|jpeg)$/i, '.webp'));
    try {
      if (sharp) {
        await convertWithSharp(src, out);
      } else {
        convertWithCwebp(src, out);
      }
      console.log(`[ok] ${rel} -> ${path.relative(publicDir, out)}`);
    } catch (e) {
      console.error(`[error] converting ${rel}:`, e.message);
    }
  }
})();


