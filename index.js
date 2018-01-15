
// could not get the import to work
// var $datetime = document.querySelector("datetime");
// var $city = document.querySelector("city");
// var $state = document.querySelector("state");
//var $country = document.querySelector("country");
//var $shape = document.querySelector("shape");
//var $durationMinutes = document.querySelector("durationMinutes");
//var $comments = document.querySelector("comments");


//$tbody.innerHTML = "";

//for (var i = 0; i < len(dataSet); i++) {
//  var $row = $tbody.insertRow(i);
  // Insert five cells into the newly created row
//  for (var j = 0; j < 7; j++) {
//    var $cell = $row.insertCell(j);
//    $cell.innerText = data[j];
//  }
//}

var $tbody = document.querySelector("tbody");
var $datetimeInput = document.querySelector("#datetime");
var $searchBtn = document.querySelector("#search");


$searchBtn.addEventListener("click", handleSearchButtonClick);

var searchData = dataSet;

function renderTable() {
  $tbody.innerHTML = "";
  for (var i = 0; i < searchData.length; i++) {
    var address = searchData[i];
    var fields = Object.keys(address);
    var $row = $tbody.insertRow(i);
    for (var j = 0; j < fields.length; j++) {
      var field = fields[j];
      var $cell = $row.insertCell(j);
      $cell.innerText = address[field];
    }
  }
}

function handleSearchButtonClick() {
  var filterDate = $datetimeInput.value;
  console.log (filterDate);
  searchData = dataSet.filter(function(address) {
    var addressDate = address.datetime;

    // If true, add the address to the filteredAddresses, otherwise don't add it to filteredAddresses
    return addressDate === filterDate;
  });
  renderTable();
}

// Render the table for the first time on page load
renderTable();
