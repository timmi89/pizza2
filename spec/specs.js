describe('Pizza', function() {
  it("creates an object called Pizza", function() {
    var newPizza = new Pizza(["peppercini", "spinach"], "large", 18);
    expect(newPizza.toppings).to.eql(["peppercini", "spinach"]);
    expect(newPizza.pizzaSize).to.equal("large");
    expect(newPizza.price).to.equal(18);
  });
});


describe('toppingsCostCalc', function() {
  it("will assess the size of the pizza and calculate the cost of toppings based on size", function() {
    var newPizza = new Pizza()
    expect(newPizza.toppingsCostCalc(["peppercini", "spinach"], "large")).to.equal(3)
  });
});


describe('pizzaPrice', function() {
  it("will assess the pizza size and add the toppingsCost, returning the overall pizza cost", function() {
    var newPizza = new Pizza()
    expect(newPizza.pizzaPrice(3, "large")).to.equal(18)
  });
});
