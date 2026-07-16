

// There are 7 commonly used loops/looping

// for
// while
// do...while
// for...of
// for...in
// forEach() (Array method)
// map() (Array method used for transformation)

// We'll cover each in detail.


// 1. for Loop

// The for loop is used when you know how many times the loop should execute.

// Syntax

// for(initialization; condition; increment/decrement)
// {
//     // code
// }


// Without Loop

// console.log(1);
// console.log(2);
// console.log(3);
// console.log(4);
// console.log(5);


// Example

// for(let i=1; i<=5; i++){
//     console.log(i);
// }

// Understanding each part

// for(let i=1; i<=5; i++)

// Initialization
// let i = 1;
// Runs only once.

// Condition
// i <= 5

// If true, the loop continues.

// If false, it stops.


// Increment
// i++

// Runs after each iteration.


// Reverse Loop
    // for(let i = 5; i >= 1; i--)
    // {
    //     console.log(i);
    // }

// Even Numbers
// for(let i = 10; i <= 30; i += 2) 
// {
//     console.log(i);
// }

// Odd Numbers
// for(let i = 1; i <= 20; i += 2)
// {
//     console.log(i);
// }

// Multiplication Table
// let number = 7;

// for(let i = 1; i <= 10; i++)
// {
//     console.log(number + " x " + i + " = " + number * i);
// }

// 2. while Loop

// It is use when you don't know exactly how many times the loop should run.

// Syntax
// while(condition)
// {
//     // code
// }

// Example:

// let i = 1;

// while(i <= 5)
// {
//     console.log(i);

//     i++;
// }

// Run it in console 

// let password = "";

// while(password !== "admin")
// {
//     password = prompt("Enter Password");
// }


// Execution


// Condition -> True -> Execute -> Increment -> Condition Again


// 3. do...while Loop

// The code executes at least once.

// Syntax

// do
// {
//     // code
// }
// while(condition);


// Example

// let i = 1;

// do
// {
//     console.log(i);
//     i++;
// }
// while(i <= 10);

// Difference Between while and do...while

// while

// let i = 10;

// while(i <= 15)
// {
//     console.log(i);
//     i++;
// }

// do while

// let i = 10;

// do
// {
//     console.log(i);
//     i++;
// }
// while(i <= 15);



// 4. for...of Loop

// Its used for iterating over iterable objects like arrays and strings.

// Array Example

// let users = ["Ajay","Vijay","Vikas","Vivek"];

// for(let user of users)
// {
//     console.log(user);
// }


// String Example
// let name = "JavaScript";

// for(let letter of name)
// {
//     console.log(letter);
// }


// 5. for...in Loop

// its used to iterate over object property names (keys).

let person =
{
    name:"Satish",
    age:30,
    city:"Delhi"
};

// We get keys of object

// for(let key in person)
// {
//     console.log(key);
// }


// To get the values of boject

// for(let key in person)
// {
//     console.log(person[key]);
// }

// To get both keys and values

// for(let key in person)
// {
//     console.log(key, person[key]);
// }

// 6. forEach()

// This is an array method, not a language loop.

// let numbers = [10,20,30];

// numbers.forEach(function(num)
// {
//     console.log(num);
// });

// Using Arrow Function

// let numbers = [10,20,30];
// numbers.forEach(num => console.log(num));


// Access Index
// let numbers = [10,20,30];
// numbers.forEach(function(value,index)
// {
//     console.log(index,value);
// });


// Nested Loops

// Loop inside another loop.

// for(let i = 1; i <= 3; i++)
// {
//     for(let j = 1; j <= 3; j++)
//     {
//         console.log(i,j);
    
//     }
// }


// break Statement

// Stops the loop immediately.

// for(let i = 1; i <= 10; i++)
// {
//     if(i == 4)
//         break;

//     console.log(i);
// }

// continue Statement

// Skips the current iteration.

// for(let i = 1; i <= 5; i++)
// {
//     if(i == 3)
//         continue;

//     console.log(i);
// }


// Infinite Loop
// while(true)
// {
//     console.log("Hello");
// }


// let i = 1;

// while(i <= 5)
// {
//     console.log(i);
// }



// let reversed = "";
// let str = "Suman";

// for (let char of str)
// {
//     reversed = char + reversed;
// }
// console.log(reversed);



