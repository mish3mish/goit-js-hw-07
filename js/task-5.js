const changeColorBtn = document.querySelector(".change-color");
const colorCode = document.querySelector(".color");

changeColorBtn.addEventListener("click", clickHandler);

function clickHandler() {
    const randomColor = getRandomHexColor();
    document.body.style.backgroundColor = randomColor;
    colorCode.textContent = randomColor;
}

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, 0)}`;
}