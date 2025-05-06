function changeColor() {

  // Get the two <div> elements by their IDs
  let div1 = document.getElementById("divOne");
  let div2 = document.getElementById("divTwo");


 /*
   Change their class names (you must define these CSS classes in your style.css)
  .className = "..." → Applies predefined CSS rules from a stylesheet (external or <style>).
  .style.property = "value" → Applies inline styles directly from JavaScript, no CSS file needed.
   div2.style.backgroundColor = "lightblue";
  */
  div1.className = "lightgreen";
  div2.className = "lightblue";

  // Bonus: Change the color and label of the color-change button
  document.getElementById("btnColor").style.color = "red";
  document.getElementById("btnColor").value = "Color Changed!";
}

function changeText() {
  let div1 = document.getElementById("divOne");
  let div2 = document.getElementById("divTwo");

  div1.innerHTML = "This is the updated content for the first div.";
  div2.innerHTML = "And this is new text in the second div.";

  // Extra Challenge: Change text color
  div1.style.color = "darkblue";
  div2.style.color = "darkmagenta";

  // Change button label
  document.getElementById("btnText").value = "Text Changed!";
}
