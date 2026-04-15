const coding = ["Js","Cpp","Ruby","Java","Python"]

// coding.forEach( function (item) {
//     // operation to do on values of array
//     // console.log(item);
    
// } )

// callback function doesn't have name

coding.forEach((item) => {
    // console.log(item);
    
})

// function printme(item){
//     console.log(`hi, ${item}`);
    
// }

// coding.forEach(printme)

coding.forEach((item,index,arr) => {
    // console.log(item,index,arr);
    
})

const newcoding = [
    {
        languagename : "JavaScript",
        langauagefilename : "js"
    },
    {
        languagename : "Python",
        langauagefilename : "py"
    },
    {
        languagename : "Java",
        langauagefilename : "java"
    }
]

newcoding.forEach( (item) => {
    // console.log(item.languagename);
    
})


