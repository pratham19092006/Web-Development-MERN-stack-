// Variable scoping

// 1. global scope
// 2. function scope
// 3. block scope

// variable can be created as(var/let/const)

 
// global scope
var age = 25;
// we can use any var/let/const to create global variable but we should avoid var as it gives debugging issues

console.log(age); // 25

{
    console.log(age); // 25
}

if(true){
    console.log(age); // 25
}

for(let i = 0; i < 5; i++){
    console.log(age); // 25
}

function sayHello(){
    console.log("hello",age); // 25
}

// function scope

function sayHello2(){
    let name = "John";
    console.log("hello ",name); // John
}
sayHello2();

// console.log(name);
// ReferenceError: name is not defined
// as we cannot access name variable outside the function as it is in function scope


// block scope

{
    var height = 180; // var is not block scoped, so it can be accessed outside the block
    let weight = 75;
    const city = "New York";
}

console.log(height); // 180
// console.log(weight);
// ReferenceError: weight is not defined
// console.log(city);
// ReferenceError: city is not defined  


// Temporal Dead Zone (TDZ)
// hoisting is not possible with let and const, so we cannot access them before they are declared

// below we can not access marks variable as hoisting not done, not accessible

// below FROM LINE 67 to LINE 69 is called Temporal Dead Zone (TDZ) as we cannot access marks variable before it is declared

console.log(marks); 
console.log("pratham");
console.log("mishra");
let marks = 100;
console.log(marks); // 100