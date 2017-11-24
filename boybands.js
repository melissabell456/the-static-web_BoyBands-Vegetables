// Loop through the two arrays provided (bands and vegetables) and output each element in the arrays into their corresponding HTML <div> element. Ensure that each item is in a block element (e.g. li, div, p. etc...)
var bands = ["Boyz II Men", "NSync", "New Kids on the Block", "98 Degrees", "One Direction"];
var vegetables = ["Carrots", "Kale", "Zucchini", "Broccoli", "Squash"];

function bbv() {
var loopCount = 5;
// The number of loops to perform (what if the array changes?) 
    //this will limit the loop to only pulling array items in index 0-4 

// Keep track of which band we're on in the loop
var currentBand = "";

// Keep track of which veggie we're on in the loop
var currentVeggie = "";

// Get a reference to the appropriate DOM element for bands
var bandElement = document.getElementById("boy-bands");

// Get a reference to the appropriate DOM element for vegetables
var veggieElement = document.getElementById("vegetables");

// Start looping
for (var loopTracker = 0; loopTracker < loopCount; loopTracker++) {
  
  // Add the band names into the correct <div>
  currentBand = bands[loopTracker]
  console.log(currentBand);
  bandElement.innerHTML+="<h2>" + currentBand + "</h2>";
  
  // Add the veggie names into the correct <div>
  currentVeggie = vegetables[loopTracker]
  console.log(currentVeggie);
  veggieElement.innerHTML+="<h3>" + currentVeggie + "</h3>";
}
};

bbv(bands, vegetables);