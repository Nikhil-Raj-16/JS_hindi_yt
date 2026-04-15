// code ko ek package mei band kar diya, ab jab jaha jitna bar use kar skte hai uski copy ko





function saymyname(){
    console.log("N");
    console.log("I");
    console.log("K");
    console.log("H");
    console.log("I");
    console.log("L");
}

// saymyname()    // () - execution
// saymyname    // refernce


// function addTwoNumbers(number1,number2){    // parameters
//     console.log(number1+number2);
// }

// addTwoNumbers(3,4)  //arguments





// const result = addTwoNumbers(3,4)  
// console.log(`Result : ${result}`);    // undefined because the function is printing the value not returning

// to correct it 

function addTwoNumbers(number1,number2){    // parameters
    // let result = number1+number2
    // return result

    return number1 + number2
    
}


const ans = addTwoNumbers(3,4)  
// console.log(`Result : ${ans}`);

// different types of parameters

// (1.) undefined -> false
// if you want to give a default vslue if,user gives undefined

function loginUserMessage(username = "Guest_user"){
    if(!username){
        console.log("Please enter a username");
        return
        
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("Nikhil"));
// console.log(loginUserMessage());


// (2.) like we don't know the no of arguments like adding items in shopping cart

// ...  3 dots are called rest or spread operator based on use case


//  here ... it means to collect all and give at once

function calculateCartPrice(val1,val2,...num1){
    return num1
}

// console.log(calculateCartPrice(200,400,600,2200,4510));

// (3.) Passing Object as function argument

const user = {
    username: "Nikhil",
    price: 199
}
function handleObject(anyobject){
    console.log(`Username is ${anyobject["username"]} and price is ${anyobject["price"]}`);
    
}
// e.g if it was prices, then it will give undefined
// handleObject(user)

// another way to pass object

handleObject({
    username : "SAM",
    price : 656
})


// (4.) Passing array in argument

const newArray = [3243,4322,1132,1321]

function returnSecondValue(array){
    return array[1]
}

// console.log(returnSecondValue(newArray));
console.log(returnSecondValue([43,234,76,213,3]));


