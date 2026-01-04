import { Jimp } from 'jimp';
import path from 'path';

const sourcePath = path.join(process.cwd(), 'src/assets/logo-lgpd-silver.png');
const destPath = path.join(process.cwd(), 'src/assets/logo-lgpd-silver-clean.png');

function intToRGBA(i) {
    return {
        r: (i >>> 24) & 0xFF,
        g: (i >>> 16) & 0xFF,
        b: (i >>> 8) & 0xFF,
        a: i & 0xFF
    };
}

async function processImage() {
    try {
        console.log('Reading image from:', sourcePath);
        const image = await Jimp.read(sourcePath);
        console.log('Image read successfully. Size:', image.bitmap.width, 'x', image.bitmap.height);

        // Identify background colors from corners
        const bg1 = intToRGBA(image.getPixelColor(0, 0));
        const bg2 = intToRGBA(image.getPixelColor(20, 20)); // Offset

        console.log('BG1:', bg1);
        console.log('BG2:', bg2);

        const tolerance = 60; // Fairly high tolerance to catch compression artifacts

        const isClose = (c1, c2) => {
            return Math.abs(c1.r - c2.r) < tolerance &&
                Math.abs(c1.g - c2.g) < tolerance &&
                Math.abs(c1.b - c2.b) < tolerance;
        };

        image.scan(0, 0, image.bitmap.width, image.bitmap.height, (x, y, idx) => {
            const pixelColor = intToRGBA(image.getPixelColor(x, y));

            // Remove specific background colors (checkerboard)
            // Checkers are usually dark grey/black
            // And explicit corners

            const isCorner1 = isClose(pixelColor, bg1);
            const isCorner2 = isClose(pixelColor, bg2);

            // Also remove pure blacks or very dark greys if the logo is bright silver
            const luminance = (0.299 * pixelColor.r + 0.587 * pixelColor.g + 0.114 * pixelColor.b);
            const isDark = luminance < 50;

            // Remove common checkerboard greys specifically
            const isCheckerGrey = isClose(pixelColor, { r: 102, g: 102, b: 102, a: 255 }) ||
                isClose(pixelColor, { r: 153, g: 153, b: 153, a: 255 });

            if (isCorner1 || isCorner2 || isDark || isCheckerGrey) {
                image.setPixelColor(0x00000000, x, y);
            }
        });

        await image.write(destPath);
        console.log('Saved clean image to:', destPath);
    } catch (err) {
        console.error('Error:', err);
    }
}

processImage();
