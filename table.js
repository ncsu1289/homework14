from data.js import *


var $datetime = document.querySelector("datetime");
var $city = document.querySelector("city");
var $state = document.querySelector("state");
var $country = document.querySelector("country");
var $shape = document.querySelector("shape");
var $durationMinutes = document.querySelector("durationMinutes");
var $comments = document.querySelector("comments");


$tbody.innerHTML = "";

for (var i = 0; i < len(dataSet); i++) {
  var $row = $tbody.insertRow(i);
  // Insert five cells into the newly created row
  for (var j = 0; j < 7; j++) {
    var $cell = $row.insertCell(j);
    $cell.innerText = addressData[j];
  }
}