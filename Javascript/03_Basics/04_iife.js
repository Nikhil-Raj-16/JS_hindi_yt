/*
IIFE - Immediately Invoked function expression 

to remove the function from global scope ke pollution, jo variable waha declared rhta hai uske wajah se pollution 
na ho isliye IIFE is used.
*/ 

// ()();        2nd for calling immediate

(function chai(){   // NAMED IIFE
    console.log(`DB connected`);
})();

// if not ended it will give error.   and we can also use arrow function

((database) => {    // SIMPLE IIFE
    console.log(`DB connected TWO ${database}`);
})('Student');








// we have to also stop IIFE by ';'