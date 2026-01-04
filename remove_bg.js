import fs from 'fs';
import path from 'path';
import { PNG } from 'pngjs';

const sourcePath = path.join(process.cwd(), 'src/assets/logo-zafir-pro.png');
const destPath = path.join(process.cwd(), 'src/assets/logo-zafir-fixed.png');

try {
    const data = fs.readFileSync(sourcePath);
    const png = PNG.sync.read(data);

    // Identify background colors from corners
    const idx1 = 0;
    const bg1 = {
        r: png.data[idx1],
        g: png.data[idx1 + 1],
        b: png.data[idx1 + 2]
    };

    // Check checkerboard pattern offset
    const idx2 = (png.width * 20 + 20) << 2;
    const bg2 = {
        r: png.data[idx2],
        g: png.data[idx2 + 1],
        b: png.data[idx2 + 2]
    };

    console.log('Background Color 1:', bg1);
    console.log('Background Color 2:', bg2);

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

            if (isColor(r, g, b, bg1) || isColor(r, g, b, bg2)) {
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
