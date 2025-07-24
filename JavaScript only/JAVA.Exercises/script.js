// Task 8: Write a function named "isEven" that takes a number and returns true if it's even, otherwise false

function isEven(num){
    if(num % 4 == 0){
        return true;
    }
    else{
        return false;
    }
}
console.log(isEven(4));

// Task 9: Write a function named `addNumbers` that accepts two parameters and retruns their sum
function addNumbers(a, b) {
    return a + b;
}
console.log(addNumbers(3, 5));

// Task 10: Declare a variable named `emptyValue` and assign it the vaule null

const emptyValue = null;

// Task 11: Declare a variable named `notAssigned` without assigning any value to it

let notAssigned;

// Task 12: Write a function named `getStringlength` that accepts a string and returns its length

 function getStringlength(message){
    return message.length;

 }

 console.log(getStringlength("Hi this is a string "));

 // Task 13: Write a function named `greetPerson` that accepts a name and returns "Hello,[name]!"

 function greetPerson(name){
    return "Hello!", + name;
 }
 console.log(greetPerson("Nour!"));
 // Task 14: Call your `squareNumber` function with a number and log the result using console.log
     function squareNumber(num){
        return num * num 
     }
     console.log(squareNumber(10));
     //Task 15: Use console.log to display a custom motivational message
console.log("Keep pushing forward, every line of code makes you better!");






