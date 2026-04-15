const descripter = Object.getOwnPropertyDescriptor(Math,"PI")

// console.log(descripter);  // writeable is false, its hardcoded that we cant change it in c++ 
// also not enumerable and configurable  all false

// console.log(Math.PI);
// Math.PI = 5;
// console.log(Math.PI);


const chai = {
    name: 'Ginger Chai',
    price : 200,
    isAvailable : true,
    orderChai: function(){
        console.log("chai nhi bni");
    }

}

// console.log(Object.getOwnPropertyDescriptor(chai,"name"));
// now lets change the property

Object.defineProperty(chai,'name',{
    writable: false,
    enumerable: false
})

// console.log(Object.getOwnPropertyDescriptor(chai,"name"));

for(let[key,value] of Object.entries(chai)){
    if(typeof value !== 'function'){
        console.log(`${key} : ${value}`);
    }
}

// so above name is not  itertable 