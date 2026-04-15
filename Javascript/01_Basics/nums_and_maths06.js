const score = 400
console.log(score);

const balance = new Number(1500)
console.log(balance);


console.log(balance.toString().length);
console.log(balance.toFixed(2));


const othernumber = 1123.8666
console.log(othernumber.toPrecision(3));   // priority before decimal

const hundreds = 1000000
console.log(`Locale String: ${hundreds.toLocaleString()}`);     // if not in INDian it gives then ('en-IN')


// ************************************** MATHS  *****************

// console.log(Math.abs(-7)); //** 
// console.log(Math.round(7.545)); //  **
// console.log("Ceil");
// console.log(Math.ceil(-4.1));
// console.log(Math.ceil(4.1));

// console.log("Floor");

// console.log(Math.floor(4.1));
// console.log(Math.floor(4.9));

// console.log(Math.min(8,6,57,9));
// console.log(Math.max(8,6,57,9));
  

// math.random() gives value b/w 0 and 1

console.log(Math.random());
console.log((Math.random()*10) + 1);   // +1 to avoid 0 cases

console.log(Math.floor(Math.random()*10) + 1);      // need only one value   and it will give value b/w 1 to 9


// if needed value b/w two numbers like 1 to 6 in dice

const min = 1
const max = 6

console.log(Math.floor(Math.random() * (max-min+1)) + min);




