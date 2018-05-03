var animals = ['Dog', 'Cat', 'Bunny', 'Goldfish'];
console.log(animals); 

var pos = 1, n = 2;

var removedItems = animals.splice(pos, n); 
// Removes items from the array.

console.log(animals); 
// ["Dog", "Cat"] is the new array.

console.log(removedItems); 
// ["Bunny", "Goldfish"] are the removed items.