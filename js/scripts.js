function Pizza(toppings, pizzaSize, price) {
  this.toppings = toppings;
  this.pizzaSize= pizzaSize;
  this.price = price;
}

Pizza.prototype.toppingsCostCalc = function(toppings, pizzaSize) {
  var moreToppings = toppings.length;
  if(pizzaSize === "small" || pizzaSize === "medium"){
    var toppingsCost = (moreToppings) * (1);
  } else {
    var toppingsCost = (moreToppings) * (1.5);
  }
  return toppingsCost;
}


  Pizza.prototype.pizzaPrice = function(toppingsCost, pizzaSize){
    if (pizzaSize === "small"){
      var totalCost = toppingsCost + 9;
    } else if (pizzaSize === "medium"){
      var totalCost = toppingsCost + 12;
    } else {
      var totalCost = toppingsCost + 15;
    }
    return totalCost;
  }

$(document).ready(function() {


});
