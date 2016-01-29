function Pizza(toppings, pizzaSize, price) {
  this.toppings = toppings;
  this.pizzaSize= pizzaSize;
  this.price = price;
}

Pizza.prototype.toppingsCost = function () {
  for (var i = 0; i < this.toppings.length; i++){
    this.price += 1.25;
  }
 return this.price;
};
// Pizza.prototype.toppingsCostCalculator = function(toppings, pizzaSize) {
//   var extraToppings = toppings.length;
//   if (pizzaSize === "medium") {
//     var toppingsCost = (extraToppings)*(1.5);
//   } else if (pizzaSize === "large") {
//     var toppingsCost = (extraToppings)*(2);
//   } else {
//     var toppingsCost = extraToppings;
//   }
//   return toppingsCost;
// }
//
// Pizza.prototype.priceCalculator = function(toppingsCost, pizzaSize) {
//   if (pizzaSize === "small") {
//     var totalCost = toppingsCost + 7;
//   } else if (pizzaSize === "medium") {
//     var totalCost = toppingsCost + 9;
//   } else {
//     var totalCost = toppingsCost + 11;
//   }
//   return totalCost;
// }
// //
// // $(document).ready(function() {
// //
});
