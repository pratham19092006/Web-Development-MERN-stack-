// Variable: named memory location
// let, const, var are used to declare variables in JavaScript

// eg. 
// let name1 = "pratham";
// var name2 = "pratham";
// const name3 = "pratham";


// we don't use var to declare variables because it has some issues like it is function-scoped or globally-scopped but not block-scopped.


// var age = 21;
// if(true){
//     console.log(age);
// }
// above be printed as written out side function hence this is globally scoped variable.


// function solve(){
//     var age2 = 24;
//     console.log(age2);
// }
// above will be printed as written inside function hence this is function scoped variable but cannot be accessed outside the function.
// solve();

// console.log(age2);
 // this will give error as age2 is not defined outside the function.


//  Re-assignment is possible
// var x = 10;
// console.log(x); // Output: 10

// x = "pratham";
// console.log(x); // Output: "pratham"

// Re-declaration is possible but it will cause debugging problem
// var x = 20;
// console.log(x); // Output: 20


// we dont have to specify the data type of variable in JavaScript as it is a dynamically typed language. We can assign any type of value to a variable and it will work without any error


// let is blocked scoped like var. It is also not re-declarable but it is re-assignable.
// let p = 10;
// p = 25;
// console.log(p); // Output:25


// {
//     let q = 20;
// }
// console.log(q); 
// This will give an error as q is not defined outside the block.




// const r = 30;
// This will give an error as we cannot  re-assign or re-declare a value to a constant variable.

// we will use let , in needed const than const.


// VARIABLE NAMING CONVENTIONS

// 1. WE can start variable name with a letter, underscore or dollar sign but not with a number.

// 2. Variable names are case-sensitive. So, name and Name are different variables.

// 3. we are not allowed to give spaces between variable names but we can use camelCase(eg. ageOfStudent) or snake_case to give variable names with multiple words.

// 4. we cannot use reserved keywords as variable names. For example, we cannot use if, else, for, while, etc. as variable names.




// DATAYAPES (we will see types of data and their size)

// 1. Primitive data types: number, string, char, boolean, null, undefined, symbol

// 2. Non-primitive data types: object, array, function

let marks = 20
console.log(marks);
console.log(typeof(marks)); // Output: number

// // printing newline
// console.log("\n");

// marks=  "twenty";
// console.log(marks);
// console.log(typeof(marks)); // Output: string

// console.log("\n");

// marks = true;
// console.log(marks);
// console.log(typeof(marks), "\n"); // Output: boolean


// marks = null;
// console.log(marks);
// console.log(typeof marks); // Output: object (this is a known issue in JavaScript, null is considered an object)


// let marks;
// console.log(marks); // Output: undefined
// console.log(typeof marks); // Output: undefined


// size of number in JavaScript is 8 bytes (64 bits) and it can store values from -(2^53 - 1) to (2^53 - 1). If we try to store a value greater than this range, it will give us an error or it will give us an incorrect value due to overflow.
// let marks = 5316540136854684684003401047541351843053164383646311544684878403;

// console.log(marks);


// initializing symbols
let w = Symbol("hello");
console.log(w);
console.log(typeof (w)); // Output: symbol