const refs = {
    input: document.querySelector('[type="number"]'),
    createBtn: document.querySelector('[data-create]'),
    destroyBtn: document.querySelector('[data-destroy]'),
    boxes: document.querySelector("#boxes")

}

refs.createBtn.addEventListener("click", onCreateBtnClick);
refs.destroyBtn.addEventListener("click", onDestroyBtnClick);

function onCreateBtnClick(event) {
    const inputValue = Number(refs.input.value);
    if (inputValue < 1 || inputValue > 100) {
        alert('Incorrect value');
        return;
    }
    createBoxes(inputValue);
    refs.input.value = "";
}

function onDestroyBtnClick(event) {
    destroyBoxes();
}

function createBoxes(amount) {
    destroyBoxes();
    let size = 30;
    const elements = [];
    for (let i = 0; i < amount; i += 1) {
        const div = document.createElement('div');
        div.style.width = `${size}px`;
        div.style.height = `${size}px`;
        div.style.backgroundColor = getRandomHexColor();
        size += 10;
        elements.push(div);
    }

    refs.boxes.append(...elements);
}

function destroyBoxes() {
    refs.boxes.innerHTML = "";
}


function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, 0)}`;
}