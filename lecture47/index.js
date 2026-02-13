// Class is a blueprint of an object. It is a template for creating objects. It is a user-defined data type. It is a collection of properties and methods. It is a way to encapsulate data and functions together. It is a way to create objects that have the same properties and methods.

class Human{
    age =13; //public property
    #wt = 80; // private property
    // we can create getters and setters to access private properties
    ht = 180;

    constructor(newAge, newHt, newWt){
        this.age = newAge;
        this.ht = newHt;
        this.#wt = newWt;
    }

    walking(){
        console.log("Human is walking", "having weight", this.#wt);
    }

    #running(){
        console.log("Human is running");
    }

    get fetchWt(){
        return this.#wt;
    }

    set changeWt(newWt){
        this.#wt = newWt;
    }
}

let obj = new Human(25, 175.200);
console.log(obj.age);
// console.log(obj.#wt);  
// cannot access private property outside the class
console.log(obj.ht);
obj.walking();
// obj.running();  // cannot access private method outside the class

console.log(obj.fetchWt);
obj.changeWt = 90;
console.log(obj.fetchWt);


// Default parameters: allow functions to default values for parameters if no value is provided when the function is called.

function sayName(myName = "Prabhuu"){
    console.log("My name is", myName);
}
sayName(); // Output: My name is Prabhuu, as we have not provided any value for myName, it takes the default value "Prabhuu", if we provide a value for myName, it will override the default value.
sayName("John"); // Output: My name is John

function add(a = 0, b = 0){
    return a + b;
}
console.log(add(8)); // Output: 8, as we have provided a value for a, it overrides the default value 0, and b takes the default value 0.


function myFullName(fname = "Prabhuu", lname = fname.toUpperCase()){
    console.log("My full name is", fname, lname);
}
myFullName(); // Output: My full name is Prabhuu PRABHUU

function solve(value = {age:15, wt:90, ht:190}){
    console.log("hello jii", value);
}
solve(15); // Output: hello jii 15 
solve(); // Output: hello jii { age: 15, wt: 90, ht: 190 }

function solve2(value = [1, 2, 3, 4, 5]){
    console.log("hello jii", value);
}
solve2(); // Output: hello jii [ 1, 2, 3, 4, 5 ]

function solve3(value = 'Rahul'){
    console.log("hello jii", value);
}
solve3(null); // Output: hello jii null
solve3(undefined); // Output: hello jii Rahul, as undefined is treated as if no value is provided, so it takes the default value "Rahul"

function getAge(){
    return 190;
}

function utility(name ="Love", age = getAge()){
    console.log("My name is", name, "and my age is", age);
}
utility("Prabhuu", 20); // Output: My name is Prabhuu and my age is 20

utility(); // Output: My name is Love and my age is 190, as we have not provided any value for name and age, it takes the default values "Love" and the return value of getAge() which is 190.
