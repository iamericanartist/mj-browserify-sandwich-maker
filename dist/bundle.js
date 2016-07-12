(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){

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

},{"./SandwichMaker":2,"./bread":4,"./cheese":5,"./condiments":6,"./meat":7,"./veggies":8}],2:[function(require,module,exports){

var totalPrice = 0;     // Private variable to store the sandwich PRICE

function addTopping(toppingPrice) {
  totalPrice += toppingPrice;
	$sandwichEl.append(totalPrice); 
  console.log("Currently $",totalPrice);
};

module.exports = addTopping;
console.log("<<< 1 SandwichMaker >>>");

},{}],3:[function(require,module,exports){
const Maker = require('./DOMhandler'); // "./"" if in same folder,  "../"" if in outer

},{"./DOMhandler":1}],4:[function(require,module,exports){

const maker = require('./SandwichMaker'); // "./"" if in same folder,  "../"" if in outer

var breadPrices= {"Rhye":     2.00, 
                  "Wheat":    2.75, 
                  "White":    3.75, 
                  "Stale":    0.50};

var addBreadPrices = function(thisBread) {
  return breadPrices[thisBread];
};

var getBreadPrices = function () {
  return breadPrices
};

module.exports = {addBreadPrices, getBreadPrices};
console.log("<<< 2 Bread >>>");

},{"./SandwichMaker":2}],5:[function(require,module,exports){

const maker = require('./SandwichMaker'); // "./"" if in same folder,  "../"" if in outer

var cheesePrices= {"American":  4.00, 
                  "Colby":      1.75, 
                  "Jack":       2.75, 
                  "Cheddar":    1.50};

var addCheesePrices = function(thisCheese) {
  return cheesePrices[thisCheese];
};

var getCheesePrices = function () {
  return cheesePrices
};

module.exports = {addCheesePrices, getCheesePrices};
console.log("<<< 4 Cheese >>>");

},{"./SandwichMaker":2}],6:[function(require,module,exports){

const maker = require('./SandwichMaker'); // "./"" if in same folder,  "../"" if in outer

var condimentPrices= {"Ketchup":        1.00, 
                      "Mayo":           1.75, 
                      "Mustard":        1.75, 
                      "PB":  3.50};

var addCondimentPrices = function(thisCondiment) {
  return condimentPrices[thisCondiment];
};

var getCondimentPrices = function () {
  return condimentPrices
};

module.exports = {addCondimentPrices, getCondimentPrices};
console.log("<<< 5 Condiment >>>");

},{"./SandwichMaker":2}],7:[function(require,module,exports){

const maker = require('./SandwichMaker'); // "./"" if in same folder,  "../"" if in outer

var meatPrices= {"Turkey":    2.00, 
                  "Ham":      2.75, 
                  "Spam":     3.75, 
                  "Bologna":  0.50};

var addMeatPrices = function(thisMeat) {
  return meatPrices[thisMeat];
};

var getMeatPrices = function () {
  return meatPrices
};

module.exports = {addMeatPrices, getMeatPrices};
console.log("<<< 3 Meat >>>");

},{"./SandwichMaker":2}],8:[function(require,module,exports){

const maker = require('./SandwichMaker'); // "./"" if in same folder,  "../"" if in outer

var veggiePrices= {"Lettuce":    0.50, 
                    "Tomato":    1.00, 
                    "Pickle":    0.25, 
                    "Sprouts":   4.50};

var addVeggiePrices = function(thisVeggie) {
  return veggiePrices[thisVeggie];
};

var getVeggiePrices = function () {
  return veggiePrices
};

module.exports = {addVeggiePrices, getVeggiePrices};
console.log("<<< 6 Veggie >>>");

},{"./SandwichMaker":2}]},{},[3])


//# sourceMappingURL=bundle.js.map
