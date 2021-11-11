console.log('%c HI', 'color: firebrick')

document.addEventListener("DOMContentLoaded", initialize)

function initialize() {
    fetchRandomFour();
    fetchAllDogs();
    filterBreeds();
}
// Step 1 
// Fetch images using random/4 URL
// Parse response into JSON

function fetchRandomFour() {
    fetch ("https://dog.ceo/api/breeds/image/random/4")
     .then((response) => response.json())
     .then((dogImages) => renderData(dogImages))
}

function renderData(dogs) {
    let dogImageContainer = document.querySelector("#dog-image-container");
    dogs.message.forEach((dog) => {
        let img = document.createElement("img");
        img.src = dog;
        dogImageContainer.appendChild(img);
    })
}

// Add image elements to the DOM **for each** 🤔 image in the array

// Step 2
// After the first challenge is completed, add JavaScript that:
// - on page load, fetches all the dog breeds using the url above ⬆️
// - adds the breeds to the page in the `<ul>` provided in `index.html`
let filterLetter = "";
function fetchAllDogs() {
    fetch ("https://dog.ceo/api/breeds/list/all")
     .then((response) => response.json())
     .then((allDogs) => renderAllData(allDogs))
}

function renderAllData(dogList) {
    let dogBreedContainer = document.querySelector("#dog-breeds");
    dogBreedContainer.innerHTML = "";
    for (const dogBreed in dogList.message) {
        let li = document.createElement('li');
        li.innerText = dogBreed;
        if (filterLetter === "" || filterLetter === dogBreed[0]) {
            dogBreedContainer.appendChild(li);
            function changeColor() {
                li.style.color = "purple";
            }
            li.addEventListener('click', changeColor);
        }
    }
}

function filterBreeds() {
    let select = document.getElementById("breed-dropdown");
    removeAllChildNodes(select);
    replaceSelect(select);
    select.addEventListener('change', () => {
        filterLetter = select.value;
        fetchAllDogs();
    })
}

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    };
};

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    };
};

function replaceSelect(parent) {
    let alphabetArr = ['', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    alphabetArr.forEach((letter) => {
        let option = document.createElement("option");
        option.setAttribute("value", letter);
        option.innerText = letter;
        parent.appendChild(option);
    });
};

// Step 3
// Once all of the breeds are rendered in the `<ul>`, add JavaScript so that, when
// the user clicks on any one of the `<li>`s, the font color of that `<li>`
// changes. This can be a color of your choosing.


// Step 4
// Once we are able to load _all_ of the dog breeds onto the page, add JavaScript
// so that the user can filter breeds that start with a particular letter using a
// [dropdown](https://www.w3docs.com/learn-html/html-select-tag.html).

// For example, if the user selects 'a' in the dropdown, only show the breeds with
// names that start with the letter a. For simplicity, the dropdown only includes
// the letters a-d. However, we can imagine expanding this to include the entire
// alphabet.