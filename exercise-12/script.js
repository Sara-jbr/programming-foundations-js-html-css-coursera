// Create a new 200x200 image
var img = new SimpleImage(200, 200);

// Loop over every pixel in the image
for (var pixel of img.values()) {
    pixel.setRed(255);
    pixel.setGreen(255);
    pixel.setBlue(0);  // Yellow is made of red + green
}

// Display the yellow image
print(img);


var img = new SimpleImage(200, 200);

for (var pixel of img.values()) {
    pixel.setRed(255);
    pixel.setGreen(0);
    pixel.setBlue(255);  // Magenta = red + blue
}

print(img);


function applySwap(image) {
    let width = image.getWidth();
    let height = image.getHeight();

    // Loop through every pixel
    for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
            let pixel = image.getPixel(x, y);  // Get pixel at (x, y)
            swapRedGreen(pixel);  // Swap red and green components
        }
    }

    image.print();  // Print the modified image
}

