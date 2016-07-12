
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
