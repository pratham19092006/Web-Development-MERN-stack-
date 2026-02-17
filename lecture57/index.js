// async-await: 
// by using async-await we can execute asynchronous code in a synchronous manner.
// It handles Promises in a better way and makes the code more readable and easier to understand.

// whenever we mark a block of code as async, than it will execute in synchronous manner and it will return a promise. If the block of code is executed successfully, then the promise will be resolved and if there is an error, then the promise will be rejected.


// async function getData(){
//     setTimeout(()=>{
//         console.log("I am inside setTimeout block"); 
//     }, 3000);
// }
// let optput = getData();


// Fetch API: it provides an interface for fetching resources (including across the network). It will make a network request to the specified URL and return a promise that resolves to the Response object representing the response to the request.
// creation , updation and deletion of data from the server is done by using fetch API. It is a modern replacement for XMLHttpRequest (XHR) and it is more powerful and flexible than XHR. It is also easier to use and it has a cleaner syntax than XHR.

// several requests: get, put, post, delete, patch etc. are used to perform different operations on the server.`

// get: fetch data from the server
// post: send data to the server
// put: update data on the server
// delete: delete data from the server
// patch: update partial data on the server

// async function getData1(){
//     let response = await fetch("https://jsonplaceholder.typicode.com/posts");

//     let data = await response.json(); // it will return a promise that resolves to the result of parsing the body text as JSON.
//     console.log("Data: " , data);
// }

// getData1();

// scenerio:

//1. prepared url where we to get data / api endpoint
//2. fetch data from the url -> network call done and lies in async category
// and make sure dont process data untill we have fetched that data.....
// here we have to use await keyword to wait for the promise to resolve and get the data from the server. (making to have as sync behaviour)
// to mark as await, we have to mark the function as async. (making to have as sync behaviour)
//3. process the data -> sync behaviour
// use the data

// async function solve(){
//     let a = await fetch("https://jsonplaceholder.typicode.com/posts");

//     let b = await fetch("https://jsonplaceholder.typicode.com/comments");

//     let data = await a.json();
//     let data2 = await b.json();
//     console.log("Data: " , data);
//     console.log("Data2: " , data2);
// }
// solve();




const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");
const options = {
    method: "POST",
    body: JSON.stringify({
        title: "i am in love with my madam",
        userId: 5,
    }),
    headers: myHeaders,
};

async function getData3(){
    const url = "https://dummyjson.com/posts/user/101";
    const response = await fetch(url);
    const data = await response.json();
    console.log("get Data response: " , data);
}

async function postData(){
    const url = "https://dummyjson.com/posts/add";
    const response = await fetch(url, options);
    const data = await response.json();
    console.log("post Data response: " , data);
}

async function processData(){
    await postData();
    await getData3();
}
processData();