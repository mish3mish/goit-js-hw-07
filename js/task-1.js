const categoriesList = document.querySelector("#categories");
// console.log("🚀 ~ categories:", categories);
const categoriesItems = document.querySelectorAll(".item");
const categoriesItemsLength = categoriesItems.length;
console.log(`Number of categories: ${categoriesItemsLength}`);

categoriesItems.forEach((category) => {
    const categoryName = document.querySelector("h2");
    const categoryNameContent = categoryName.textContent;
    console.log(`Category: ${categoryNameContent}`);

    const itemsAmount = category.querySelectorAll("li").length;
    console.log(`Elements: ${itemsAmount}`);
});

