const warning = document.querySelector(".warning");
const submit = document.querySelector("#submit");

function confirmPassword() {
    const pw1 = document.getElementById("password");
    const pw2 = document.getElementById("confirm-pass");

    console.log(pw1.value);
    console.log(pw2.value);
    console.log(warning);
    if (pw1.value === "" || pw1.value === null) {
        return;
    } else if (pw1.value !== pw2.value) {
        // alert("password didn't match");
        warning.innerText = "*Password didn't match";
    } else {
        // alert("Succes");
        warning.innerText = "Password created";
        warning.style.color = "#99bb7b";
    }
}

submit.addEventListener("click", confirmPassword)