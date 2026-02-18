// Closure:
// Closure is a combination of a function and the lexical environment/required data/Surrounding state within which that function was declared.
// It allows a function to access variables from an enclosing scope, even after that scope has finished executing.

function outerFunction(){
    var name = "Mozilla";
    function innerFunction(){
        console.log(name);
    }
    return innerFunction;
}
outerFunction();

let innerFunc = outerFunction();
innerFunc(); // Output: Mozilla
// now talking about the practical use of closures:
// when outerfunction is called and return the inner function, variable name should be cleared/free from memory after returning the function, but due to closure, the inner function still has access to the variable name and can log it to the console when called. hence here nested function binded with their required data (copy not made just reference is shared) and this is the main concept of closure.

// In this example, the inner function `innerFunction` forms a closure that captures the variable `name` from its parent function `outerFunction`. Even after `outerFunction` has finished executing, `innerFunction` still has access to the variable `name`, allowing it to log "Mozilla" to the console when called.


// 
