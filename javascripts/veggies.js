// console.log("<<<6 IIFE veggies.js loaded >>>");
// This SandwichMaker IIFE augments the original one
var SandwichMaker = (function(maker) {
  // Private variable to store the different veggie prices
  var veggiePrices= {"Lettuce":    0.50, 
                      "Tomato":    1.00, 
                      "Pickle":    0.25, 
                      "Sprouts":   4.50};

  // Augment the original object with another method
  maker.addVeggiePrices = function(thisVeggie) {
    return veggiePrices[thisVeggie];
  };

  maker.getVeggiePrices = function () {
    return veggiePrices
  };

  // Return the new, augmented object with the new method on it
  return maker;
})(SandwichMaker);

console.log("<<<6 IIFE SandwichMaker is sixth >>>");
