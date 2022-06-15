// Instructions
// - Use these items and it's respective prices as a starting point: Milk at £1,20, Cocoa at £2,00, Salad at £2,00, Carrots at £2,00, Tomatoes at £2,50, Ready meals at £ 5,00
// - Store this information using the most appropriated data structures we've studied so far
// - Have a prompt to add an item to the list (you can have two prompts for the item and its price)
// - Output a list displaying each item and its price
// - Output the total at the end

// Tips
// - Pay attention to your data types, and what can you do with them

// let shopingList = [
//   ["Milk", 1.2],
//   ["Cocoa", 2],
//   ["Salad", 2],
//   ["Carrots", 2],
//   ["Tomatoes", 2.5],
//   ["Ready meals", 5],
// ];
// let addedItem = prompt("What item do you want to add to your shopping list?");
// let addedPrice = prompt("What is the price of the item you added?");
// shopingList.push([String(addedItem), Number(addedPrice)]);
// console.log(shopingList);
// let total = 0;
// for (let i = 0; i < shopingList.length; i++) {
//   total += shopingList[i][1];
// }
// console.log("The price you need to pay is:", "", "£" + total.toFixed(2));

// Challenge
// We should be able to expand the list. As such, find a way to have two prompts, one for the item and another for the price, asking you repeatedly to add items to your list. The user should be able to stop adding items and then output the list to the user. We can use Google in our favour here if we know the right questions to ask.

let shopingList = [
  ["Milk", 1.2],
  ["Cocoa", 2],
  ["Salad", 2],
  ["Carrots", 2],
  ["Tomatoes", 2.5],
  ["Ready meals", 5],
];


for (let i = 6; i < 10; i++) {
  shopingList.push([String(prompt("What item do you want to add to your shopping list?")), Number(prompt("What is the price of the item you added?"))]);

}
console.log(shopingList);


