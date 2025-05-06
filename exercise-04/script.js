function doRed() {

  //Gets the <canvas> and its 2D drawing context.
  const canvas = document.getElementById("canvas1");
  const ctx = canvas.getContext("2d");


  // Clear previous drawings
  // clearRect(x, y, width, height) clears a rectangle starting at (0, 0) — the top-left corner — covering the full width and height of the canvas.
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Set background color to red
  ctx.fillStyle = "red";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Draw a white rectangle
  ctx.fillStyle = "white";
  ctx.fillRect(50, 40, 100, 50);

  // Add text
  ctx.fillStyle = "black";
  ctx.font = "20px Arial";
  ctx.fillText("Red Mode", 80, 120);
}

function doBlue() {
  const canvas = document.getElementById("canvas1");
  const ctx = canvas.getContext("2d");

  // Clear previous drawings
  ctx.clearRect(0, 0, canvas.width, canvas.height);

   // Draws a blue rectangle starting from the top-left corner (0, 0) that covers the entire canvas.
  //It effectively sets the background color to blue by painting a solid blue rectangle over the full canvas.
  ctx.fillStyle = "blue";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Draw a yellow rectangle
  ctx.fillStyle = "yellow";
  ctx.fillRect(50, 40, 100, 50);

  // Add text
  ctx.fillStyle = "white";
  ctx.font = "20px Arial";
  ctx.fillText("Blue Mode", 80, 120);
}
