
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
