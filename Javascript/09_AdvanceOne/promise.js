
const promiseOne = new Promise(function (resolve,reject) {
    // Do an async task
    // DB calls, Cryptography, network

    setTimeout(function(){
        // resolve();
        console.log('Async Task is complete');
        resolve(); // always async task is completed first i.e setTimeout is printed first and then promise 
    },1000)

})

// .then connection is with resolve
promiseOne.then(function(){
    //recives the argument from promise resolve part
    console.log("Promise Consumed");
})


// same above as different implementation

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log('Async Task 2');
        resolve();
    },1000)  // after resolve happens .this is executed
}).then(function(){
    console.log("Async 2 resolved");
})



const promiseThree = new Promise(function (resolve,reject) {
    setTimeout(function () {
        resolve({username : "Chai" , email : "chai@example.com"})
    },1000)
})

promiseThree.then(function(user){
    console.log(user);
    
})

// const promiseThree = new Promise(function (resolve,reject) {
//     setTimeout(function () {
//         resolve("Nikhil fetched")
//     },1000)
// })

// promiseThree.then(function(user){
//     console.log(user);
    
// })


const promisefour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({username : "Chai" , email : "chai@example.com"})
        }else{
            reject("ERROR : Something went wrong")
        }
    },1000)
})

promisefour.then((user)=>{
    console.log(user);      // these 2 lines runs
    return user.username    // return gives value to .then i.e **chained**
}).then((username)=>{
    console.log(username);   // recives it and prints
}).catch(function(error){
    console.log(error);    // when reject block runs the error is displayed using catch
}).finally(() => {
    console.log("The promise is either resolved or rejected"); // finally block runs always
})



/*
const promiseFive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = false;
        if(!error){
            resolve({username : "JS" , email : "chai@1235.com"})
        }else{
            reject("ERROR : JS went wrong")
        }
    },1000)
})

// in async we handle error by try and catch block

async function consumePromiseFive() {
    try {
        const response = await promiseFive;
        console.log(response);
        
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive()

*/

// fetch mei time lagega toh use await, same for .json , otherwise will show promise<pending>

// async function getallUsers() {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await response.json()
//         console.log(data);
        
//     } catch (error) {
//         console.log(error);
        
//     }
// }

// getallUsers();

// above function in .then and .catch syntax


// fetch returns a promise and based on (resolve, reject) runs (.then , .catch)  
fetch('https://api.github.com/users/hiteshchoudhary')
.then((response) => {
    return response.json()
})
.then((data)=>{
    console.log(data);
})
.catch((error) => {
    console.log(error);
})

// above code is executing first then all the previous codes as we have seen in JS engine video that 
// fetch creates a priority queue(MicroTask Queue) so when setTimeout is called it sends to normal queue(task Queue) in Promise, which is slower than priority queue so, fetch is executed first,

// NOTE - happens only if time is same for both queue




// About fetch

/*
The global fetch() method starts the process of fetching a resource from the network, returning a promise which is fulfilled once the response is available.

The promise resolves to the Response object representing the response to your request.



INTERVIEW Q.
*********************

A fetch() promise only rejects when a network error is encountered (which is usually when there's a permissions issue or similar). A fetch() promise does not reject on HTTP errors (404, etc.). Instead, a then() handler must check the Response.ok and/or Response.status properties.


means promise se request ki aur error 404 aya toh wo apko resolve ya reject mei milega ?,
toh wo resolve mei milega(response) not in reject, reject mei tabhi milega jab wo request hi nahi kar paya hai browser se


for more read https://mdn2.netlify.app/en-us/docs/web/api/fetch/
**********************
*/


/*
FETCH WORKING : 

ONE is gone to Data: variable ke liye memory space reserve karta 
in this two array is there (promise -> resolve)onfulfilled[] and other is (promise -> reject)onRejection[]

in these we can't directly push


and Second IS gone to WebBrowser/Node - webRequest handle -> network Request -> T -> onfulfilled(resolve) 404
                                                                             -> F -> onRejection(reject)

response = fetch
both array have fn inside which puts value inside (data), now data fullfil the response 

so when we write response, we get data which is not directly accesible. 



 
*/

