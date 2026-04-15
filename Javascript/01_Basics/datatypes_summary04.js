

// *****************************************************************

const { use } = require("react");



// JS IS DYNAMICALLY TYPED

// Yes, JavaScript is a dynamically typed language.
// This means that:
// Type checking occurs at runtime: The type of a variable is determined when the code is executed, not during a compilation phase before execution.
// Variable types are flexible: A single variable can hold values of different data types throughout the program's execution. You do not need to explicitly declare a variable's type when you create it.


// let myVariable = 10; // myVariable currently holds a number
// console.log(myVariable); // Output: 10

// myVariable = "Hello World"; // myVariable now holds a string
// console.log(myVariable); // Output: Hello World

// myVariable = { key: "value" }; // myVariable now holds an object
// console.log(myVariable); // Output: { key: 'value' }


//**********************************************************************





// data types is categorized on parameter as how data is stored in memory,
// aur kaise access kar skte hai , as primitive and non-primitive(reference type)

// Primitive  (call by Value)

//7types : String, Number,Boolean , null, undefined(memory space and variable is declared), Symbol(to make any value unique)
// BigInt


//JS master - so master Objects and browser web events 

//Non-primitive(reference type)

// Arrays, Objects, functions



// NULL MEANS EMPTY

const tempOutside = null

let useremail; // by default undefined
console.log(useremail);

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigno = 564444477979979498794984n  // n makes it bigint


const cartoon = ["Doraemon" ,"Ninja","Thomas"]


// objects
let details = {
    name:"Nikhil",
    age:22
}

// functions

const myFunc = function(){
    console.log("Hello world");
    
}
console.log(typeof cartoon);
console.log(typeof myFunc);     //object function
console.log(typeof details);
console.log(typeof bigno);
console.log(typeof anotherId);  // symbol

// non primitive walo ka typeof object aayega




/*************************************************************** */


// Stack (primitive), Heap (Non-primitive)

let myName = "Nikhil Raj"

let anotherName = myName
anotherName = "Ganesh"

console.log(myName);
console.log(anotherName);

//change is made into its copy, call by value


// below is non-primitive so, goes in heap
let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

// userOne got direct reference to email and upi

let userTwo = userOne

// userTwo also got the same reference 

userTwo.email = "new@google.com"


console.log(userOne.email);
console.log(userTwo.email);

// go to test2.js