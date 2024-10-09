        // Function to add a new dropdown dynamically
        function addDropdown() {
            var dropdownContainer = document.getElementById("dropdown-container");

            // Create a new label and dropdown select element
            var newLabel = document.createElement("label");
            newLabel.innerText = "Choose a drink: ";

            var newSelect = document.createElement("select");
            newSelect.className = "item-list";

            // Add options to the new dropdown
            var options = [
                {text: "Drink 1", value: 10},
                {text: "Drink 2", value: 20},
                {text: "Drink 3", value: 30}
            ];


            options.forEach(function(item) {
                var optionElement = document.createElement("option");
                optionElement.value = item.value;
                optionElement.text = item.text;
                newSelect.add(optionElement);
            });

            // Add the new label and dropdown to the container
            dropdownContainer.appendChild(document.createElement("br")); // Adds a line break for spacing
            dropdownContainer.appendChild(newLabel);
            dropdownContainer.appendChild(newSelect);
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

                // Function to get URL parameters
                function getQueryParameter(name) {
                    const urlParams = new URLSearchParams(window.location.search);
                    return urlParams.get(name);
                }
        
                // Display the total from the URL
                var totalValue = getQueryParameter("total");
                document.getElementById("total-display").innerText = totalValue;