        // Function to get URL parameters
        function getQueryParameter(name) {
                const urlParams = new URLSearchParams(window.location.search);
                return urlParams.get(name);
     }      
      
      // Display the total from the URL
        var totalValue = getQueryParameter("total");
        document.getElementById("total-display").innerText = totalValue;