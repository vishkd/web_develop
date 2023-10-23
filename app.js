let pwd = document.getElementById("pwd");
let strengthBar = document.getElementById("strength");
pwd.addEventListener("keyup", validate);
function validate() {
    var regexp = /[a-zA-Z0-9]+/;
    var regexp40 = /[~<>?]+/;
    var regexp60 = /[!@$%^&*?]+/;
    var strength = 0;
    if (pwd.value.match(regexp)) {
        strength += 1;

    }
    if (pwd.value.match(regexp40)) {
        strength += 1;

    }
    if (pwd.value.match(regexp60)) {
        strength += 1;
    }
    if (pwd.value.length > 8) {
        strength += 1;
    }

    switch (strength) {
        case 0:
            strengthBar.value = 20;
            strengthBar.innerHTML = "poor";
            strengthBar.style.color = "red";

        case 1:
            strengthBar.value = 40;
            strengthBar.innerHTML = "weak";
            strengthBar.style.color = "yellow";
            break;

        case 2:
            strengthBar.value = 60;
            strengthBar.innerHTML = "medium";
            strengthBar.style.color= "orange";
            break;

        case 3:
            strengthBar.value = 80;
            strengthBar.innerHTML = "good";
            strengthBar.style.color= "blue";
            break;

        case 4:
            strengthBar.value = 100;
            strengthBar.innerHTML = "strong";
            strengthBar.style.color = "#0ADC03";
            break;
    }
}