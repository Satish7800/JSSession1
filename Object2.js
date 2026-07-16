// -------------------------------------------------------

// Nested Objects

// Objects inside objects.

// let student = {
//     name: "Rahul",

//     address: {
//         city: "Delhi",
//         state: "Delhi",
//         pin: 110001
//     }
// };


// Access

// console.log(Object.keys(student));



// Object inside Array

// let students = [
//     {
//         name: "John",
//         age: 20
//     },
//     {
//         name: "Rahul",
//         age: 21
//     }
// ];


// Access

// console.log(students[0].name)


// Array inside Object

// let employee = {
//     name: "John",
//     skills: ["HTML", "CSS", "JavaScript"]
// };

// console.log(employee.skills[2])

// Object Destructuring

// let person = {
//     firstName: "Amriteshwar",
//     lastName: "Mishra",
//     age: 25,
//     isStudent: false
// };

// let name = person.firstName;
// let age = person.age;



// let { firstName,lastName, age , isStudent} = person;

// console.log(firstName);
// console.log(lastName)
// console.log(age);
// console.log(isStudent);


// Renaming Variables

// let person = {
//     name: "John",
//     age: 25,
//     mobile:7899889999
// };



// let { name: fullName, age: years, mobile: no } = person;

// console.log(fullName);
// console.log(years);
// console.log(no);


// Spread Operator

// let person = {
//     name: "John",
//     age: 25,
//     gender: "Male",
//     mobile: 7878787887,
//     designation: "Developer",
//     address: 'Noida'
// };

// console.log(person)

    // let clone = {
    //     ...person
    // };

// let clone = Object.assign({}, person);
// console.log(clone);

// Merge objects

    // let a = {
    //     name: "John",
    //     age: 30,
    //     gender: "Male"
    // };

    // let b = {
    //     mobile:78787878789
    // };

    // let c = {
    //     address:"Noida"
    // };

    // let d = {...a, ...b,...c};

    // console.log(d);



// Object.freeze()

    // freeze() prevents adding, deleting, and changing properties.

    // let person = {
    //     name: "John"
    // };

    // Object.freeze(person);
  
    // person.name = "Rahul";
    // person.age = 34
    // delete person.name;


    // console.log(person);


    // Object.seal()
    // seal() prevents adding or deleting properties, but allows updating existing ones.
   

    // let person = {
    //     name: "John"
    // };

    // Object.seal(person);

    // // person.name = "Rahul";

    // // person.age = 25;

    // delete person.name;

    // console.log(person);

    // We can create another way object using new Object();

    // new Object();

    // let person = new Object();

    // person.name = "John";
    // person.age = 25;
    // person.address = "Noida";

    // // delete person.name;

    // console.log(person)




