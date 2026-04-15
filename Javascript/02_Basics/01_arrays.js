// array

const myarr = [0,1,2,3,4,5] // in this, the arrays are mutable or resizable

/* JavaScript array-copy operations create shallow copies. (All standard built-in copy operations with any JavaScript objects create shallow copies, rather than deep copies).

Shallow Copy(call By reference type) - A shallow copy of an object is a copy whose properties share the same references (point to the same underlying values) as those of the source object from which the copy was made. As a result, when you change either the source or the copy, you may also cause the other object to change too.

Deep Copy(call by value type) - A deep copy of an object is a copy whose properties do not share the same references (point to the same underlying values) as those of the source object from which the copy was made. As a result, when you change either the source or the copy, you can be assured you're not causing the other object to change too.

*/

const names = ["Doraemon" ,"Nobita","Jiyan"]

const myarr2 = new Array(7,8,9,4,2)

// console.log(myarr2[3]);
// console.log(myarr[3]);
// console.log(names[1]);


// Array Methods

// myarr.push(6)
// myarr.push(7)
// myarr.pop()

// myarr.unshift(14)       // unshift adds to the start
// myarr.shift()   // removes from the start

// console.log(myarr.includes(9)); // T/F
// console.log(myarr.indexOf(4));



// const newarr = myarr.join('_')

// console.log(myarr);
// console.log(newarr);



// slice, splice

console.log("\n");

console.log(`Original: ${myarr}`);
const arr_slice = myarr.slice(1,4)  // 4 is excluded
console.log(arr_slice);


console.log(`After Slice: ${myarr}`);
const arr_splice = myarr.splice(1,4) // 4 is included
console.log(arr_splice);
console.log(`After Splice: ${myarr}`);

// NOTE - most imp that splice changes the array by removing the elements selected from the original array.