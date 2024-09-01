const nameInput = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");

nameInput.addEventListener("input", (event) => {
    const trimmedContent = event.currentTarget.value.trim();

    if (trimmedContent === "") {
        nameOutput.textContent = "Anonymous";
    } else {
        nameOutput.textContent = trimmedContent;
    }
});