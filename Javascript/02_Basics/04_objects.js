//  two ways to declare objects

// const igUser = new Object()  // singleton obj
const igUser = {}       // non-singleton obj

igUser.id = "abc123"
igUser.name = "Keshav"
igUser.isLoggedIn = false

// console.log(igUser);

const regularUser = {
    email : "some@gmail.com",
    fullname : {
        userfullname :{
            firstname : "Nikhil",
            lastname : "Raj"
        }
    }
}


console.log(regularUser["fullname"]["userfullname"]["firstname"]);
console.log(regularUser.fullname.userfullname.lastname);

// Combining Objects

const obj1 = {1:"a",2:"b",3:"c"}
const obj4 = {7:"a",8:"b",9:"c"}
const obj2 = {4:"d",5:"e",6:"f"}

// const obj3 = {obj1 ,obj2} //not a good way and same in array this problem happens when we use push operation


// so in array we used concat or spread, in obj we use assign
const obj3 = Object.assign({},obj1,obj4,obj2)    // {} - target and objn is source, all will go in {}


console.log(obj3);          // if we don't give {}, then will go in obj1 



// assign - copy all the enum from one or more source obj to a target obj.It returns the modified target object.


// if we don't then 
const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };

const returnedTarget = Object.assign(target, source);       // target becomes the return target

console.log(target);
// Expected output: Object { a: 1, b: 4, c: 5 }

console.log(returnedTarget === target);
// Expected output: true


// but here we will use spread for combining objects
const obj5 = {...obj1,...obj2,...obj4}
console.log(obj5);

// from database we get array of objects

const users = [
    {
        id : 1,
        email : "a@gmail.com"
    },
    {
        id : 2,
        email : "b@gmail.com"
    },
    {
        id : 3,
        email : "c@gmail.com"
    },
    {
        id : 4,
        email : "d@gmail.com"
    }
]

// accessing AOB
// console.log(users[1]["id"]);
// console.log(users[1].email);


console.log(igUser);
const keys_igUser = Object.keys(igUser)
const values_igUser = Object.values(igUser)
// console.log(Object.keys(igUser)); //return the keys in an array, but prints object.
console.log(keys_igUser);
console.log(values_igUser);

console.log(Object.entries(igUser));   // har key:value is put in into an array, and datatype is object

console.log(igUser.hasOwnProperty('isLoggedIn')); // asking that if this is present or not else it will crash






