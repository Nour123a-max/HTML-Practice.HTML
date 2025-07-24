if statement

let tempearture = 30;

if(temperature > 25){
    console.log("iti is a hot day! stay hydrated");
}


if ... else

const isWeekend = false;

if (isWeekend) {
console.log("Enjoy your weekend")};
else{console.log(" Time to work!")};

if ... else ... else

const marks = 85;

if(marks >= 90) {
    console.log("Grade A");
}
else if (marks >= 80){
    console.log("Grade is B");
}
else if (marks >= 70) {
    console.log("Grade is C");
}
else if (marks >= 60) {
    console.log("Grade D");
}
else {
    console.log("Grade F");
}

// checking for multiple conditions with ( && ), (||)

const age = 20;
const hasDrivingLicense = true;
if(age >= 18 && hasDrivingLicense){
    console.log("You can drive");
} else{
    console.log("You can not drive");
}
 
// Ternary Operator ( ? : )

const isLoggedIn = true;

const msg = isLoggedIn ? "Welcome back !" : "Please log in.";

console.log(msg);