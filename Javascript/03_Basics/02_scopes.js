// local/block and global scope

let a = 200

if(true){
    let a = 10
    const b = 20
    // console.log("Inner :",a);
    
    
}

// console.log(a);
// console.log(b);
// console.log(c);     // here, var can get scope outside, which is a problem so we don't use


// NOTE- *** console mei scope alag hai aur code environment mei alag hai  ASKED IN INTERVIEW


// func one ke andar two hai toh one bada aur two chota

function one(){
    const username = "Nikhil"  //1

    function two(){
        const website = "Youtube"  //4
        console.log(username); //5
        
    }
    // console.log(website); //2

    
    two()//3
}

// one()//0

if(true){
    const username = "Nikhil"
    if(username === "Nikhil"){
        const website = " Youtube"
        //console.log(username + website);
    }
    // console.log(website);
    
}

// console.log(username);




// +++++++++++++++++++++++++++++  INTERESTING  ++++++++++++++++++++++++


//called function
console.log(addone(6))// before function declartion also works
function addone(num){
    return ++num
}




//called expression , as in JS variables can store anything like object,function,json

// console.log(addtwo(6))// here variable pehle initialization then used

const addtwo = function(num){
    return num +2
}
console.log(addtwo(6))








