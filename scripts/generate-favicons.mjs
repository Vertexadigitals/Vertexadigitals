import { mkdir, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

import sharp from "sharp";
import pngToIco from "png-to-ico";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");
const source = join(root, "public", "logo.png");

const pngTargets = [
  { size: 512, output: join(root, "app", "icon.png") },
  { size: 180, output: join(root, "app", "apple-icon.png") },
  { size: 192, output: join(root, "public", "icon-192.png") },
  { size: 512, output: join(root, "public", "icon-512.png") },
  { size: 180, output: join(root, "public", "apple-touch-icon.png") },
];

const icoSizes = [16, 32, 48];

async function generate() {
  await mkdir(join(root, "app"), { recursive: true });
  await mkdir(join(root, "public"), { recursive: true });

  for (const { size, output } of pngTargets) {
    await sharp(source)
      .resize(size, size, {
        fit: "contain",
        background: { r: 0, g: 0, b: 0, alpha: 0 },
      })
      .png()
      .toFile(output);
    console.log(`Generated ${output} (${size}x${size})`);
  }

  const icoBuffers = await Promise.all(
    icoSizes.map((size) =>
      sharp(source)
        .resize(size, size, {
          fit: "contain",
          background: { r: 0, g: 0, b: 0, alpha: 0 },
        })
        .png()
        .toBuffer()
    )
  );
  const icoBuffer = await pngToIco(icoBuffers);
  const appIcoOutput = join(root, "app", "favicon.ico");
  await writeFile(appIcoOutput, icoBuffer);
  console.log(`Generated ${appIcoOutput} (16x16, 32x32, 48x48)`);

  // Also written to public/ as a defensive duplicate at the same /favicon.ico
  // URL — Next.js's app/ file convention already serves this path; this
  // copy exists only so the file is present even if that convention ever
  // changes, per the explicit request for a public/ fallback.
  const publicIcoOutput = join(root, "public", "favicon.ico");
  await writeFile(publicIcoOutput, icoBuffer);
  console.log(`Generated ${publicIcoOutput} (16x16, 32x32, 48x48)`);

  console.log("Favicon generation complete!");
}

generate().catch((error) => {
  console.error(error);
  process.exit(1);
});
