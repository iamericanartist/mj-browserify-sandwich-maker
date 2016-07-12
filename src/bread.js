
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
