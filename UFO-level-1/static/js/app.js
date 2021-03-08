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

    var inputValue = element.property("value");
    // Filter datetime
    var filteredData = tableData.filter(event => event.datetime === inputValue);

    filteredData.forEach(function(filteredData) {

    // Repeat same as above for filtered data
    var row = tbody.append("tr");

    Object.entries(filteredData).forEach(function([key, value]) {

        var cell = row.append("td");
        cell.text(value);
    });
});
});