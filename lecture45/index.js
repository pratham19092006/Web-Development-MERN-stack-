//  Hoisting:
// process which is used to shift all the variable and function declaration to the top of the code before execution or to their top of the scope

// function hoisting
sayMyName("Pratham");
function sayMyName(finalName){
    console.log(finalName);
}
// above function should not be executed for above function call, as the function created after the function call but due to function hoisting the (function declaration) is shifted to the top of the code before execution and then the function call is executed and it works fine


// variable hoisting (only for var keyword)
console.log(myName); // output: undefined
var myName = "Pratham";
// here the variable declaration is shifted to the top of the code before execution but the variable initialization is not shifted to the top of the code before execution, so the variable is declared but not initialized and it gives undefined as output. if we use let or const keyword then it will give reference error because they are not hoisted.



// case of let and const keyword

// console.log(age); // output: ReferenceError: Cannot access 'age' before initialization
// let age = 25;
// console.log(city); // output: ReferenceError: Cannot access 'city' before initialization
// const city = "New York";


// printName("pratham");
// let printName = function(name){
//     console.log(name);
// }


// class hoisting (not possible)

// const onject1 = new Human();
// class Human{
// }
// above code will give error because class declaration is not hoisted and it is in temporal dead zone until the class declaration



// function call Stack : means whenever function is called it is added to the call stack and when the function execution is completed it is removed from the call stack. if there is any error in the function then it will be removed from the call stack and the error will be thrown. if there is any recursive function then it will keep adding to the call stack until it reaches the maximum call stack size and then it will throw an error.


// why functions are called first class citizens in javascript?
// because 
// 1. functions can be assigned to a variable
// 2. functions can be passed as an argument to another function
// 3. we can return functions.
// 4. we can make array of functions(using functions in data structure)
// 5. we can have properties and methods in functions (functions are objects in javascript)
console.log("============================");

// 1. functions can be assigned to a variable
let greet = function(){
    console.log("Hello");
}

// 2. functions can be passed as an argument to another function
function greetMe(greet, myyName){
    greet();
    console.log(myyName);
}
greetMe(greet, "pratham");

// 3. we can return functions.
function solve(num){
    return function(num){
        return num*num;
    }
}
let ans = solve(5);
let finalAns = ans(10);
console.log(finalAns);

// 4. we can make array of functions(using functions in data structure)

const arr = [
    function(a,b){
        return a+b;
    }, 
    function(a,b){
        return a-b;
    },
    function(a,b){
        return a*b;
    }
];

let sum = arr[0](5,10);
let sub = arr[1](10,5);
let mul = arr[2](5,10);
console.log(sum, sub, mul); 

// 5. functios are object in javascript

let obj = {
    age: 25,
    city: "New York",
    greet: ()=>{
        console.log("Hello");
    }
}

console.log(obj.age); // output: 25
console.log(obj.greet); // output: [Function: greet]
obj.greet(); // output: Hello

console.log(greeting);
var greeting = function(){
    console.log("Namaste duniya");
}
// undefined as this is variable, if this was function declaration then its ouput would be "Namaste duniya"

