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
    $("button.submit").click(function(event) {
      event.preventDefault();

      var grabSelectedToppings = function() {
        toppingsSelected = [];
        $("#toppings :checked").each(function() {
          toppingsSelected.push($(this).val());
        });
        return toppingsSelected;
      };

      var newPizza = new Pizza(toppings, pizzaSize, price);
      var toppings = grabSelectedToppings();
      var pizzaSize = $("select.pizzaSize").val();
      var priceToppings = newPizza.toppingsCostCalc(toppings, pizzaSize);
      var price = newPizza.pizzaPrice(priceToppings, pizzaSize);

      if (toppings.length === 0) {
        $(".selectedtoppings").show().append("<span class='pizzaInfo'>" +"(you're hungry enough to eat a) " + pizzaSize + " (horse made of pizza)" + "<br>" + "your dream pizza will cost you: $" + price + ".00 <br></span><br>");
      } else {
        $(".selectedtoppings").show().append("<span class='pizzaInfo'>" + toppings + "<br>" + "you're hungry enough to eat a "+ pizzaSize + "<br>" + "Total: $" + price + ".00 </span><br>");
      }


    });
  });
