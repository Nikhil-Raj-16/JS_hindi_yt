const name = "Nikhil"
const repocount = 30

// console.log(name+repocount+" value");   old way

// new way

console.log(`Hello my name is ${name} and my repo count is ${repocount}`);
// `` -> string interpolation   we can also do like ${name.upper}

// console.log(name[0]);


const gamename = new String('Nikhil-Yt-400k')

console.log(gamename[0]);

console.log(gamename.__proto__);   // syntax

console.log(gamename.toUpperCase());
console.log(gamename.length);

console.log(gamename.charAt(3));
console.log(gamename.indexOf('h'));


// as string is primitive type the original value is not changed.

//read about the string methods, and read mdn if not understood, that is good for interview.




const newString = gamename.substring(0,5)   // 5th is excluded, but in this -ve value not taken and default is 0
// console.log(newString);

const anotherstring = gamename.slice(-2,9)      // starts from -8 and end at 3
console.log(anotherstring);

const newone = "  NIKHIL     "
console.log(newone);
console.log(newone.trim());


const url = "https://nikhil.com/nikhil%20raj"

console.log(url.replace('%20','-'));
console.log(url.includes('Nikhil'));
console.log(url.includes('nikhil'));


console.log(gamename.split("-"));
