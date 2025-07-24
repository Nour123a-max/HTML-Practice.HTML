// console.log(Math.PI);
// console.log(Math.E);  //constant in math objects

// Math.round - rounds a number to the nearest interger
console.log(Math.round(4.6));
console.log(Math.round(4.3));

//Math.floor - Rounds down to the nearest interger
console.log(Math.floor(4.9));
console.log(Math.floor(4.1));


// Math.ceil - rounds up to the nearest interger
console.log("Math.ceil() -------");
console.log("Math.ceil(4.1)", Math.ceil(4.1));

// Math.max and Max.min find the largest / smallest number
console.log("Math.max() ------ ");
console.log("Math.max(10, 20, 5, 50, 35)", Math.max(10, 20, 5, 50, 35));

console.log("Math.min() -------");
console.log("Math.min(10, 20, 5, 50, 35)", Math.min(10, 20, 5, 50, 35));


const nums = [1, 2, 3, 4, 5, 10, 60, 100, 44, 30,]
console.log(nums);
console.log("Math.min(...nums)",Math.min(...nums));

// Math.abs() - Gets the absolute value of a number
// converts negative numbers to positive

console.log("Math.abs(-10)", Math.abs(-10));

// Math.pow() - Power of number 
console.log("Math.pow(2, 3)", Math.pow(2, 3));
    //or
    console.log("2**3", 2**3);

    // Math.sqrt()

    console.log("Math.sqrt")
    console.log("Math.sqrt(25)", Math.sqrt(25));

    // check if a number is a perfect square
    // const num = 16;
    // if(Math.sqrt(num) % 1 == 0){
    //     console.log("is a  perfect square");   
    // }else{
    //     console.log("is not a perfect square")
    // }

    console.log('function to see if perfect square')
    function isPerfectSquare(num){
        if(Math.sqrt(num) % 1 === 0) return true; return false;
    }
    console.log("isPerfectSquare(10)", isPerfectSquare(10));
        console.log("isPerfectSquare(16)", isPerfectSquare(16));
            console.log("isPerfectSquare(25)", isPerfectSquare(25));
                console.log("isPerfectSquare(27)", isPerfectSquare(27)); 


    



    





