const refs = {
    showBtn: document.querySelector("#alertButton"),
    taskTitle: document.querySelector('.taskTitle'),
    input: document.querySelector("#alertInput"),
}

refs.showBtn.addEventListener("click", onShowBtnClick);

function onShowBtnClick() {
    const inputValue = refs.input.value.trim();
    refs.taskTitle.textContent = inputValue;
}