import fs from 'fs';
import path from 'path';
import { PNG } from 'pngjs';

const sourcePath = path.join(process.cwd(), 'src/assets/logo-lgpd-silver-raw.png');
const destPath = path.join(process.cwd(), 'src/assets/logo-lgpd-silver.png');

try {
    const data = fs.readFileSync(sourcePath);
    const png = PNG.sync.read(data);

    // Identify background colors from corners
    // Top-left pixel (likely dark transparent/checkerboard)
    const idx1 = 0;
    const bg1 = {
        r: png.data[idx1],
        g: png.data[idx1 + 1],
        b: png.data[idx1 + 2]
    };

    // A bit to the right/down to catch the second color of checkerboard if present
    // Let's sample a few points to be sure
    const bg2 = { r: 255, g: 255, b: 255 }; // Explicitly target white if it's there
    const bg3 = { r: 0, g: 0, b: 0 }; // Target black
    const bg4 = { r: 128, g: 128, b: 128 }; // Target grey check block

    console.log('Background Color 1 (Top-Left):', bg1);

    const tolerance = 25; // Slightly increased tolerance

    const isColor = (r, g, b, target) => {
        return Math.abs(r - target.r) < tolerance &&
            Math.abs(g - target.g) < tolerance &&
            Math.abs(b - target.b) < tolerance;
    };

    let pixelsChanged = 0;
    for (let y = 0; y < png.height; y++) {
        for (let x = 0; x < png.width; x++) {
            const idx = (png.width * y + x) << 2;

            const r = png.data[idx];
            const g = png.data[idx + 1];
            const b = png.data[idx + 2];

            if (isColor(r, g, b, bg1) || isColor(r, g, b, bg2) || isColor(r, g, b, bg3) || isColor(r, g, b, bg4)) {
                png.data[idx + 3] = 0; // Alpha 0
                pixelsChanged++;
            }
        }
    }

    console.log(`Removed background from ${pixelsChanged} pixels.`);
    const buffer = PNG.sync.write(png);
    fs.writeFileSync(destPath, buffer);
    console.log('Done! Saved to', destPath);

} catch (error) {
    console.error('Error processing image:', error);
}
