var images = {
    "Diet Coke": "./media/diet-coke.png",
    "Coffee": "./media/coffee.png",
    "C4 Energy": "./media/c4.png"
};
        
        // Function to add a new dropdown dynamically
        let dropdownCount = 0;  // Start from 1 because the first dropdown is already created
        function addDropdown() {
            var dropdownContainer = document.getElementById("dropdown-container");

            var newLabel = document.createElement("label");
            newLabel.innerText = "Choose a drink:";

            var newSelect = document.createElement("select");
            newSelect.id = "item-list-" + dropdownCount;
            newSelect.className = "item-list";
            newSelect.setAttribute("onchange", "updateImage(" + dropdownCount + ")");

            // Add options to the new dropdown, PLEASE DOUBLE CHECK VALUES
            var options = [
                {text: "Coffee", value: 95},
                {text: "Espresso", value: 63},
                {text: "Black Tea", value: 47},
                {text: "Green Tea", value: 28},
                {text: "Pepsi", value: 38},
                {text: "Coca-Cola", value: 34},
                {text: "Diet Coke", value: 46},
                {text: "Red Bull", value: 80},
                {text: "Monster Energy", value: 160},
                {text: "Mountain Dew (Big Gulp)", value: 135}
            ];


            options.forEach(function(item) {
                var optionElement = document.createElement("option");
                optionElement.value = item.value;
                optionElement.text = item.text;
                newSelect.add(optionElement);
            });

            // Create a new image for this dropdown
            var newImage = document.createElement("img");
            newImage.id = "item-image-" + dropdownCount;
            newImage.className = "item-image";
            newImage.src = "";

            // Add the new label, select, and image to the container
            dropdownContainer.appendChild(document.createElement("br"));  // Line break for spacing
            dropdownContainer.appendChild(newLabel);
            dropdownContainer.appendChild(newSelect);
            dropdownContainer.appendChild(newImage);

            updateImage(dropdownCount);

            // Increment the dropdown count for the next one
            dropdownCount++;
        }


         // Function to calculate the total and pass it to the next page via URL
        function goToResultsPage() {
            var dropdowns = document.getElementsByClassName("item-list");
            var total = 0;

            // Loop through each dropdown and add the selected value to the total
            for (var i = 0; i < dropdowns.length; i++) {
                total += parseInt(dropdowns[i].value); // Convert value to integer and add
            }

            // Redirect to the results page with the total value as a URL parameter
            window.location.href = "results.html?total=" + total;
        }



        // Function to update the image based on selected item for a specific dropdown
        function updateImage(index) {
            var itemList = document.getElementById("item-list-" + index);
            
            // Get the text of the selected option
            var selectedItem = itemList.options[itemList.selectedIndex].text;
            var itemImage = document.getElementById("item-image-" + index);

            console.log("Selected item (text):", selectedItem);
            console.log("Image path being set:", images[selectedItem]);

            // Set the image source to the corresponding image URL
            if (images[selectedItem]) {
                itemImage.src = images[selectedItem];  // Set the correct image
                console.log("Image src after update:", itemImage.src);
            } else {
                itemImage.src = '';  // Clear image if item not found
            }
        }
        // Initialize the first image on page load
        window.onload = function() {
            addDropdown();
            updateImage(0);
        };
        
