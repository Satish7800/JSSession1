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

// const person = {
//     name: "Satish",

//     greet: () => {
//         console.log(this.name);
//     }
// };

// person.greet();

// let stName="Ramesh";
// console.log(stName);


// console.log(Number("100"));
// console.log(Number("ABC"));

// console.log(parseInt("25.9"))

// let arr = [10,20];

// console.log(arr.length());

// if(age = 18)
// {
//     console.log("Adult");
// }

// let num = Number("abc");

// console.log(num);


// console.log([] == false);
console.log([] === false);

// console.log(null == undefined);
console.log(null === undefined);

// console.log("5" - 2);
console.log("5" + 2);

// console.log(Boolean(""));
console.log(Boolean(" "));


  // Hoisting 

    // 1.Variable Hoisting

       console.log(a)
       var a = 10;

       console.log(b)
       let b = 10;
       

    // hello();
    // const hello = function() {
    //     console.log("Hi!");
    // };

    // const hello = undefined;

    //2.Function Hoisting

    // function demo(){
    //     console.log("Hello demo");
    // }
    // demo();

