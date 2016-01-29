describe('Pizza', function() {
  it("creates an object called Pizza", function() {
    var newPizza = new Pizza(["peppercini", "spinach"], "large", 18);
    expect(newPizza.toppings).to.eql(["peppercini", "spinach"]);
    expect(newPizza.pizzaSize).to.equal("large");
    expect(newPizza.price).to.equal(18);
});

// describe('toppingsCostCalculator', function() {
//   it("will assess the size of the pizza and calculate the cost of toppings based on size", function() {
//     var newPizza = new Pizza()
//     expect(newPizza.toppingsCostCalculator(["onions", "pineapple"], "large")).to.equal(4)
//   });
// });
//
// describe('priceCalculator', function() {
//   it("will assess the pizza size and add the toppingsCost, returning the overall pizza cost", function() {
//     var newPizza = new Pizza()
//     expect(newPizza.priceCalculator(4, "large")).to.equal(15)
//   });
});
