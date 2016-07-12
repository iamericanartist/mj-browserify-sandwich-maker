
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
