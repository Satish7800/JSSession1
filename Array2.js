// =>map() Creates a new array by transforming each element.

// Original array remains unchanged.

// let numbers = [1,2,3];

// let result = numbers.map(num => num * 2);

// console.log(result);


// filter() Returns matching elements.



// let numbers = [10,20,30,40];

// let result = numbers.filter(num => num > 10);

// console.log(result);

// =>find() Returns first matching element.

// let numbers = [10,20,30,40];

// let result = numbers.find(num => num > 20);

// console.log(result);


// findIndex()

// let numbers = [10,20,30];

// let index = numbers.findIndex(x => x == 20);

// console.log(index);


// every() Returns true if every element satisfies the condition.

// let nums = [10,20,30];

// console.log(nums.every(n => n > 11));


// some() Returns true if at least one element satisfies the condition.

// let nums = [10,20,30];

// console.log(nums.some(n => n > 10));


// Multidimensional Array

// let matrix = [
//     [1,2],
//     [3,4],
//     [5,6]
// ];

// console.log(matrix[1][0]);


// Array of Objects

// let employees = [
//     {id:1,name:"Ramesh"},
//     {id:2,name:"Suresh"},
//     {id:3,name:"Amit"}
// ];

// console.log(employees[1].name);



// num => num > 20  // if you write like this

// It Means that

// function(num){
//     return num > 20;
// }


// let numbers = [10, 20, 30, 40];

// let result = numbers.find(num => num > 20);

// console.log(result);


// Internally work like this

// let numbers = [10, 20, 30, 40];

// let result = numbers.find(function(num) {
//     return num > 20;
// });

// console.log(result);