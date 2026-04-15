const user = {
    username : "Nikhil",
    price : 799,

    welcomeMessage : function(){
        console.log(`${this.username}, welcome to the website.`);
        console.log(this);
        
    }
}

// this - current context(value) ko refer karega

// user.welcomeMessage()
// user.username = "Keshav" 
// user.welcomeMessage()

// console.log(this);  // this referes to empty object if, no object in global scope

//  in console, it gives Window

// ASKED IN INTERVIEW : ********BROWSER KE ANDAR GLOBAL OBJECT IS "WINDOW", tabhi window ke saare events capture kar
// pate hai

// function chai(){
//     let username = "Nikhil"
//     console.log(this.username);     // undefined as, this is used in object context not in function

// }

// chai()

// const chai = function(){
//     let username = "Nikhil"
//     console.log(this.username);
// }


// Arrow function

const chai = () => {
    let username = "Nikhil"
    console.log(this);  // {}
}

// chai()

// Basic Arrow function () => {}, can also hold under a var
/*
const add = function(a, b) {
    return a + b;
};

ARROW FUNCTION
const func_name = (parameters) => (return value) , don't write return for one liners.

const add = (a, b) => a + b;  // Implicit return for single expressions



Immutable this, arguments, and super:

No own this (inherits from parent).
No arguments object (use rest params ...args instead).
No super or new.target (can't be used as constructors).
Great for classes or modules where you want this to stay fixed.


// Without arrow
const numbers = [1, 2, 3];
const doubled = numbers.map(function(num) {
    return num * 2;
});
// [2, 4, 6]

// With arrow (shorter)
const doubled = numbers.map(num => num * 2);
// [2, 4, 6]

*/



// Explicit - return lagana hoga and {}
// const addTwo = (num1,num2) => {
//     return num1 + num2 
// }


// Implicit - remove {} and return , but add () for easy, as we want to return an object, else you get undefined
// const addTwo = (num1,num2) => num1 + num2 
// const addTwo = (num1,num2) => (num1 + num2)  // used frequently in react


// const addTwo = (num1,num2) => {username : "Nikhil"}
// const addTwo = (num1,num2) => ({username : "Nikhil"})




console.log(addTwo(3,4));





