function setCanvasBlue() {
  const canvas = document.getElementById("myCanvas");
  const ctx = canvas.getContext("2d");

  ctx.fillStyle = "blue";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
}

function changeColor() {
  const canvas = document.getElementById("myCanvas");
  const ctx = canvas.getContext("2d");
  const colorInput = document.getElementById("colorPicker");

  const color = colorInput.value;
  ctx.fillStyle = color;
  ctx.fillRect(0, 0, canvas.width, canvas.height);
}
