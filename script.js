const emailInput = document.querySelector(".email");
const errorMessage = document.querySelector(".error-message");
const errorIcon = document.querySelector(".error-icon");
const button = document.querySelector("button");

button.addEventListener("click", () => {
  let email = emailInput.value;
  if (
    email.match(
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
    ) === null
  ) {
    errorMessage.classList.remove("hidden");
    errorIcon.classList.remove("hidden");
  } else {
    errorMessage.classList.add("hidden");
    errorIcon.classList.add("hidden");
  }
});


