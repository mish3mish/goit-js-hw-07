// Кнопка "Приховати" ховає текст і замінює назву кнопки на
// "Розкрити", при повторному натисканні текст знову стає доступним
// і кнопка набуває початкового вигляду.

const passwordBtn = document.querySelector("#passwordButton");
const taskTitle = document.querySelector(".taskTitle");

passwordBtn.addEventListener("click", onPasswordBtnClick);

function onPasswordBtnClick() {
    if (passwordBtn.textContent === "Розкрити") {
        taskTitle.style.display = "block";
        passwordBtn.textContent = "Приховати";
        return;
    }

    taskTitle.style.display = "none";
    passwordBtn.textContent = "Розкрити";



}
