// from data.js
var tableData = data;
console.log(tableData);

// d3 to select table body
var tbody = d3.select("tbody");

// UFO Sighting values for each column
tableData.forEach(function(ufoSighting) {
    // Append table row `tr` per from from tableData
    var row = tbody.append("tr");

    // Use `Object.entries` to append td for each value
    Object.entries(ufoSighting).forEach(function([key, value]) {
      var cell = row.append("td");
      cell.text(value);
    });
});


// Select the button
var button = d3.select("#filter-btn");
button.on("click", function() {

    tbody.html("");


    var element = d3.select("#datetime");
    var city = d3.select('#city');
    var state = d3.select('#state');
    var country = d3.select('#country');
    var shape = d3.select('#shape');

    var datetimeValue = element.property("value");
    var cityValue = city.property("value");
    var stateValue = state.property('value');
    var countryValue = country.property('value');
    var shapeValue = shape.property('value');

    if (datetimeValue !== "") {
        // Filter datetime
        var filteredData = tableData.filter(event => event.datetime === datetimeValue);
    } else {
        var filteredData = tableData
    };

    if (cityValue !== "") {
        // Filter City
        var filteredData2 = filteredData.filter(event => event.city === cityValue);
    } else {
        var filteredData2 = filteredData
    }
    
    if (stateValue !== "") {
        // Filter State
        var filteredData3 = filteredData2.filter(event => event.state === stateValue);
    } else {
        var filteredData3 = filteredData2;
    };

    if (countryValue !== "") {
        // Filter Country
        var filteredData4 = filteredData3.filter(event => event.country === countryValue);
    } else {
        var filteredData4 = filteredData3;
    };

    if (shapeValue !== "") {
        // Filter Shape
        var filteredData5 = filteredData4.filter(event => event.shape === shapeValue);
    } else {
        var filteredData5 = filteredData4;
    };

    filteredData5.forEach(function(filteredData) {

    // Repeat same as above for filtered data
    var row = tbody.append("tr");

    Object.entries(filteredData).forEach(function([key, value]) {

        var cell = row.append("td");
        cell.text(value);
    });
});
});