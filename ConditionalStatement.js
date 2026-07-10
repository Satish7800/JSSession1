// Types of Conditional Statements

// JavaScript provides these conditional statements:

// if
// if...else
// if...else if...else
// Nested if
// Ternary Operator (? :)
// switch

// 1. if Statement

// Runs a block only if the condition is true.

// Syntax
// if (condition) {
//     // code
// }

// ex:
    // let age = 20;

    // if (age >= 18) {
    //     console.log("You can vote.");
    // }

    //if the condition is false then skipped the if block.


// 2. if...else Statement 
// If the condition is true, execute one block. Otherwise, execute another block.

 
// Syntax

// if (condition) {

// }
// else {

// }

// ex:
    // let age = 15;

    // if (age >= 18) {
    //     console.log("Eligible");
    // }
    // else {
    //     console.log("Not Eligible");
    // }

// Ex:
// let number = 2024;

// if (number % 4 == 0) {
//     console.log("Leap year");
// }
// else {
//     console.log("Not leap year");
// }


// 3. if...else if...else 
// It is use to checking multiple conditions.

// Syntax
    // if (condition1) {

    // }
    // else if (condition2) {

    // }
    // else if (condition3) {

    // }
    // else {

    // }

    // Ex:

    // let marks = 60;

    // if (marks >= 90) {
    //     console.log("Grade A");
    // }
    // else if (marks >= 80) {
    //     console.log("Grade B");
    // }
    // else if (marks >= 70) {
    //     console.log("Grade C");
    // }
    // else {
    //     console.log("Fail");
    // }


    // 4. Nested if

    // An if inside another if.

    // Example

    // let age = 25;
    // let hasDL = true;

    // if (age >= 18) {

    //     if (hasDL) {
    //         console.log("You can drive.");
    //     }

    // }

    // Another Example

    // let username = "adminw";
    // let password = "1234";

    // if (username == "admin") {

    //     if (password == "1234") {
    //         console.log("Login Successful");
    //     }
    //     else {
    //         console.log("Wrong Password");
    //     }

    // }
    // else {
    //     console.log("Invalid Username");
    // }


    // 5. Ternary Operator
    // A short form of if...else.

    // Syntax
    // condition ? value1 : value2;

    // Example

    // let num = 22;

    // let result = num %2==0 ? "Even" : "Odd";

    // console.log(result);


    // 6. switch Statement

    // Used when comparing one value against many possible values.

    // Syntax
    // switch(expression){

    //     case value1:
    //         code
    //         break;

    //     case value2:
    //         code
    //         break;

    //     default:
    //         code
    // }


    // Example

    // let day = 3;

    // switch(day){

    //     case 1:
    //         console.log("Monday");
    //         break;

    //     case 2:
    //         console.log("Tuesday");
    //         break;

    //     case 3:
    //         console.log("Wednesday");
    //         break;

    //     default:
    //         console.log("Invalid Day");
    // }


    // Why is break Important?

    // Without break, execution continues into the following cases.

        // let day = 2;

        // switch(day){

        //     case 1:
        //         console.log("Monday");

        //     case 2:
        //         console.log("Tuesday");

        //     case 3:
        //         console.log("Wednesday");

        //     default:
        //         console.log("Invalid");
        // }