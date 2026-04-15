let userOne = { email: "user@google.com", upi: "user@ybl" };
let userTwo = userOne;
userTwo.email = "new@google.com";
console.log(userOne.email);
console.log(userTwo.email);
