// console.log("<<<4 IIFE cheese.js loaded >>>");
// This SandwichMaker IIFE augments the original one
var SandwichMaker = (function(maker) {
  // Private variable to store the different cheese prices
  var cheesePrices= {"American":  4.00, 
                    "Colby":      1.75, 
                    "Jack":       2.75, 
                    "Cheddar":    1.50};

  // Augment the original object with another method
  maker.addCheesePrices = function(thisCheese) {
    return cheesePrices[thisCheese];
  };

  maker.getCheesePrices = function () {
    return cheesePrices
  };

  // Return the new, augmented object with the new method on it
  return maker;
})(SandwichMaker);

console.log("<<<4 IIFE SandwichMaker is fourth >>>");
