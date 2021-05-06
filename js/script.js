{
    const welcome = () => {
        console.log("Hello everyone! This is my first website.");
    }

    const onChangeBackgroundClick = () => {
        const body = document.querySelector(".js-body");
        body.classList.toggle("body--dark");
        const button__backgroundName = document.querySelector(".js-button__backgroundName");
        button__backgroundName.innerText = body.classList.contains("body--dark")
            ? "jaśniejsze"
            :
            "ciemniejsze";
    };

    const init = () => {
        const changeBackgroundButton = document.querySelector(".js-changeBackgroundButton");
        changeBackgroundButton.addEventListener("click", onChangeBackgroundClick);

        welcome();
    };

    init();
}