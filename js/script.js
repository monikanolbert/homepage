console.log("Hello everyone! This is my first website.");

let button = document.querySelector(".js-button");
let body = document.querySelector(".js-body");
let button__backgroundName = document.querySelector(".js-button__backgroundName");

button.addEventListener("click", () => {
    body.classList.toggle("body--dark");

    button__backgroundName.innerText = body.classList.contains("body--dark")
        ? "jaśniejsze"
        :
        "ciemniejsze";
});