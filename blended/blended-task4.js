// Натиснувши кнопку "Подвоювати", збільшити значення
// у кожному елементі списку у 2 рази

const buttonEl = document.querySelector("#double");

buttonEl.addEventListener("click", onButtonElClick);

function onButtonElClick() {
    const listItems = document.querySelectorAll(".listItem");
    console.log(listItems);

    listItems.forEach((item) => {
        item.textContent = Number(item.textContent) * 2;

    })

}

