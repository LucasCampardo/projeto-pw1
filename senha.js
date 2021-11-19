const showButton = document.querySelector(".showButton");

showButton.onclick = function () {
    if (input.type == "password") {
        input.type = "text";
        showButton.style.color = "var(--Green)";
    } else {
        input.type = "password";
    }
}