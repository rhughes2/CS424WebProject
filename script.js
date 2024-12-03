let images = {};

async function loadImages() {
    try {
        const response = await fetch('./images.json');
        images = await response.json();
        console.log('Images loaded:', images);
    } catch (error) {
        console.error('Error loading images:', error);
    }
}

let dropdownCount = 0;
function addDropdown() {
    if (dropdownCount < 5) {
        const dropdownContainer = document.getElementById("dropdown-container");

        const dropdownWrapper = document.createElement("div");

        const newLabel = document.createElement("label");
        newLabel.innerText = "Choose a drink:";

        const newSelect = document.createElement("select");
        newSelect.id = "item-list-" + dropdownCount;
        newSelect.className = "item-list";
        newSelect.setAttribute("onchange", "updateImage(" + dropdownCount + ")");

        fetch('./drinks.json')
            .then(response => response.json())
            .then(data => {
                data.forEach(item => {
                    const optionElement = document.createElement("option");
                    optionElement.value = item.value;
                    optionElement.text = item.text;
                    newSelect.add(optionElement);
                });

                dropdownWrapper.appendChild(newLabel);
                dropdownWrapper.appendChild(newSelect);

                const newImage = document.createElement("img");
                newImage.id = "item-image-" + dropdownCount;
                newImage.className = "item-image";
                newImage.src = "";
                dropdownWrapper.appendChild(newImage);

                dropdownContainer.appendChild(dropdownWrapper);

                updateImage(dropdownCount);
                dropdownCount++;
            })
            .catch(error => console.error('Error loading JSON:', error));
    }
}

function goToResultsPage() {
    const dropdowns = document.getElementsByClassName("item-list");
    let total = 0;

    for (let i = 0; i < dropdowns.length; i++) {
        total += parseInt(dropdowns[i].value, 10); 
    }

    window.location.href = "results.html?total=" + total;
}

function updateImage(index) {
    const itemList = document.getElementById("item-list-" + index);
    const selectedItem = itemList.options[itemList.selectedIndex].text;
    const itemImage = document.getElementById("item-image-" + index);

    itemImage.src = images[selectedItem] || ''; 
}


window.onload = async function () {
    await loadImages(); 
    addDropdown();
};
