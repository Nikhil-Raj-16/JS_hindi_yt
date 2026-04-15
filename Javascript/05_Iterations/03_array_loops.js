// Array specific loops

// for of
// ["","",""]
// [{},{},{}]

const arr = [1,2,3,4,5]

for (const num of arr) {
    // console.log(num);   
}

const greetings = "Hello World!"
for (const greet of greetings) {
    if(greet == " "){
        break;
    }
    // console.log(greet);
    
}

// Maps - has key value pairs, remembers the original insertion of the keys.  the key in map only occur once.

const map = new Map()
map.set('IN',"India")
map.set('IN',"India")
map.set('JPY','Japan')


// console.log(map);

// for (const key of map) {
//     console.log(key);
    
// }
// we use array destructure 

for (const [key,value] of map) {
    // console.log(key, ':-', value);   
}

// object can't be iteratable by this


const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);
    
// }