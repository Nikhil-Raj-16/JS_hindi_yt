const accountId = 144451
let accountEmail = "Nikhil@google.com"
var accountPassword = "12345"
accountCity = "Jaipur"

// accountId = 2  Not allowed to update const
console.log(accountId);

accountEmail = "hitesh@google.com"
accountPassword = "412379"
accountCity = "Mumbai"

/*
Prefer not to use var, because of issue in block scope and functional scope  , use cons and let
*/ 

console.table([accountId,accountEmail,accountPassword,accountCity])

// if any variable is declared and no value is assigned then in JS, it holds undefined

let accountBalance

console.log(accountBalance)

