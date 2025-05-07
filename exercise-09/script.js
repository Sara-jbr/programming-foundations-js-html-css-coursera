    let fgImage = null;
    let bgImage = null;
    const fgCanvas = document.getElementById("fgCanvas");
    const bgCanvas = document.getElementById("bgCanvas");

    function loadForegroundImage() {
      fgImage = new SimpleImage(document.getElementById("fgInput"));
      fgImage.drawTo(fgCanvas);
    }

    function loadBackgroundImage() {
      bgImage = new SimpleImage(document.getElementById("bgInput"));
      bgImage.drawTo(bgCanvas);
    }

    function clearCanvas() {
      const ctx1 = fgCanvas.getContext("2d");
      ctx1.clearRect(0, 0, fgCanvas.width, fgCanvas.height);
      const ctx2 = bgCanvas.getContext("2d");
      ctx2.clearRect(0, 0, bgCanvas.width, bgCanvas.height);
    }

    function doGreenScreen() {
      if (fgImage == null || !fgImage.complete()) {
        alert("Foreground image not loaded or still loading.");
        return;
      }

      if (bgImage == null || !bgImage.complete()) {
        alert("Background image not loaded or still loading.");
        return;
      }

      if (
        fgImage.getWidth() > bgImage.getWidth() ||
        fgImage.getHeight() > bgImage.getHeight()
      ) {
        alert("Background image must be the same size or larger than the foreground image.");
        return;
      }

      clearCanvas();

      const output = new SimpleImage(fgImage.getWidth(), fgImage.getHeight());
      const greenThreshold = 240;

      for (let pixel of fgImage.values()) {
        const x = pixel.getX();
        const y = pixel.getY();
        const bgPixel = bgImage.getPixel(x, y);

        if (pixel.getGreen() > greenThreshold) {
          output.setPixel(x, y, bgPixel);
        } else {
          output.setPixel(x, y, pixel);
        }
      }

      output.drawTo(bgCanvas);
    }