/* Sukurkite puslapį, kuriame būtų forma su vienu input - fullName.
* Įvedus vardą ir pavardę, juos padalina į dvi dalis (name ir surname).
* Vardą ir pavardę įdeda į objektą, o objektą - į array.
* Šį array išsaugo localStorage.
* Po forma sukurkite lentelę joje atvaizduokite informaciją iš localStorage.
* Papildomai: pirmo ir paskutinio ištrynimas iš localstorage */

const text = document.getElementById("text");
const add = document.getElementById("add");
const output = document.getElementById("output");
let textArray = [];

add.addEventListener("click", () => {
    // Validacija
    if (!text.value) return alert("Laukelis tuščias");

    // Duomenų apdorojimas
    const split = text.value.trim().split(" ").filter(x => x !== '').map(x => x.charAt(0).toUpperCase() + x.slice(1).toLowerCase());

    // Sukūrimas per DOM
    const row = document.createElement("tr");

    // Pridėjimas į textArray
    textArray.push(split);

    // Pridėjimas į localstorage
    localStorage.setItem("textArray", JSON.stringify(textArray));

    // Pridėjimas į lentelę
    split.forEach(item => {
        const cell = document.createElement("td");
        cell.innerText = item;
        row.appendChild(cell);
    });

    output.appendChild(row);

    // Input išvalymas
    text.value = "";
});

// Užkrovimas iš localStorage
let getTextArray = JSON.parse(localStorage.getItem("textArray")) || [];
textArray = getTextArray;

textArray.forEach(arr => {
    // Sukūrimas per DOM
    const row = document.createElement("tr");

    // Pridėjimas į lentelę
    if (Array.isArray(arr)) {
        arr.forEach(item => {
            const cell = document.createElement("td");
            cell.innerText = item;
            row.appendChild(cell);
        });
    } else {
        // Jei arr nėra masyvas, galite taip elgtis, kaip norite
        const cell = document.createElement("td");
        cell.innerText = arr;
        row.appendChild(cell);
    }

    output.appendChild(row);
});

// išvalo kas buvo anksciau parasyta
// localStorage.clear();

