// Instructions
// - Use these items and it's respective prices as a starting point: Milk at £1,20, Cocoa at £2,00, Salad at £2,00, Carrots at £2,00, Tomatoes at £2,50, Ready meals at £ 5,00
// - Store this information using the most appropriated data structures we've studied so far
// - Have a prompt to add an item to the list (you can have two prompts for the item and its price)
// - Output a list displaying each item and its price
// - Output the total at the end

// Tips
// - Pay attention to your data types, and what can you do with them

let shopingList = [
    ['Milk', 1.2],
    ['Cocoa', 2],
    ['Salad', 2],
    ['Carrots', 2],
    ['Tomatoes', 2.5],
    ['Ready meals', 5]
]
let addedItem = prompt('What item do you want to add to the list?');
let addedPrice = prompt('What is the price of the item?');
shopingList.push([String(addedItem), Number(addedPrice)]);
console.log(shopingList);
