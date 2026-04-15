function multipleBy5(num){

    return num*5
}

multipleBy5.power = 2

// console.log(multipleBy5(5));
// console.log(multipleBy5.power);
// console.log(multipleBy5.prototype);  {}, explained in next videos

function createuser(username,score){
    this.username = username;
    this.score = score;
}

// created our own prototype, increment and printMe 
// in JS we only give var.prototype_name as it finds automatically

createuser.prototype.increment = function(){
    this.score++;
}

createuser.prototype.printMe = function(){
    console.log(`Price is ${this.score}`);
    
}

// const chai = createuser("Nikhil",90);   not runs as new keyword has its significance
const chai = new createuser("Nikhil",90);
const tea = createuser("Aman",85);

chai.increment();
chai.printMe();



/*

        FOR SDE 2 to SDE 3

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/


