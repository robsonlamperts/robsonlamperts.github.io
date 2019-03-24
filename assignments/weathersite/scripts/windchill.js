// Input - get input and convert that string to an integer
var x = document.getElementById('cc-temp').innerHTML;
var y = document.getElementById('cc-wind').innerHTML;

// Processing - some random formula processing with the variable
var result = 35.74 + 0.6215 * x - 35.75 * Math.pow(y, 0.16) + 0.4275 * x * Math.pow(y, 0.16);

// Output - round to one decimal and output string with HTML to innerHTML of a div
document.getElementById('output').innerHTML = "Wind Chill: " + result.toFixed(1) + "°F";