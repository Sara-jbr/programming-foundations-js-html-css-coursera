function showAlert() {
  alert("Hello! You clicked the alert button.");
}

function showConfirm() {
  let choice = confirm("Do you want to continue?");
  let message;
  if (choice === true) {
    message = "You pressed OK!";
  } else {
    message = "Are you sure you want to cancel?";
  }
  alert(message);
}
