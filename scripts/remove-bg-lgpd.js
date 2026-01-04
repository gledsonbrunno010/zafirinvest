const fs = require('fs');
const { PNG } = require('pngjs');
const path = require('path');

const inputPath = path.join(__dirname, '../src/assets/logo-lgpd-metallic-final.png');
const outputPath = path.join(__dirname, '../src/assets/logo-lgpd-clean.png');

fs.createReadStream(inputPath)
  .pipe(new PNG())
  .on('parsed', function () {
    // Process each pixel
    for (let y = 0; y < this.height; y++) {
      for (let x = 0; x < this.width; x++) {
        const idx = (this.width * y + x) << 2;
        
        const r = this.data[idx];
        const g = this.data[idx + 1];
        const b = this.data[idx + 2];
        
        // Calculate luminance - background is typically light gray/white pattern
        const luminance = (r + g + b) / 3;
        
        // Check if pixel is part of the checkered background pattern
        // The checkered pattern typically alternates between light gray (~200-230) and slightly different gray
        const isLightGray = r > 180 && g > 180 && b > 180;
        const isNearWhite = r > 240 && g > 240 && b > 240;
        
        // Check for the typical transparency grid colors (light gray ~204 and white ~255)
        const isCheckerLight = Math.abs(r - 204) < 15 && Math.abs(g - 204) < 15 && Math.abs(b - 204) < 15;
        const isCheckerDark = Math.abs(r - 153) < 15 && Math.abs(g - 153) < 15 && Math.abs(b - 153) < 15;
        
        // If it's part of the background pattern, make it transparent
        if (isNearWhite || isCheckerLight || isCheckerDark || (isLightGray && luminance > 195)) {
          this.data[idx + 3] = 0; // Set alpha to 0 (transparent)
        }
      }
    }
    
    // Second pass: edge smoothing - make semi-transparent pixels at edges
    for (let y = 1; y < this.height - 1; y++) {
      for (let x = 1; x < this.width - 1; x++) {
        const idx = (this.width * y + x) << 2;
        
        // If current pixel is not transparent, check neighbors
        if (this.data[idx + 3] > 0) {
          let transparentNeighbors = 0;
          
          // Check 8 neighbors
          for (let dy = -1; dy <= 1; dy++) {
            for (let dx = -1; dx <= 1; dx++) {
              if (dx === 0 && dy === 0) continue;
              const nIdx = (this.width * (y + dy) + (x + dx)) << 2;
              if (this.data[nIdx + 3] === 0) {
                transparentNeighbors++;
              }
            }
          }
          
          // If surrounded by mostly transparent pixels, reduce alpha for smoother edges
          if (transparentNeighbors >= 5) {
            const r = this.data[idx];
            const g = this.data[idx + 1];
            const b = this.data[idx + 2];
            const luminance = (r + g + b) / 3;
            
            // Light edge pixels become more transparent
            if (luminance > 180) {
              this.data[idx + 3] = Math.max(0, this.data[idx + 3] - 100);
            }
          }
        }
      }
    }
    
    this.pack()
      .pipe(fs.createWriteStream(outputPath))
      .on('finish', function () {
        console.log('Background removed successfully! Output:', outputPath);
      });
  });
