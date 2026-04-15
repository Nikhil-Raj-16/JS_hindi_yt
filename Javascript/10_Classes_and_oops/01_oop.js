const user = {
    username : "Nikhil",
    loginCount : 5,
    LoggedIn : true,

    getUserDetails : function(){
        // console.log("Got user details from database");
        // console.log(`Username : ${this.username}`);
        // console.log(this);
        
        
        
    }
}

// console.log(user.username);
console.log(user.getUserDetails());

// console.log(this); in IDE(node environment) -> {}

// but in console it gives, window functions


function User(username,loginCount,LoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.LoggedIn = LoggedIn;

    return this;
}

// const userOne = User("Nikhil",5,true);
// const userTwo = User("Keshav",12,false);
// console.log(userOne);   overwrites the userOne by userTwo


const userOne = new User("Nikhil",5,true);
const userTwo = new User("Keshav",12,false);
// console.log(userOne); //  not overwrites the userOne by userTwo
// console.log(userTwo);
console.log(userOne.constructor);





