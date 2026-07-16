//In JavaScript, a function is a reusable block of code designed to perform a specific task.

// 1. Function Declaration

    // function welcome() {
    //     console.log("function!");
    // }

    // welcome();

// function -> keyword to define a function
// welcome -> function name
// {} -> block of code
// welcome() -> calls/runs the function


// 2. Functions with Parameters


// function welcome(x,y,z, ...num) {
//     console.log(num);
//     console.log(x+y+z);
// }

// welcome(10,12,287,21,12,343,2434);



// name is a parameter
// "Ram" is an argument passed to the function


// 3. Return Statement

// Functions can return values.

// function add(x, y) {
//     console.log("Hello add!");
//     return x - y;
// }

// let result = add(18, 9);
// console.log(result);

//Note:- return sends a value back


// 4. Function Expression
// A function can be stored in a variable.

// const hello = function() {
//     console.log("Hi!");
// };

// hello();


// 5. Arrow Functions
// Modern and shorter syntax.

// const add = (x, y) => {
//     return result = x * y;
// };

// console.log(add(4,5));


// Shorter version

// const add = (y, x) => y + x;

// console.log(add(2, 4));

// Note:- => is called the arrow operator

// 6. Anonymous Functions 
// Functions without names.

// setTimeout(function() {
//     console.log("Executed later");
// }, 1000);

//Often passed as arguments


// 7. Callback Functions
// A function passed into another function.

// function processUser(name, call) {
//     console.log("Processing " + name);
//     call();
// }

// processUser("Ritesh", function() {
//     let x=5;
//     let y=10;
//     console.log(`Sum of two number is = ${x+y}`);
    
// });


// 8. Higher-Order Functions
// take other functions as arguments, or
// return functions

// Example:

// function multiplier(x) {
//     return function(y) {
//         return x * y;
//     };
// }

// const double = multiplier(2);

// console.log(double(5));


// 9. Default Parameters

// Set default values for parameters.

// function welcome(name = "Guest") {
//     console.log("Hello " + name);
// }

// welcome();

// 10. Immediately Invoked Function Expression (IIFE)
// Runs immediately after being defined.
// It is commonly used to create a private scope

    // (function(x,y) {
    //     var a = 10;
    //     console.log("I run immediately");
    //     console.log(`${x+y}`)
    // })(2,5);

    // console.log(a);
   
// 11. Recursive Functions
// Functions calling themselves.

    // function countdown(n) {
    //     if (n <= 0) return;

    //     console.log(n);
    //     countdown(n - 1);
    // }

    // countdown(5);


  
    
 
    

