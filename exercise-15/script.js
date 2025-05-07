let originalImage = null;
const canvas = document.getElementById("canvas");

// Load image from user upload
function loadImage() {
  const fileInput = document.getElementById("upload");
  originalImage = new SimpleImage(fileInput);
  originalImage.drawTo(canvas);
}

// Check if image is loaded and ready to use
function imageIsLoaded(img) {
  return img !== null && img.complete();
}

// Reset canvas to the original image
function resetImage() {
  if (imageIsLoaded(originalImage)) {
    const reset = new SimpleImage(originalImage);
    reset.drawTo(canvas);
  }
}

// Apply grayscale filter
function doGray() {
  if (imageIsLoaded(originalImage)) {
    const gray = new SimpleImage(originalImage);
    for (let pixel of gray.values()) {
      const avg = (pixel.getRed() + pixel.getGreen() + pixel.getBlue()) / 3;
      pixel.setRed(avg);
      pixel.setGreen(avg);
      pixel.setBlue(avg);
    }
    gray.drawTo(canvas);
  }
}

// Apply red filter based on average intensity
function doRed() {
  if (imageIsLoaded(originalImage)) {
    const red = new SimpleImage(originalImage);
    for (let pixel of red.values()) {
      const avg = (pixel.getRed() + pixel.getGreen() + pixel.getBlue()) / 3;
      if (avg < 128) {
        pixel.setRed(2 * avg);
        pixel.setGreen(0);
        pixel.setBlue(0);
      } else {
        pixel.setRed(255);
        pixel.setGreen(2 * avg - 255);
        pixel.setBlue(2 * avg - 255);
      }
    }
    red.drawTo(canvas);
  }
}

// Slightly increase blue intensity
function doBlue() {
  if (imageIsLoaded(originalImage)) {
    const blue = new SimpleImage(originalImage);
    for (let pixel of blue.values()) {
      pixel.setBlue(clamp(pixel.getBlue() + 50, 0, 255));
    }
    blue.drawTo(canvas);
  }
}

// Apply a purple effect (mix of red and blue)
function doPurple() {
  if (imageIsLoaded(originalImage)) {
    const purple = new SimpleImage(originalImage);
    for (let pixel of purple.values()) {
      pixel.setRed(clamp(pixel.getRed() + 40, 0, 255));
      pixel.setGreen(clamp(pixel.getGreen() - 20, 0, 255));
      pixel.setBlue(clamp(pixel.getBlue() + 40, 0, 255));
    }
    purple.drawTo(canvas);
  }
}

// Apply rainbow stripes effect
function doRainbow() {
  if (imageIsLoaded(originalImage)) {
    const rainbow = new SimpleImage(originalImage);
    const height = rainbow.getHeight();

    for (let pixel of rainbow.values()) {
      const y = pixel.getY();
      const avg = (pixel.getRed() + pixel.getGreen() + pixel.getBlue()) / 3;

      if (y < height / 7) setColor(pixel, avg, "red");
      else if (y < 2 * height / 7) setColor(pixel, avg, "orange");
      else if (y < 3 * height / 7) setColor(pixel, avg, "yellow");
      else if (y < 4 * height / 7) setColor(pixel, avg, "green");
      else if (y < 5 * height / 7) setColor(pixel, avg, "blue");
      else if (y < 6 * height / 7) setColor(pixel, avg, "indigo");
      else setColor(pixel, avg, "violet");
    }

    rainbow.drawTo(canvas);
  }
}

// Utility to apply color band logic
function setColor(pixel, avg, color) {
  let r = 0, g = 0, b = 0;
  if (avg < 128) {
    switch (color) {
      case "red": r = 2 * avg; break;
      case "orange": r = 2 * avg; g = 0.8 * avg; break;
      case "yellow": r = 2 * avg; g = 2 * avg; break;
      case "green": g = 2 * avg; break;
      case "blue": b = 2 * avg; break;
      case "indigo": r = 0.8 * avg; b = 2 * avg; break;
      case "violet": r = 1.6 * avg; b = 1.6 * avg; break;
    }
  } else {
    switch (color) {
      case "red": r = 255; g = 2 * avg - 255; b = 2 * avg - 255; break;
      case "orange": r = 255; g = 1.2 * avg - 51; b = 2 * avg - 255; break;
      case "yellow": r = 255; g = 255; b = 2 * avg - 255; break;
      case "green": r = 2 * avg - 255; g = 255; b = 2 * avg - 255; break;
      case "blue": r = 2 * avg - 255; g = 2 * avg - 255; b = 255; break;
      case "indigo": r = 1.2 * avg - 51; g = 2 * avg - 255; b = 255; break;
      case "violet": r = 1.6 * avg - 102; g = 2 * avg - 255; b = 255; break;
    }
  }

  pixel.setRed(clamp(r, 0, 255));
  pixel.setGreen(clamp(g, 0, 255));
  pixel.setBlue(clamp(b, 0, 255));
}

// Limit value to range [min, max]
function clamp(value, min, max) {
  return Math.max(min, Math.min(value, max));
}
