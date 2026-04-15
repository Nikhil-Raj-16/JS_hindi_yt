const cartoon = ["Doraemon" ,"Nobita","Jiyan"]

const names = ["Nikhil","Shubham","Keshav"]
console.log("Push");
// cartoon.push(names)

// console.log(cartoon);
// console.log(cartoon[3][0]);

console.log("Concat");

const new_heros = cartoon.concat(names)   // returns a new array so store in a variable

console.log(new_heros);

// spread is another method if, we want to merge all arrays like more than 2
const all_new_hero = [...cartoon,...names]
console.log("All_new");

console.log(all_new_hero);


const another_array = [1,2,3,[4,5,6],7,[7,8,9,[5,6,[6,53,43]]]]

const cleaned_array = another_array.flat(Infinity)

console.log(cleaned_array);


console.log(Array.isArray("Nikhil"));   // is Nikhil a array
console.log(Array.from("Nikhil"));  // convert to array

// console.log(Array.isArray("[4,3,6,8]")); false

console.log(Array.from({name: "Nikhil"}));  // empty array, we have to tell that we want array from key or value

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));

console.log(Array.of(names,cleaned_array));
