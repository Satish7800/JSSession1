// let numbers = [1,2,3];

// numbers.forEach(num =>
// {
//     console.log(num);
// });


// let result = numbers.forEach(num => num * 2);

// console.log(result);



// let numbers = [1,2,3];

// let doubled = numbers.map(num => num * 2);

// console.log(doubled);

// difference bitween map and forEach

// 1. forEach its retrun undefined
// 2. map returns an array
// 3. forEach execute code for each element like
//         Ex: // let numbers = [1,2,3];

//         numbers.forEach(num =>
//         {
//             console.log(num); //this code/Statement will execute 3 time
//         });
// 4. map does not change original values



// 1. Current Date & Time

// let today = new Date();

// console.log(today);

// console.log(new Date());



// console.log(Date.now());

// console.log(today.getMonth()+1);

// console.log(today.getDate());

// console.log(today.getDay());

// console.log(today.getHours());

// console.log(today.getMinutes());

// console.log(today.getSeconds());

// console.log(today.getMilliseconds());



let today = new Date();

// Its return the day and date in string.
// console.log(today.toDateString()); 


// its return time in string in 24 hrs formate
// console.log(today.toTimeString());



// its return local date string
// console.log(today.toLocaleDateString());

// Its return local time in string
// console.log(today.toLocaleTimeString());

//Its return local date and time in string
// console.log(today.toLocaleString());


// UTC methods
// Useful when working with users in different time zones.

// console.log(today.getUTCFullYear());
// console.log(today.getUTCMonth());
// today.getUTCDate();
// today.getUTCHours();

// let start = new Date("2026-07-01");
// let end = new Date("2026-07-10");

// let difference = end - start;


// console.log(difference); //milliseconds

// let days = difference / (1000 * 60 * 60 * 24);

// console.log(days);


//  Objects


// What is an Object?

// An object is a collection of key-value pairs.

// let person = {
//     firstName: "Amriteshwar",
//     lastName: "Mishra",
//     age: 25,
//     isStudent: false
// };

// Access object values

// console.log(person.firstName);
// console.log(person);
    // console.log(Object.keys(person));
    // console.log(Object.values(person));



// Another example

// let car = {
//     brand: "BMW",
//     color: "Black",
//     model: "X5",
//     price: 8000000
// };


// console.log(car)


// why object create 
// Becasue, everything belongs together.

// Object Methods

// Objects can store functions/mathod.

// let person = {
//     name: "John",

//     greet: function () {
//         console.log("Hello",this.name);
//     }
// };

// console.log(this);
// person.greet();

// Note: Inside an object method, this refers to the object that called the method.





// Adding New Properties

// let person = {
//     name: "John",
// };

// person.age = 25;

// Deleting object

// delete person.age;

// person.gender = "Male";

// console.log(person);


