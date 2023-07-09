// Retrieve the district select element
var districtSelect = document.getElementById("district");

// Add an event listener for the district select change event
districtSelect.addEventListener("change", function() {
  var selectedDistrict = districtSelect.value;
  var busList = document.getElementById("bus-list");
  
  // Clear any previously displayed buses
  busList.innerHTML = "";
  
  // Simulated AJAX request to retrieve the buses based on the selected district
  // Replace this with your own logic to fetch the data from your database
  setTimeout(function() {
    var buses = getBusesByDistrict(selectedDistrict); // Replace with your own function
    
    if (buses.length === 0) {
      busList.innerHTML = "<p>No buses found for the selected district.</p>";
    } else {
      buses.forEach(function(bus) {
        var busInfo = document.createElement("p");
        busInfo.textContent = "Bus Number: " + bus.number + ", Route: " + bus.route;
        busList.appendChild(busInfo);
      });
    }
  }, 500);
});

// Simulated function to get buses based on the selected district
function getBusesByDistrict(district) {
  var busData = {
    district1: [
      { number: "Bus 1", route: "Route 1" },
      { number: "Bus 2", route: "Route 2" },
    ],
    district2: [
      { number: "Bus 3", route: "Route 3" },
      { number: "Bus 4", route: "Route 4" },
    ],
    district3: [
      { number: "Bus 5", route: "Route 5" },
      { number: "Bus 6", route: "Route 6" },
    ]
  };
  
  return busData[district] || [];
}
