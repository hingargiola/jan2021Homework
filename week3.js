let pizzaToppings = ["pepperoni", "sausage", "black olives", "bacon"];
function greetCustomer() {
let greeting = `Welcome to Ingargiola's, our toppings are `;
for (topping of pizzaToppings) {
  greeting += `${topping},`
}
console.log(greeting)
};
greetCustomer();

function getPizzaOrder(size, crust, ...toppings) {
  let order = `One ${size}${crust} crust with ${toppings}`;
  console.log(`One ${size}${crust} crust with ${toppings} Coming up!`);
  return [size, crust, topping];
};
let customerOrder = getPizzaOrder("Large", " Thick",  "Bacon", "Black Olives", "Sausage");

function preparePizza([orderSize, orderCrust, orderTopping]){
console.log("...Cooking Pizza...");
return { size: orderSize, crust: orderCrust, toppings: orderTopping };
}
let cookedPizza = preparePizza(customerOrder);
function servePizza(pizza){
  let orderReady = `Order Up! Here is your ${pizza.size} ${pizza.crust} crust with `;
  for (let topping of pizzaToppings) {
    orderReady += `${topping}, `;  }
    console.log(`${orderReady}. Enjoy!`);
    return pizza;
}
servePizza(cookedPizza);


