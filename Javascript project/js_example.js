let helloworld='hello world';
console.log(helloworld);


let itemA = 29.99;
let itemB = 49.99;
let itemC = 19.99;

let arrayShoppingCart = [itemA,itemB,itemC]
let shoppingCartCost=0;
let taxRate=7;

for (let i = 0; i< arrayShoppingCart.length; i++)
    {
       shoppingCartCost+=(arrayShoppingCart[i]);
      }

console.log("the cost of the shopping cart with no taxes is " + shoppingCartCost)

for (let i = 0; i< arrayShoppingCart.length; i++)
    {
        console.log("the cost of the tax for each item is $" + arrayShoppingCart[i]*taxRate/100)
      }
    
let shoppingCartCostAfterTax = (shoppingCartCost)*(taxRate/100)

console.log("the total cost of the shopping cart is " + shoppingCartCostAfterTax)

