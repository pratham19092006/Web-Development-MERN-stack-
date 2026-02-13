// Math object provides properties and methods for mathematical constants and functions. It is not a function object.

console.log("PI value is",Math.PI); // 3.141592653589793

console.log("Maximum value is", Math.max(7,32,67,43,88,23,554,23)); // 554

console.log("Minimum value is", Math.min(7,32,67,43,88,23,554,23)); // 7

console.log("Rounded value is", Math.round(1.4)); // 1

console.log("Floor value is", Math.floor(1.5)); // 1

console.log("Ceil value is", Math.ceil(1.4)); // 2

console.log("Absolute value is", Math.abs(-5)); // 5

console.log("random value is", Math.random()); // random value between 0 and 1

console.log("sqrt of 5 is", Math.sqrt(5)); // 2.23606797749979

console.log("Power of 2^3 is", Math.pow(2,3)); // 8

console.log("Logarithm of 10 is", Math.log(10)); // 2.302585092994046


// Date object provides methods for working with dates and times. It is a built-in object in JavaScript.

let curr = new Date();

console.log("\n\nCurrent date and time is", curr); // current date and time

let date  = new Date('June 20 1998 07:15:00');

console.log("Date is", date); // Sat Jun 20 1998 07:15:00 GMT+0530 (India Standard Time)


let newDate =new Date(1998, 5,20,7);
console.log("New Date is", newDate); // Sat Jun 20 1998 07:00:00 GMT+0530 (India Standard Time)

console.log("getting dateonly",newDate.getDate()); // 20

console.log(newDate.getFullYear()); // 1998

console.log(newDate.setFullYear(2000)); // 957465600000 , it is the time in milliseconds since January 1, 1970, 00:00:00 UTC

