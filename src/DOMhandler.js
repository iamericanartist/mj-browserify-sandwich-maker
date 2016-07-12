
const maker = require('./SandwichMaker'); // "./"" if in same folder,  "../"" if in outer
const bread = require('./bread'); // "./"" if in same folder,  "../"" if in outer
const meat = require('./meat'); // "./"" if in same folder,  "../"" if in outer
const cheese = require('./cheese'); // "./"" if in same folder,  "../"" if in outer
const condiment = require('./condiments'); // "./"" if in same folder,  "../"" if in outer
const veggie = require('./veggies'); // "./"" if in same folder,  "../"" if in outer

var finalSandwichPrice = 0;   //Variable to hold the final price. Default to 0.
var selectedTopping;          //Variable to hold topping that the user selects

// Get references to the <select> elements that have all the varied options
var $breadChooser = $("#breads"),
    $meatChooser = $("#meats"),
    $cheeseChooser = $("#cheeses"),
    $condimentChooser = $("#condiments"),
    $veggieChooser = $("#veggies"),
    $sandwichEl = $("#finalSandwichEl"),  //Our Final Sandwich destination on the DOM
    $totalEl = $("#totalEl");

// A <select> element broadcasts a change event (I went with "click"), so you listen for it
// and get the value of the topping from your augmented IIFE
$breadChooser.click(function(event){
  selectedTopping = event.target.id;                      //Get the value chosen from the DOM
  selectedTopping = selectedTopping.split("--");          //Splitting the selectedTopping gives us an array of "btn [0]" and "(bread choosen [1])"
  
  if (selectedTopping[0] === "btn"){
    let breads = bread.getBreadPrices();          //Returns the object representing our breads and prices
    let breadKey = selectedTopping[1];                    //Represents the bread chosen
    finalSandwichPrice += breads[breadKey];               // Add the topping to the SandwichMaker to increase the total price
    $sandwichEl.append(`+$${breads[breadKey]} for ${selectedTopping[1]}<br>`); //Output to DOM on new line
    $totalEl.empty().append(`$${finalSandwichPrice} current total`); //Overwrites the running total with each new event

    console.log("We selected: ",selectedTopping[1], "at $",breads[breadKey]);   
    console.log("finalSandwichPrice",finalSandwichPrice );
  }
});

$meatChooser.click(function(event) {
  selectedTopping = event.target.id;
  selectedTopping = selectedTopping.split("--");
  
  if (selectedTopping[0] === "btn"){
    let meats = meat.getMeatPrices();
    let meatKey = selectedTopping[1];
    finalSandwichPrice += meats[meatKey];
    $sandwichEl.append(`+$${meats[meatKey]} for ${selectedTopping[1]}<br>`);
    $totalEl.empty().append(`$${finalSandwichPrice} current total`);

    console.log("We selected: ",selectedTopping[1], "at $",meats[meatKey]);
    console.log("finalSandwichPrice",finalSandwichPrice );
  }
});

$cheeseChooser.click(function(event) {
  selectedTopping = event.target.id;
  selectedTopping = selectedTopping.split("--");
  
  if (selectedTopping[0] === "btn"){
    let cheeses = cheese.getCheesePrices();
    let cheeseKey = selectedTopping[1];
    finalSandwichPrice += cheeses[cheeseKey];
    $sandwichEl.append(`+$${cheeses[cheeseKey]} for ${selectedTopping[1]}<br>`);
    $totalEl.empty().append(`$${finalSandwichPrice} current total`);

    console.log("We selected: ",selectedTopping[1], "at $",cheeses[cheeseKey]);
    console.log("finalSandwichPrice",finalSandwichPrice );
  }
});

$condimentChooser.click(function(event) {
  selectedTopping = event.target.id;
  selectedTopping = selectedTopping.split("--");
  
  if (selectedTopping[0] === "btn"){
    let condiments = condiment.getCondimentPrices();
    let condimentKey = selectedTopping[1];
    finalSandwichPrice += condiments[condimentKey];
    $sandwichEl.append(`+$${condiments[condimentKey]} for ${selectedTopping[1]}<br>`);
    $totalEl.empty().append(`$${finalSandwichPrice} current total`);

    console.log("We selected: ",selectedTopping[1], "at $",condiments[condimentKey]);
    console.log("finalSandwichPrice",finalSandwichPrice );
  }
});

$veggieChooser.click(function(event) {
  selectedTopping = event.target.id;
  selectedTopping = selectedTopping.split("--");
  
  if (selectedTopping[0] === "btn"){
    let veggies = veggie.getVeggiePrices();
    let veggieKey = selectedTopping[1];
    finalSandwichPrice += veggies[veggieKey];
    $sandwichEl.append(`+$${veggies[veggieKey]} for ${selectedTopping[1]}<br>`);
    $totalEl.empty().append(`$${finalSandwichPrice} current total`);

    console.log("We selected: ",selectedTopping[1], "at $",veggies[veggieKey]);
    console.log("finalSandwichPrice",finalSandwichPrice );
  }
});


console.log("<<< 7 DOMhandler >>>");
