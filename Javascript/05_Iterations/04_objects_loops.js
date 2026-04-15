const myObject = {
    js: 'JavaScript',
    cpp: 'c++',
    rb: 'Ruby',
    swift: 'Swift By apple'
}

// forin loop is used to iterate objects, also used in other ways


// for printing key and value of objects

for (const key in myObject) {
    // console.log(`${key} -> ${myObject[key]}`);
}

// for (const key in myObject) {
//     console.log(myObject[key]);
// }

//  can we use for in to array?

const programming = ["js", "rb", "py", "java", "cpp"]

// for (const key in programming) {
//     console.log(key);
// }


// for (const key in programming) {
//     console.log(programming[key]);
// }

// forof - gives value in array normally 
// but forin gives the index normally,  and then we have to print if we need value


// NOTE - MAP IS NOT iterable, so can't use in loops, different methods are there

// const map = new Map()
// map.set('IN', "India")
// map.set('USA', "United States of America")
// map.set('Fr', "France")
// map.set('IN', "India")

// for (const key in map) {
//     console.log(key);
// }
