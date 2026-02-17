// Event Loop: 

// Synchronous code: here our code execute a the same time as flow of execution reaches to the line of code. it is blocking in nature, which means that the next line of code will not execute until the current line of code has finished executing.

// Asynchronous code: here our code does not execute at the same time as flow of execution reaches to the line of code. it is non-blocking in nature, which means that the next line of code can execute even if the current line of code has not finished executing. asynchronous code is typically used for tasks that take a long time to complete, such as fetching data from an API, reading a file, or performing a complex calculation. asynchronous code allows us to keep our application responsive and avoid blocking the main thread, which can lead to a better user experience.

// Blocking: when a line of code takes a long time to execute and prevents the next line of code from executing until it has finished. this can lead to a poor user experience, as the application may become unresponsive or slow to respond to user input.

// eg:
// consoe.log('Start'); - > this will execute first and print 'Start' in the console.

// function sayMyName(){
//     console.log('My name is John');
// }
// setTimeOut(sayMyName,5000);
// setTimeOut is a built-in function in JavaScript that allows us to execute a function after a specified amount of time has passed. it takes two arguments: the first argument is the function that we want to execute, and the second argument is the time in milliseconds that we want to wait before executing the function. in the above example, the sayMyName function will be executed after 5 seconds (5000 milliseconds not exactly same because of event loop) and it will print 'My name is John' in the console.
// console.log('End'); - this had to wait that is in blocked state

// Event Loop: it is a mechanism that allows JavaScript to handle asynchronous code. it is responsible for managing the execution of synchronous and asynchronous code in a way that ensures that the application remains responsive and does not block the main thread. the event loop continuously checks for any pending tasks or events and executes them in the order they were added to the callback queue. it ensures that the synchronous code is executed first, and then the asynchronous code is executed when it is ready. the event loop is an essential part of JavaScript's concurrency model and allows us to write efficient and responsive applications.

// eg: 
console.log('Start'); //line 1

function sayMyName(){
    console.log('My name is John');
}
setTimeout(sayMyName, 5000); // line 2

console.log('End'); //line 3

// step 1. Call Stack: line 1 will be executed first and print 'Start' in the console. beacuase setTimeout is an asynchronous function, it will be sent to the browser's Web API and will not block the main thread. line 3 will be executed next and print 'End' in the console. after 5 seconds, this asynchronous function will be ready to execute and will be added to the callback queue. the event loop will continuously check for any pending tasks or events and will add this function to the call stack when call stack is empty. once the call stack is empty(that's ma take more than 5000ms), the event loop will take the function from the callback queue and execute it, which will print 'My name is John' in the console.

// step 2. Browser: whenever asynchronous function is called, it is sent to the browser's Web API, which is responsible for handling the execution of asynchronous code. the Web API provides a set of APIs that allow us to perform tasks such as making network requests, setting timers, and handling user input. when an asynchronous function is called, it is sent to the Web API, which will handle its execution and will add it to the callback queue when it is ready to be executed.

// step 3. Callback Queue: it is a queue that holds the functions that are ready to be executed. when an asynchronous function is ready to be executed, it is added to the callback queue. the event loop continuously checks the callback queue for any pending tasks or events and will add them to the call stack when the call stack is empty.