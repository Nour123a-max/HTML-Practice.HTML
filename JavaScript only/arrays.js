const fruits = ["Apple", "Bannana", "Cherry"];
console.log(fruits);



// Declaring and Manipulating Arrays 
console.log(fruits[0])

// modifying arrays
console.log(fruits[1]) // would give me bannana but if i do 

fruits[1] = "Blueberry";


console.log(fruits);

console.log(fruits.length)

// Array Methods

const mango = fruits.push("Mango"); // add one or more element at the end of an array


console.log(fruits);

fruits.pop(); // removes last element of an array
console.log(fruits)

fruits.shift(); // removes the first element of an array
console.log(fruits)

fruits.unshift("Grapes") // adds to the beginning of an array
console.log(fruits)

// splice -add/ remove elements

fruits.splice(1, 1, "Peach")
console.log(fruits);

fruits.splice(1,2)
console.log(fruits);
//map

const numbers = [1, 2, 3, 4, 5];
console.log("numbers =", numbers);
const doubled = numbers.map(num => num * 2);
console.log("doubled =", doubled);
console.log("numbers =", numbers);


console.log("numbers =", numbers);
const doubled = numbers.map((num) => num * 2);
console.log("doubled =", doubled);

//filter
const evenNumbers = numbers.filter(num => num / 2 === 0)
console.log(evenNumbers);











