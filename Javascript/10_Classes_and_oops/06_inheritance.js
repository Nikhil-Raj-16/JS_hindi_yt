class User {
    constructor(username){
        this.username = username;
    }

    logme(){
        console.log(`Username is : ${this.username}`);
    }
}

//teacher inherits user

class teacher extends User{
    constructor(username,email,password){
        super(username);
        this.email = email;
        this.password = password;
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}

const chai = new teacher("ops","ops@iiitbh.in","123")
// chai.addCourse()
// chai.logme()

const masalaChai = new User("Sangeeta M")
masalaChai.logme()

console.log(chai instanceof User);
console.log(masalaChai instanceof User);
