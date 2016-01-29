describe('Pizza', function(toppings, pizzaSize, price) {
  it("makes a new pizza, from which more pizzas are made", function() {
    var newPizza = new Pizza(["peppercini", "spinach"], "large", 18);
    expect(newPizza.toppings).to.eql(["peppercini", "spinach"]);
    expect(newPizza.pizzaSize).to.equal("large");
    expect(newPizza.price).to.equal(18);
  });
});


describe('toppingsCostCalc', function(toppings, pizzaSize) {
  it("determines the total cost of toppings, based on pizza size and amount of toppings", function() {
    var newPizza = new Pizza()
    expect(newPizza.toppingsCostCalc(["peppercini", "spinach"], "large")).to.equal(3)
  });
});


describe('pizzaPrice', function() {
  it("provides the total cost of a pizza based on its size and amount of toppings", function() {
    var newPizza = new Pizza()
    expect(newPizza.pizzaPrice(3, "large")).to.equal(18)
  });
});
