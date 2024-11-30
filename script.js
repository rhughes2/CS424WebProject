var images = {
    "Diet Coke": "./media/diet-coke.png",
    "Coffee": "./media/coffee.png",
    "C4 Energy": "./media/c4.png"
};
        
        // Function to add a new dropdown dynamically
        let dropdownCount = 0;
        function addDropdown() {
            console.log(dropdownCount);
            if (dropdownCount < 5)
            {
                var dropdownContainer = document.getElementById("dropdown-container");
        
                var newLabel = document.createElement("label");
                newLabel.innerText = "Choose a drink:";
            
                var newSelect = document.createElement("select");
                newSelect.id = "item-list-" + dropdownCount;
                newSelect.className = "item-list";
                newSelect.setAttribute("onchange", "updateImage(" + dropdownCount + ")");
            
                // Fetch data and populate options
                fetch('./drinks.json')
        .then(response => response.json())
        .then(data => {
            data.forEach(function(item) {
                var optionElement = document.createElement("option");
                optionElement.value = item.value;
                optionElement.text = item.text;
                newSelect.add(optionElement);
            });
    
            // Add the populated dropdown to the container
            dropdownContainer.appendChild(document.createElement("br")); // Line break
            dropdownContainer.appendChild(newLabel);
            dropdownContainer.appendChild(newSelect);
    
            // Create and add a new image for this dropdown
            var newImage = document.createElement("img");
            newImage.id = "item-image-" + dropdownCount;
            newImage.className = "item-image";
            newImage.src = "";
            dropdownContainer.appendChild(newImage);
    
            // Call updateImage after dropdown is fully created
            updateImage(dropdownCount); // Initialize the image
            // Increment the dropdown count for the next one
            dropdownCount++;
        })
        .catch(error => console.error('Error loading JSON:', error));
            }
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
            console.log("Looking for element:", "item-list-" + index);
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
        

