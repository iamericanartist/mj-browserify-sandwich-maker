// console.log("<<<2 IIFE bread.js loaded >>>");
// This SandwichMaker IIFE augments the original one
var SandwichMaker = (function(maker) {
  // Private variable to store the different bread prices
  var breadPrices= {"Rhye":     2.00, 
                    "Wheat":    2.75, 
                    "White":    3.75, 
                    "Stale":    0.50};

  // Augment the original object with another method
  maker.addBreadPrices = function(thisBread) {
    return breadPrices[thisBread];
  };

  maker.getBreadPrices = function () {
    return breadPrices
  };

  // Return the new, augmented object with the new method on it
  return maker;
})(SandwichMaker);

console.log("<<<2 IIFE SandwichMaker is second >>>");
