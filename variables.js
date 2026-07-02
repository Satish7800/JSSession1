// console.log("Hello, World!");
// Variable it is used to store data in memory
const studentId = 12345;
let studentName = "John Doe";
const studentAge = 20;
var studentSubject ="Science";
studentCity="New York";

// console.log(studentId);
// let studentName="Mahesh";  //We can not redeclare variable with let
// var studentSubject="Maths"; // We can redeclare variable with var
// const studentAge=25;// We can not redeclare variable with const

console.table({studentId, studentName, studentAge, studentSubject, studentCity});

// Block Scope

// if (true) {
//     let stName="Ramesh";
// }

// We should never use var to declare a variable because 
// it is function scoped and can be redeclared and updated.
//  It is better to use const and let. 
// Const is block scoped and cannot be updated or redeclared.
// Let is block scoped and can be updated but cannot be redeclare