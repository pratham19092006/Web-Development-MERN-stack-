// Operators: operators are special symbols that perform operations()specific tasks on operands.

// TYPE OF OPERATORs:

// 1. Arithmetic operators: +, -, *, /, %,  **
console.log("Arithmetic operators:");
let a = 10, b = 4;
console.log(a + b); // Output: 14
console.log(a - b); // Output: 6
console.log(a * b); // Output: 40
console.log(a / b); // Output: 2.5
console.log(a % b); // Output: 2
console.log(a ** b); // Output: 10000

// 2. Uniary operators: ++, --
console.log("Unary operators:");
let c = 5;  
console.log(c++); // Output: 5 (post-increment, returns the value before incrementing)
console.log(c);   // Output: 6 (now c is incremented)
let d = 5;
console.log(++d); // Output: 6 (pre-increment, increments first then returns the value)
console.log(d);   // Output: 6 (d is already incremented)



// 3. Assignment operators: =, +=, -=, *=, /=, %=, **=
console.log("Assignment operators:");
let e = 10;
e += 5; // e = e + 5
console.log(e); // Output: 15

e -= 3; // e = e - 3
console.log(e); // Output: 12

e *= 2; // e = e * 2
console.log(e); // Output: 24

e /= 4; // e = e / 4
console.log(e); // Output: 6

e %= 5; // e = e % 5
console.log(e); // Output: 1

e **= 3; // e = e ** 3
console.log(e); // Output: 1 (since 1 to the power of 3 is still 1)

// 4. Comparison operators: ==, ===, !=, !==, >, <, >=, <=
console.log("Comparison operators:");

console.log(5 == '5'); // Output: true (loose equality, checks value only)
console.log(5 === '5'); // Output: false (strict equality, checks value and type)
console.log(5 != '5'); // Output: false (loose inequality, checks value only)
console.log(5 !== '5'); // Output: true (strict inequality, checks value and type)
console.log(5 > 3); // Output: true
console.log(5 < 3); // Output: false
console.log(5 >= 5); // Output: true
console.log(5 <= 4); // Output: false

// 5. Logical operators: &&, ||, !
console.log("Logical operators:");
console.log(true && false); // Output: false (logical AND, true if all operands are true)
console.log(true || false); // Output: true (logical OR, true if at least one operand is true)
console.log(!true); // Output: false (logical NOT, inverts the boolean value)

// ----working with  non-booleans
console.log("Non-boolean values with logical operators:");
// non-booleans can be truthy or falsy in JavaScript. 
// Falsy values include: false, 0, "", null, undefined, and NaN. 
// All other values are truthy.

console.log(0 && "hello"); // Output: 0 (logical AND, returns the first falsy value)
console.log(1 && "hello"); // Output: "hello" (logical AND, returns the last value if all are truthy)
console.log(0 || "hello"); // Output: "hello" (logical OR, returns the first truthy value)
console.log(1 || "hello"); // Output: 1 (logical OR, returns the first truthy value)

// short-circuit evaluation: in logical operators, if the first operand determines the result, the second operand is not evaluated. This is called short-circuit evaluation.
console.log("Short-circuit evaluation:");
console.log(false && (5 / 0)); // Output: false (the second operand is not evaluated because the first operand is false)
console.log(true || (5 / 0)); // Output: true (the second operand is not evaluated because the first operand is true)

console.log(false || false || 5 || 7 || 9);
// output: 5 (logical OR, returns the first truthy value, which is 5 in this case)

// (default dataype is float in JavaScript)

// 6. Ternary operator: condition ? expression1 : expression2
console.log("Ternary operator:");
let age = 18;
let canVote = (age >= 18) ? "Yes" : "No";
console.log(canVote); // Output: Yes

(54>234)? console.log("galat") : console.log("sahi"); // Output: sahi

// BITWISE OPERATORS: &, |, ^, ~, <<, >>, >>>
console.log("Bitwise operators:");
let x = 5; // In binary: 0101
let y = 3; // In binary: 0011

console.log(x & y); // Output: 1 (bitwise AND, 0101 & 0011 = 0001)
console.log(x | y); // Output: 7 (bitwise OR, 0101 | 0011 = 0111)
console.log(x ^ y); // Output: 6 (bitwise XOR, 0101 ^ 0011 = 0110)
console.log(~x); // Output: -6 (bitwise NOT, ~0101 = 1010 in two's complement)
console.log(~(0)); // Output: -1 (bitwise NOT, ~0000 = 1111 in two's complement)
console.log(x << 1); // Output: 10 (bitwise left shift, 0101 << 1 = 1010)
console.log(x >> 1); // Output: 2 (bitwise right shift, 0101 >> 1 = 0010)





//  if-else is exactly same as cpp

let ag = 22;

if(ag > 18){
    console.log("you can vote");
}else{
    console.log("you cannot vote");
}



let num = 10;

if(num > 0) {
    console.log("positive");
}
else if(num < 0){
    console.log("negative");
}
else{
    console.log("zero");
}


// nested if-else will be done in same way as cpp

if(num >= 0){
    if(num == 0){
        console.log("zero");
    }else{
        console.log("positive");
    }
}
else{
    console.log("negative");
}


// switch expression is also same as cpp

let dayName = 3;

switch(dayName){
    case 1: console.log("Monday");
    break;
    case 2: console.log("Tuesday");
    break;
    case 3: console.log("Wednesday");
    break;
    case 4: console.log("Thursday");
    break;
    case 5: console.log("Friday");
    break;
    case 6: console.log("Saturday");
    break;
    case 7: console.log("Sunday");
    break;
    default: console.log("Invalid day");
}

