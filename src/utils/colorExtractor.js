/**
 * Utility functions for extracting colors from images and manipulating colors
 */

/**
 * Converts RGB values to hex color string
 * @param {number} r - Red value (0-255)
 * @param {number} g - Green value (0-255)
 * @param {number} b - Blue value (0-255)
 * @returns {string} Hex color string (e.g., "#FF5733")
 */
export function rgbToHex(r, g, b) {
  return (
    "#" +
    [r, g, b]
      .map((x) => {
        const hex = x.toString(16);
        return hex.length === 1 ? "0" + hex : hex;
      })
      .join("")
  );
}

/**
 * Converts hex color to RGB values
 * @param {string} hexColor - Hex color string (e.g., "#FF5733")
 * @returns {Object} Object with r, g, b values (0-255)
 */
export function hexToRgb(hexColor) {
  const hex = hexColor.replace("#", "");
  return {
    r: parseInt(hex.substring(0, 2), 16),
    g: parseInt(hex.substring(2, 4), 16),
    b: parseInt(hex.substring(4, 6), 16),
  };
}

/**
 * Interpolates between two hex colors
 * @param {string} color1 - Starting hex color
 * @param {string} color2 - Ending hex color
 * @param {number} factor - Interpolation factor (0-1, where 0 = color1, 1 = color2)
 * @returns {string} Interpolated hex color string
 */
export function interpolateColors(color1, color2, factor) {
  const rgb1 = hexToRgb(color1);
  const rgb2 = hexToRgb(color2);
  
  const r = Math.round(rgb1.r + (rgb2.r - rgb1.r) * factor);
  const g = Math.round(rgb1.g + (rgb2.g - rgb1.g) * factor);
  const b = Math.round(rgb1.b + (rgb2.b - rgb1.b) * factor);
  
  return rgbToHex(r, g, b);
}

/**
 * Lightens a hex color by a given percentage
 * @param {string} hexColor - Hex color string (e.g., "#FF5733")
 * @param {number} percent - Percentage to lighten (0-100)
 * @returns {string} Lightened hex color string
 */
export function lightenColor(hexColor, percent = 50) {
  const rgb = hexToRgb(hexColor);
  
  // Lighten by blending with white
  const factor = percent / 100;
  const newR = Math.round(rgb.r + (255 - rgb.r) * factor);
  const newG = Math.round(rgb.g + (255 - rgb.g) * factor);
  const newB = Math.round(rgb.b + (255 - rgb.b) * factor);
  
  return rgbToHex(newR, newG, newB);
}

/**
 * Extracts the dominant color from the edges of an image
 * @param {HTMLImageElement} imageElement - The image element to extract color from
 * @param {number} borderWidth - Width of border region to sample (default: 20px)
 * @returns {Promise<string>} Promise that resolves to hex color string
 */
export function extractEdgeColor(imageElement, borderWidth = 20) {
  return new Promise((resolve, reject) => {
    try {
      // Create canvas
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");
      
      if (!ctx) {
        reject(new Error("Could not get canvas context"));
        return;
      }
      
      // Set canvas dimensions to match image
      canvas.width = imageElement.naturalWidth || imageElement.width;
      canvas.height = imageElement.naturalHeight || imageElement.height;
      
      // Draw image on canvas
      ctx.drawImage(imageElement, 0, 0);
      
      // Sample pixels from edges
      const width = canvas.width;
      const height = canvas.height;
      const samples = [];
      
      // Sample top edge
      for (let x = 0; x < width; x += 5) {
        for (let y = 0; y < borderWidth && y < height; y++) {
          const pixelData = ctx.getImageData(x, y, 1, 1).data;
          samples.push({
            r: pixelData[0],
            g: pixelData[1],
            b: pixelData[2],
          });
        }
      }
      
      // Sample bottom edge
      for (let x = 0; x < width; x += 5) {
        for (let y = Math.max(0, height - borderWidth); y < height; y++) {
          const pixelData = ctx.getImageData(x, y, 1, 1).data;
          samples.push({
            r: pixelData[0],
            g: pixelData[1],
            b: pixelData[2],
          });
        }
      }
      
      // Sample left edge
      for (let y = 0; y < height; y += 5) {
        for (let x = 0; x < borderWidth && x < width; x++) {
          const pixelData = ctx.getImageData(x, y, 1, 1).data;
          samples.push({
            r: pixelData[0],
            g: pixelData[1],
            b: pixelData[2],
          });
        }
      }
      
      // Sample right edge
      for (let y = 0; y < height; y += 5) {
        for (let x = Math.max(0, width - borderWidth); x < width; x++) {
          const pixelData = ctx.getImageData(x, y, 1, 1).data;
          samples.push({
            r: pixelData[0],
            g: pixelData[1],
            b: pixelData[2],
          });
        }
      }
      
      if (samples.length === 0) {
        reject(new Error("No samples collected"));
        return;
      }
      
      // Calculate average RGB values
      const avgR = Math.round(
        samples.reduce((sum, sample) => sum + sample.r, 0) / samples.length
      );
      const avgG = Math.round(
        samples.reduce((sum, sample) => sum + sample.g, 0) / samples.length
      );
      const avgB = Math.round(
        samples.reduce((sum, sample) => sum + sample.b, 0) / samples.length
      );
      
      // Convert to hex
      const hexColor = rgbToHex(avgR, avgG, avgB);
      resolve(hexColor);
    } catch (error) {
      reject(error);
    }
  });
}

