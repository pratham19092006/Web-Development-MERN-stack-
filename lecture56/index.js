// Promises: 

// Promise is such an object which handles eventual completion or failure of an asynchronous operation and its resulting value. This lets asynchronous methods return values like synchronous methods: instead of immediately returning the final value, the asynchronous method returns a promise to supply the value at some point in the future.

// states of a promise:

// 1. pending: initial state, neither fulfilled nor rejected.
// 2. fulfilled: meaning that the operation completed successfully.
// 3. rejected: meaning that the operation failed.

// eg:

let firstPromise = new Promise( (resolve, reject) => {
    console.log("Promise is pending");
    reject(new Error("Internal server error"));
});

let secondPromise = new Promise((resolve, reject) => {
    setTimeout(function sayMyName(){
        console.log("My name is Anshul");
    }, 2000);
    resolve("Promise is resolved");
});

// then() method is used to specify what to do when the promise is fulfilled and catch() method is used to specify what to do when the promise is rejected.

let promise1 = new Promise((resolve, reject) => {
    let success = true;
    if(success){
        resolve("Promise is fulfilled");
    }else{
        reject(new Error("Promise is rejected"));
    }
});

promise1.then((message)=> {
    console.log("then ka 1stmessage: " + message);
    return "Promise 1st is resolved";
}).then((message) =>{
    console.log("then ka 2nd message: " + message);
    return "Promise 2nd is resolved";
}).then((message) => {
    console.log("then ka 3rd message: " + message);
    return "Promise 3rd is resolved";
})
.catch((error) => {
    console.log("catch ka  error: " + error);
    console.error(error);
})
.finally((message) => {
    console.log("finally block will always be executed");
});

let promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise 2 is resolved");
    }, 3000);
});

// if we set time in setTimeout as 0, It will still be asynchronous, even if you set the time to 0. Because setTimeout is always asynchronous, no matter if the delay is 0 or 4000.

let promise3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject(new Error("Promise 3 is rejected"));
    }, 4000);
});


// Promise.all() method is used to execute multiple promises in parallel and wait for all of them to be fulfilled or for any of them to be rejected. It takes an array of promises as an argument and returns a new promise that resolves when all of the input promises have resolved, or rejects if any of the input promises reject.
Promise.all([promise1, promise2, promise3]).then((messages) => {
    console.log("Promise.all messages: " + messages);
}).catch((error) => {
    console.log("Promise.all error: " + error);
});