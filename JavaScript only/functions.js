 function greet(){
    console.log("Hello, welcome to javascript");

 }


 greet(); //calling the function

function greetUser(name){
    console.log(`Hello, ${name}!`);
}

greetUser("Alice");
greetUser("Bob");

function addNumbers(num1, num2, num3){ // functions with multiple parameters 
    console.log(`Sum: ${num1 + num2 + num3}`);
}

addNumbers(5,10) 
addNumbers(10,10)

const greet = function(name){ // Functions Expressions
    return `Hello, ${name}`;

};

console.log(greet("Alice")) 

Arrow Functions ( Shorter Syntax )

const square = (num) => num**2;

console.log(square(5));


const multiply = (a, b) => {
    return a*b;
}
 console.log(multiply(3, 4));

 Function Scope and Hoisting 

 let globalVar = "I am global";

 function testScope() {
    let localVar = "I exists only in this function";
    console.log(globalVar);
    console.log(localVar);

 }


 testScope()
 console.log(globalVar);
 console.log(localVar);

 hello(); //function declaration

 function hello() {
    console.log("Hello from a function declaration");
 }

greet()

const greet = function() {
    console.log("HELLO FROM A FUNCTION EXPRESSION");
}