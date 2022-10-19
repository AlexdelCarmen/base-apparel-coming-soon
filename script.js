const emailInput = document.querySelector(".email"); 
const errorMessage = document.querySelector(".error-message");
const errorIcon = document.querySelector(".error-icon");

emailInput.addEventListener('change', ()=> {
    let email = emailInput.value; 
    if (email.match(/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i) === null) {
        errorMessage.classList.toggle("hidden");
        errorIcon.classList.toggle("hidden");
    } else {
        errorMessage.classList.add("hidden");
        errorIcon.classList.add("hidden");
    }
        
    }
);

