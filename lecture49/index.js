// ONJECT CLONING AND GARBAGE COLLECTOR

// Dynamic nature of onject:

let obj = {
    age : 12,
    wt : 68,
    ht: 180
}

console.log(obj);

obj.color = "white";
console.log(obj);
// because we can change the object by adding new properties to it  at runtime , we can say that objects are dynamic in nature

let obj2 = obj; // this is not cloning of object but it is reference copy of the object

// if we change the value of obj2 then it will also change the value of obj because both obj and obj2 are pointing to the same object in memory

// object cloning:

// method :
// 1. uisng spread operator
console.log("\nusing spread operator");
let obj3 = {...obj}; // this is cloning of object using spread operator

console.log(obj3);

obj3.age = 20; // this will not change the value of obj because obj3 is a clone of obj and it is pointing to a different object in memory
console.log(obj);
console.log(obj3);

// 2. using Object.assign() method
console.log("\nusing Object.assign() method");
let obj4 = Object.assign({}, obj); // this is cloning of object using Object.assign() method
obj4.wt = 70; // this will not change the value of obj because obj4 is a clone of obj and it is pointing to a different object in memory
console.log(obj);
console.log(obj4);  

// third method is iteration 
console.log("\nusing iteration");
let obj5 = {};

for(let key in obj){
    obj5[key] = obj[key]; // this is cloning of object using iteration
}
obj5.ht = 190; // this will not change the value of obj because obj5 is a clone of obj and it is pointing to a different object in memory
console.log(obj);
console.log(obj5);


// Garbage collector:

// Garbage collector is like a tool or cleaner that automatically removes the unused or unreferenced objects from the memory to free up space and improve performance of the application making safe from memory leak.

// In JavaScript, garbage collection is done automatically by the engine, so we don't have to worry about it. However, it is important to understand how it works to avoid memory leaks and optimize performance of our applications.

// in c/c++ we have to manually free the memory that we have allocated using malloc() or new operator, but in JavaScript we don't have to do that because garbage collector will automatically remove the unused objects from the memory.

// Garbage collector uses a technique called "mark and sweep" to identify and remove the unused objects from the memory. It marks the objects that are still in use and then sweeps the memory to remove the unmarked objects.