// starts from 1st, Jan 1970(UTC) and it is calc in milliseconds
// represent a single moment    

let mydate = new Date()
/*
console.log(mydate);  // not readable
console.log(mydate.toString());  // readable
console.log(mydate.toDateString()); 
console.log(mydate.toISOString()); 
console.log(mydate.toJSON()); 
console.log(mydate.toLocaleDateString()); 
console.log(mydate.toLocaleString()); 
*/
// date is an object  ****** asked in interview*****

// console.log(typeof mydate);


// format - yyyy, mm,dd ,HH,MM,SS
let createmydate = new Date(2025, 0 ,24)            // month starts from 0 in JS
let createmydate1 = new Date(2025, 1 ,24)

/*
console.log(createmydate.toDateString());
console.log(createmydate1.toDateString());

let createmytime = new Date(2025, 1 ,24 , 6,30,55)
console.log(createmytime.toLocaleString());

*/
// let createmytime2 = new Date(2025, 18 ,32 , 18, 30, 55)
// let createmytime2 = new Date(2025, 18 ,2 , 18, 30, 55)
let createmytime1 = new Date(2025, 0 ,365 , 18, 30, 55)   // 18months count from jan 0 + 11 = 2025 next 7 in 2026

// console.log(createmytime1.toLocaleString());


// let datecreated = new Date("18-17-2025") // mm-dd-yyyy (in India)    gives invalid date
let datecreated = new Date("10-17-2025")

// console.log(datecreated.toLocaleString());


//for quizes and polls to get the winner fastest we need time stamp

let mytimestamp = Date.now()

// console.log(mytimestamp);
// console.log(datecreated.getTime());
// do comparisons in milliseconds only

//to convert millisec to sec, divide by 1000

console.log(Math.floor(Date.now()/1000));   // floor to remove the decimal part


let newDate = new Date()
console.log(newDate);
console.log(newDate.getDay()); //   mon - 1 
console.log(newDate.getMonth() + 1); // jan - 0  so, do +1
console.log(newDate.toDateString());

// can use `` to write date in new format

// to customize the format 

newDate.toLocaleString('default',{
    weekday :"long"
})

console.log(newDate.toLocaleString('default',{weekday :"long"}));


 