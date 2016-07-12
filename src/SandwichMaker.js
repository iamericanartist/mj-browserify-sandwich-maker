
var totalPrice = 0;     // Private variable to store the sandwich PRICE

function addTopping(toppingPrice) {
  totalPrice += toppingPrice;
	$sandwichEl.append(totalPrice); 
  console.log("Currently $",totalPrice);
};

module.exports = addTopping;
console.log("<<< 1 SandwichMaker >>>");
