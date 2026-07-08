//Note:- An array is a special object that stores multiple values in a single variable.
// Instead of creating many variables

// let student1 = "Ramesh";
// let student2 = "Suresh";
// let student3 = "Amit";

// In array we can store

// let students = ["Ramesh", "Suresh", "Amit"];

// const numbers = [];
// const numbers = Array.of(10, 20, 30); //Creates an array from the values you provide.

// console.log(students);

// Advantages of array:

// Stores multiple values
// Easy to loop
// Easy to search
// Easy to sort
// Easy to modify

// Creating Array
// 1. Array Literal (Recommended)
// let fruits = ["Apple", "Banana", "Mango"];

// 2.Using Array Constructor 
// let fruits = new Array("Apple", "Banana", "Mango");


// Array can store different data types
// let data = [
//     "Ramesh",
//     25,
//     true,
//     null,
//     undefined
// ];

// console.log(data)

// Array Index

// JavaScript arrays start from 0.


// let colors = ["Red", "Green", "Blue"];

// console.log(colors[0]);
// console.log(colors[1]);
// console.log(colors[2]);


// Change Array Value
// let fruits = ["Apple", "Banana", "Mango"];

// console.log(fruits);

// fruits[1] = "Orange";

// console.log(fruits);


// Array Length
// let fruits = ["Apple","Banana","Mango"];

// console.log(fruits.length);

// Array Methods/functions

// 1. push()

// The push() function is used to add element at the end of array.

// let fruits = ["Apple","Banana"];

// // let fruits2 = ['Mango','Grapes'];
// fruits.push('mango');

// console.log(fruits);




// 2.unshift()

// The unshift() function is used to add a element at beginning of array.

// let fruits = ["Banana","Mango"];

// fruits.unshift("Apple");

// console.log(fruits);


// 3.pop() it is used to remove last element from an array.

// let fruits = ["Apple","Banana","Mango"];

// console.log(fruits);

// fruits.pop();

// console.log(fruits);


// 4.shift() this function is used to Removes first element from an array.


// let fruits = ["Apple","Banana","Mango"];

// fruits.shift();

// console.log(fruits);



// 5. concat() this function is used to Combines two arrays

// let a = [1,2];
// let b = [3,4,5,6];

// let c = a.concat(b);

// console.log(c);


// 6.join() this function is used to Converts array to string.

// let fruits = ["Apple","Banana","Mango"];

// console.log(fruits.join(" "));

// 7.includes() this function is used to Checks if value exists, it return true/false

// let fruits = ["Apple","Banana","Mango"];

// console.log(fruits.includes("Banansa"));


// 8.indexOf() this function return index of array. if not found then it return -1.

// let fruits = ["Apple","Banana","Mango"];

// console.log(fruits.indexOf("Apple"));

// 9.reverse() it reverse the array. 

// let numbers = [1,2,5,3];
// let colors = ['Red','Green','Yellow'];

// colors.reverse();

// console.log(colors);


// 10.sort() it is used to sort the Array.

// let fruits = ["Banana","Apple","Mango"];
// let numbers = [1,2,4,3];

// numbers.sort();

// console.log(numbers);


// Concatination

// let fruits = ["Banana","Apple","Mango"];
// let colors = ["Red","Green","Blue"];

// let bothArray = fruits.concat(colors)

// console.log(bothArray);

// Note:-This operation is called Array Merging or Concatenation using the Spread Operator

// using spread operators

// const allValues=[...fruits, ...colors];

// console.log(allValues);


// let address = {
//     city: "Delhi"
// };

// let person = {
//     name: "Ram"
// };

// let details = {
//     ...person,
//     ...address
// };

// console.log(details);



    


