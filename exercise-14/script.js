
        const imageInput = document.getElementById('imageInput');
        const canvas = document.getElementById('canvas');
        const context = canvas.getContext('2d');
        let image;

        // Handle image upload
        imageInput.addEventListener('change', (event) => {
            const file = event.target.files[0];
            const reader = new FileReader();

            reader.onload = function(e) {
                image = new Image();
                image.onload = function() {
                    // Set canvas size to image dimensions
                    canvas.width = image.width;
                    canvas.height = image.height;
                    // Draw the image onto the canvas
                    context.drawImage(image, 0, 0);
                }
                image.src = e.target.result;
            };
            reader.readAsDataURL(file);
        });

        // Apply vertical red, green, and blue stripes
        function applyStripes() {
            const imageData = context.getImageData(0, 0, canvas.width, canvas.height);
            const data = imageData.data;

            for (let i = 0; i < data.length; i += 4) {
                let x = (i / 4) % canvas.width; // Get the x-coordinate
                if (x < canvas.width / 3) {
                    // Red stripe: Set red to 255
                    data[i] = 255; // Red
                } else if (x < (2 * canvas.width) / 3) {
                    // Green stripe: Set green to 255
                    data[i + 1] = 255; // Green
                } else {
                    // Blue stripe: Set blue to 255
                    data[i + 2] = 255; // Blue
                }
            }

            context.putImageData(imageData, 0, 0); // Draw the modified image back to the canvas
        }

        // Swap red and green channels
        function swapRedGreen() {
            const imageData = context.getImageData(0, 0, canvas.width, canvas.height);
            const data = imageData.data;

            for (let i = 0; i < data.length; i += 4) {
                // Swap the red and green components
                let red = data[i];
                let green = data[i + 1];

                // Swap the values
                data[i] = green;
                data[i + 1] = red;
            }

            context.putImageData(imageData, 0, 0); // Draw the modified image back to the canvas
        }

        // Change blue pixels to yellow (red = 255, green = 255, blue = 0)
        function changeBlueToYellow() {
            const imageData = context.getImageData(0, 0, canvas.width, canvas.height);
            const data = imageData.data;

            for (let i = 0; i < data.length; i += 4) {
                let red = data[i];
                let green = data[i + 1];
                let blue = data[i + 2];

                // If the pixel is mostly blue, change it to yellow
                if (red < 100 && green < 100 && blue > 100) {
                    data[i] = 255;  // Red = 255
                    data[i + 1] = 255;  // Green = 255
                    data[i + 2] = 0;  // Blue = 0 (yellow)
                }
            }

            context.putImageData(imageData, 0, 0); // Draw the modified image back to the canvas
        }