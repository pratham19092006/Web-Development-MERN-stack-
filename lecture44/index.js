// reference types: objects and arrays in js

// reference types: objects, arrays, functions

// 2 types of memory in js: stack and heap

// primitive types are stored in stack and reference types are stored in heap 

// there is reference to the location of the object in heap in the stack

// object: collection of key value pairs

let obj = {
    name : "john",
    age : 30,
    city : "new york",
    "gender of this person": "male",
    // we may or may not use quotes for keys in objects, but if we want to use spaces in keys, we must use quotes
    greet : function(){
        console.log("hello ji kaise ho saare");
    }
}

console.log(obj); // john
obj.greet(); // hello ji kaise ho saare
console.log(obj.greet()); // hello ji kaise ho saare, undefined
// undefined is returned because we are not returning anything from the greet function, so it returns undefined by default

console.log(typeof(obj)); // object

// obj reference in stack memory pointing to the location of the object in heap memory

obj2 = obj; // obj2 is also pointing to the same location of the object in heap memory(shallow copy)

// creating deep copy
let obj3 = JSON.parse(JSON.stringify(obj)); // this is a way to create a deep copy of an object, but it has some limitations, it will not work if the object has functions or undefined values

// or do manuaally, that is assign values one by one to the new object


// arrays: collection of items, can be of any type but usually we use arrays to store multiple values of the same type

let arr = [1, 2, 3, 4, 5]; 

let ar = [1, "hello", true, null, undefined, {name: "john"}, [1, 2, 3]]; // array can store multiple types of values

console.log(ar);
console.log(typeof(arr)); // object
console.log(typeof(ar)); // object


console.log(ar[1]); // output: hello

console.log(ar[5].name); // output: john

console.log(ar[6][1]); // output: 2

// when we create an array, it is stored in heap memory and a reference to the location of the array in heap memory is stored in stack memory


// built-in methods: 

// push, pop, shift, unshift, slice, splice, indexOf, includes, forEach, map, filter, reduce, sort, find etc.
let brr = ['love', 1,true];

// push: adds an element to the end of the array
brr.push('Babbar'); // brr is now ['love', 1, true, 'Babbar']

// pop: removes the last element from the array and returns it
let poppedElement = brr.pop(); // poppedElement is 'Babbar' and brr is now ['love', 1, true]

// shift: removes the first element(leftmost) from the array and returns it
brr.shift(); // brr is now [1, true]

brr.unshift('love'); // brr is now ['love', 1, true]

brr.push(20);
brr.push(40);
brr.push(70);

// slice: returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array. The original array will not be modified.

console.log(brr.slice(1, 4)); // output: [1, true, 20]

// splice: changes the contents of an array by removing or replacing existing elements and/or adding new elements in place. It modifies the original array and returns an array containing the deleted elements.

// it takes 3 parameters: start index, number of elements to remove, and the elements to add (optional)

brr.splice(1, 2, 'hello', 'world'); // brr is now ['love', 'hello', 'world', 40, 70] and it returns [1, true]

brr.splice(2,0, 'Pratham'); // brr is now ['love', 'hello', 'Pratham', 'world', 40, 70] and it returns [] because we are not removing any element

// map: creates a new array populated with the results of calling a provided function on every element in the calling array. It does not modify the original array.


let numbers = [1, 2, 3, 4, 5];

let ans = numbers.map((num)=> {
    return num*num; // this will return a new array with the squares of the numbers
})

console.log(ans); // output: [1, 4, 9, 16, 25]

// filter: creates a new array with all elements that pass the test implemented by the provided function. It does not modify the original array.

let evenumbers = numbers.filter((num)=>{
    // if(num%2==0){
    //     return true;
    // }else return false;
    return num%2==0; // this will return a new array with only the even numbers
})

console.log(evenumbers); // output: [2, 4]


let arr3 = [1,2,'love', 'kunal', null];

let ans4 = arr3.filter((item)=>{
    if(typeof(item)=='string'){
        return true;
    }
    else return false;
})
console.log(ans4); // output: ['love', 'kunal']

// reduce: executes a reducer function (that you provide) on each element of the array, resulting in a single output value. It does not modify the original array.

// accmulator and current value are the parameters of the reducer function, accumulator is the previous value returned by the reducer function and current value is the current element being processed in the array.
// if current value is the first element of the array, then accumulator will be the initial value provided as the second argument to the reduce method, if no initial value is provided, then accumulator will be the first element of the array and current value will be the second element of the array. and answer is stored in accumulator and passed to the next iteration of the reducer function.

let arr5= [1, 2, 3, 4, 5];

let sum = arr5.reduce((acc,curr)=>{
    return acc+curr; // this will return the sum of all the elements in the array
},0 // this is the initial value of the accumulator
) // output: 15
console.log(sum); // output: 15

let arr6 = [9,2 ,3,5,8,2,56,87,45];

arr6.sort(); // this will sort the array in ascending order but it will not work as expected because it sorts the elements as strings by default, so we need to provide a compare function to sort the elements as numbers
console.log(arr6); // output: [2, 2, 3, 5, 8, 9, 45, 56, 87]

arr6.reverse(); // this will reverse the array- decreasing order
console.log(arr6); // output: [87, 56, 45, 9, 8, 5, 3, 2, 2]

// indexOf: returns the first index at which a given element can be found in the array, or -1 if it is not present. It does not modify the original array.
let index = arr6.indexOf(9); // output: 3


// forEach: executes a provided function once for each array element. It does not modify the original array.

let arr7 = [10,20,30];

arr.forEach((value, index)=>{
    console.log(`the value is ${value} and the index is ${index}`);
})

let length = arr7.length; // this will return the length of the array
console.log(length); // output: 3


// forin loop: it is used to iterate over the properties of an object, it is not recommended to use for arrays because it will also iterate over the inherited properties of the array, so it is better to use forEach or for of loop for arrays.

for(let key in obj){
    console.log(`the key is ${key} and the value is ${obj[key]}`);
}

// for of loop: it is used to iterate over the values of an iterable object like arrays, strings, maps, sets etc. it does not work with objects because objects are not iterable.
for(let value of arr7){
    console.log(value); // this will print the values of t
    // he array
}

// arrays with functions

let arr8 = [10,20,30,40,50];

function getSum(arr){
    let s = 0;
    arr.forEach((value)=>{
        s+=value;
    })
    return s;
}

let total = getSum(arr8);
console.log(total); // output: 150
