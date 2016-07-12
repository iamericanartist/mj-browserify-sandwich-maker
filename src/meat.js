
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
