const userEmail = ""
// if string has some value then considered true, else false
if(userEmail){
    console.log("Got user email");
}
else{
    console.log("Don't have user email");
    
}
// so there comes truthy and falsy values, like [] - true

/*falsy values(8)

                            false, 0 , -0 , BigInt 0n , "" , null , undefined , NaN

inke alawa saare truthy values hai

// some magical truthy(6)

    "0" , 'false' , [] , {} , function(){} ," " ->space is there so, truthy value

    [] - array
    {} - objects
*/

// for checking the arrays

// if(userEmail.length === 0){
//     console.log("Array is Empty");
    
// }


// for objects
const emptyObj = {}

if(Object.keys(emptyObj).length === 0){
    console.log("Object is empty");
    
}


// some interview tips

console.log(false == 0);
console.log(false == '');
console.log(0 == '');


// Nullish Coalescing Operator (??) : null and undefined ke upar 

// from database we can get more than one value and that can be null or undefined, so for that we have to use it
// so our code is good

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15


val1 = null ?? 12 ?? 1 // first value will be assigned

console.log(val1);



// Ternary Operator

// condition ? true : false


const coffee_price = 100

coffee_price <= 80 ? console.log("Order Coffee") : console.log("Cancel");

