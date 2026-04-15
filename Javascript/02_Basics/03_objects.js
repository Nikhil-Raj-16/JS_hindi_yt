/*Constructor se object banega toh singleton banega,(object.create)
warna literal se declare karne se non-singleton banega.
*/ 

// Object literals

const correct_symbol = Symbol("key1")

// how to add symbol into object and print it
const JsUser = {
    name : "Nikhil",
    "full Name" : "Nikhil Raj", 
    mysymbol : "mykey",
    [correct_symbol] : "key",
    age : 20,
    location : "Mumbai",
    email : "nikhil@google.com",
    isLoggedIn : false,
    lastLoginDays : ["Monday","Friday"]
}
/********** always access with square brackets , because in interview exception will come and we can't do it by 
(. - dot operator) , so do by jsuser["name"]
*/



// console.log(JsUser.email); not in interview
// console.log(JsUser["email"]);  correct in interview

// **********  EXCEPTION************

// console.log(JsUser.full name); wrong
// to access fullName we have to like this only
// console.log(JsUser["full Name"]);



// console.log(typeof JsUser["mysymbol"]); treat as a string

// console.log(JsUser[correct_symbol]); // gives datatype as string


// changing value of object


JsUser.email = "nikhil@chatgpt.com"
// Object.freeze(JsUser) // not want to change data
JsUser.email = "nikhil@microsoft.com"
// JsUser.name = "sadsad"
// console.log(JsUser["email"]);

// console.log(JsUser); // in this we can see it says that correct_symbol datatype is symbol

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingtwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}
// console.log(JsUser.gṇreeting); // undefined
console.log(JsUser.greeting()); 
console.log(JsUser.greetingtwo()); 








