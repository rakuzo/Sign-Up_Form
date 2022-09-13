const warning = document.querySelector(".warning");
const submit = document.querySelector("#submit");
const form = document.querySelector("form");

function confirmPassword(event) {
    const pw1 = document.getElementById("password");
    const pw2 = document.getElementById("confirm-pass");

    if (pw1.validity.valueMissing) {
        event.preventDefault();
        return;
    } else if ((pw1.value !== pw2.value)) {
        warning.innerText = "*Password didn't match";
        event.preventDefault();
    } else if (!(pw1.validity.patternMismatch) && !(pw2.validity.patternMismatch)) {
        warning.innerText = "Password created";
        warning.style.color = "#99bb7b";
    } else {
        event.preventDefault();
        return;
    }
}

form.addEventListener("submit", (e) => {
    confirmPassword(e);
})