// converts to int

     
//                  CLEAN CODE IS VALUED MORE

// ---************************AVOID THESE TYPE OF CONVERSIONS************************

// console.log("2">1);          DIFF DATATYPES
// console.log("02">1);   


// here equality(==) check and comparisons(>,<,>=,<=) operators work differently, 
//  comparisons convert null to a number, treat it as 0.
// That, why
console.log(null > 0);   // false
console.log(null == 0);  // false
console.log(null >= 0);   // true


// undefined is not like null

console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined >= 0);


// *******************************************************


// strict check(===) check value and datatype also

console.log("Strict check");

console.log("2" == 2);  //T
console.log("2" === 2);  //F


