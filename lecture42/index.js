// Loops

// here will be for loop, while loo, and do-while and other loops like for-in, for-of, forEach loop will be covered after arrays

// for loop (exactly same as cpp)

console.log("Printing Pratham Mishra 5 times: ");
for(let i = 0; i < 5; i++) {
    process.stdout.write("Pratham "); // this will print in the same line
    console.log("Mishra");
}
console.log("\n");

console.log("Printing the multiplication table of 5: ");
for(let i = 1; i<11; i++){
    console.log("5 x " + i + " = " + (5*i));
}
console.log("\n");

console.log("\nPrinting numbers from 1 to 5 in the same line: ");
for(let i =1; i<6; i++){
    process.stdout.write(i + " ");
}

console.log("\nprinting numbers from 5 to 1 in the same line: ");
for(let i = 5; i>0; i--){
    process.stdout.write(i+" ");
}

// break and continue statements:
// break statement is used to exit the loop when a certain condition is met, while continue statement is used to skip the current iteration of the loop and move to the next iteration.

console.log("\n\nUsing break statement to exit the loop when i is 4: ");
for(let i =1; i<6; i++){
    if(i==4) break; // this will exit the loop when i is 4
    process.stdout.write(i + " ");
}


console.log("\n\nUsing continue statement to skip the current iteration when i is 4: ");
for(let i =1; i<6; i++){
    if(i==4) continue; // this will skip the current iteration when i is 4 and move to the next iteration
    process.stdout.write(i + " ");
}


//  while loop (same as cpp)

// using while loop to print numbers from 1 to 5 in the same line
console.log("\n\nUsing while loop to print numbers from 1 to 5 in the same line: ");
let i = 1;
while(i<6){
    process.stdout.write(i + " ");
    i++;
}

i = 5;
console.log("\n\nUsing while loop to print numbers from 5 to 1 in the same line: ");
while(i>0){
    process.stdout.write(i + " ");
    i--;
}

// using break statement in while loop to exit the loop when i is 4
i = 1;
console.log("\n\nUsing break statement in while loop to exit the loop when i is 4: ");
while(i<6){
    if(i==4) break;
    process.stdout.write(i + " ");
    i++;
}

// using continue statement in while loop to skip the current iteration when i is 4
i = 1;
console.log("\n\nUsing continue statement in while loop to skip the current iteration when i is 4: ");
while(i<6){
    if(i==4) {
        i++;
        continue;
    }
    process.stdout.write(i + " ");
    i++;
}


// do-while loop (same as cpp)
i=1;
do{
    console.log("\n\ninside the loop one time even if the condition is false");
}while(i!=1);


// printing 1 to 5 using do-while loop
i =1;
do{
    process.stdout.write(i + " ");
    i++;
}while(i<6);



// Strings: combination/sequence of characters to form a word or sentence
// can use any '' or ""


let firstName = "Pratham   ";
let lastName = 'Mishra';

// enter of newline character is not allowed in both above method but only possible if initialised as below:

let sentence = `my name 
is 
pratham
mishra`; // using backticks ` `
console.log(typeof(firstName)); // string

console.log("\n" + firstName + lastName);
console.log("==============================");
console.log(sentence);


let str = new String("Hello World"); // using String constructor only difference is that it creates a string object but earlier method creates a string primitive

console.log(typeof(str)); // object
console.log(str);


// some important string methods

let op1 = 'English ';
let op2 = 'Mathematics ';

let concatAns = op1 + op2; // concatenation of strings
console.log("Concatenation of strings: " + concatAns);

let finalAns = `${op1}${op2}`; // using template literals (backticks)
console.log("Using template literals: " + finalAns);

let lengthOfop1String = op1.length; // length of string
console.log("Length of op1 string: " + lengthOfop1String);

console.log(op1.toUpperCase()); // convert to uppercase
console.log(op2.toLowerCase()); // convert to lowercase

console.log(op1.includes('glish')); // check if string contains a substring, returns boolean

let strr = "Babbar";
console.log(strr.substring(1,4)); // returns substring from index 1 to 4 (4 not included)
console.log(strr.substring(2)); // returns substring from index 2 to end

let sentences = "hello ji \"kaise\" ho aap log";
let words = sentences.split(" "); // splits the string into an array of words
console.log(words); // returns array of words

// we cannot use '\' to split the string as it is an escape character in js


console.log(words.join("- ")); // joins the array of words into a string with '- ' as separator