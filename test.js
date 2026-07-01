// function greet(name) {
//     return "Hello " + name;
// }

// console.log(greet("Satish"));


// const greet1 = (name)=>{
//     return "Hello"+name;
// }

// const greet = name => "Hello " + name;

// console.log(greet("Satish"));

// const person = {
//     name: "Satish",

//     greet: function () {
//         console.log(this.name);
//     }
// };

// person.greet();

// Arrow functions do not create their own this.

const person = {
    name: "Satish",

    greet: () => {
        console.log(this.name);
    }
};

person.greet();

let stName="Ramesh";
console.log(stName);