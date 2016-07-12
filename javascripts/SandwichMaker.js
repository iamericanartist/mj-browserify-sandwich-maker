// console.log("<<<1 IIFE SandwichMaker.js loaded >>>");
//Kick off our IIFE object here... START:
var SandwichMaker = (function() {
  var totalPrice = 0;     // Private variable to store the sandwich PRICE

  // Return the public interface that other code can interact with
  return {
    addTopping: function(toppingPrice) {
      totalPrice += toppingPrice;
			$sandwichEl.append(totalPrice); 
      console.log("Currently $",totalPrice);
    }
  };
})();

///////////////////////LOOSE AUGMENTATION///////////////////////
//////  Alternatively we could open and close each IIFE with:
//////  var SandwichMaker = (function(maker) {
//////    STUFF
//////  })(SandwichMaker || {});

console.log("<<<1 IIFE SandwichMaker is first >>>");
