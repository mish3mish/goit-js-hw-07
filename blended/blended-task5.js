// При натисканні на кожну з кнопок підсумовуються значення з data-атрибутів.
// За натисканням на кнопку "Вивести результат" виводиться сума значення, а також статистика з
// інформацією про те, яка кнопка була натиснута скільки разів.

const statList = document.querySelector(".statList");

statList.addEventListener("click", onStatListButtonClick);

let total = 0;
let statClicks = {};

function onStatListButtonClick(event) {
    if (event.target.nodeName !== "BUTTON") {
        return;
    }

    const dataValue = Number(event.target.dataset.number);
    total += dataValue;
    statClicks[event.target.textContent] =
        (statClicks[event.target.textContent] || 0) + 1;
    console.log(statClicks);
}
