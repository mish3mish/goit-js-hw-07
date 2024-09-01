// Після натискання кнопки "SWAP ME" здійснюється обмін вмістом між двома інпутами.
// Ви можете натиснути на неї кілька разів або вручну змінити вміст інпутів.

const swapButton = document.querySelector("#swapButton");
const leftInput = document.querySelector("#leftSwapInput");
const rightInput = document.querySelector("#rightSwapInput");

const leftInput = leftInput.value;
leftInput.value = rightInput.value;
rightInput.value = leftInput.value;

const onSwapButtonClick = (event) => {
    leftInput.value = rightInput.value;
    rightInput.value = leftInput.value;
}

swapButton.addEventListener("click", onSwapButtonClick);