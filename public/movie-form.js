// Here is some frontend Javascript
console.log("hello from the frontend!!!")

// Raw DOM stuff:
const container = document.querySelector("#genre-selects-container");
const originalSelector = document.querySelector("#genre-select");
const addAnotherGenreButton = document.querySelector("#add-another-genre-button");

addAnotherGenreButton.addEventListener("click", () => {
    const anotherSelect = originalSelector.cloneNode(true);
    container.appendChild(anotherSelect);
})