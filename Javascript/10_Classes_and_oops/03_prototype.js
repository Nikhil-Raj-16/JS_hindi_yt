// let myName = "hitesh     "
// let mychannel = "chai     "

// console.log(myName.trueLength);

let myheros = ["Thor","Spiderman"]

let heroPower = {
    thor : "Hammer",
    spiderman : "sling",

    getspiderpower: function(){
        console.log(`Spidy Power is ${this.spiderman}`);
    }
}

// object so that all gets covered like array,string ,function
Object.prototype.nikhil = function(){
    console.log(`Nikhil is present in all objects`);
}


// myheros.nikhil()
// heroPower.nikhil()


Array.prototype.heyNikhil = function(){
    console.log(`Nikhil Says Hello`);
}

// myheros.heyNikhil()
// heroPower.heyNikhil()   heroPower.heyNikhil is not a function


// INHERITANCE


const User = {
    name: "chai",
    email: "chai@google.com"
}

const teacher = {
    makevideo : true
}

const teachingSupport = {
    isAvailable : false
}

const TAsupport = {
    makeAssignment : "JS assignment",
    fullTime : true,
    __proto__ : teachingSupport
}

teacher.__proto__ = User;


// MODERN SYNTAX

Object.setPrototypeOf(teachingSupport,teacher)



// now the question

let anotherUsername = "Nikhil     "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is : ${this.trim().length}`);
}

anotherUsername.trueLength()
"Keshav Kumar".trueLength()
"IceTea".trueLength()