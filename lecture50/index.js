// Error handling: it is just an event which just disrupt or impact the normal flow of execution of program.

// Types of errors:
// 1. compilation error: it is an error which occurs during the compilation of the program. It is also known as syntax error.It can be easily fixed by correcting the syntax of the code.

// 2. runtime error: it is an error which occurs during the execution of the program. . It can be easily fixed by correcting the logic of the code.

// console.log("hell"ji);
// above is compile time 
// 

// console.log(x); // ReferenceError: x is not defined
// above is runtime error


// Error handling

// try-catch block: it is used to handle the runtime errors. It is used to catch the error and handle it gracefully without crashing the program.



try{
    // write that part of code in try block which you think may thorw an error
    console.log("try block starts here");
    console.log(x);
}
catch(e){
    // if error occured in try block , than catch block will catch that error and handle it gracefully without crashing the program.
    // e : it is that error which is thrown in try block.
    console.log("catch block starts here");
    console.log("your error is here: ", e);
}
finally{
    // it is optional block which will be executed whether error is thrown or not.
    console.log("finally block starts here");
    console.log("i will run always, no matter error is thrown or not");
}

// lets create a custome error (using throw keyword)

try{
    console.log(x);
}
catch(e){
    console.log("in catch block");
    throw new Error("bhai pahle x ko define kar le fir use kar");
}


let errorCode = 100;
if(errorCode === 100){
    throw new Error("Invalid JSON");
}

//  throw with functions:

function validateAge(age){
    if(age < 18){
        throw new Error("age must be greater than 18");
    }
    else{
        console.log("age is valid");
    }   
}

try{
    validateAge(15);
}
catch(e){
    console.log("error is: ", e);
}