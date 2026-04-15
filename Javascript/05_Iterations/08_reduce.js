// used in shopping cart   - to add the prices of all products

// first initial value goes in accumulator, and currentvalue from array
/*
const array = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = array.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue,
);

console.log(sumWithInitial);
// Expected output: 10
*/


const mynum = [1,2,3]

// const total = mynum.reduce(function (accumulator,currentValue){
//     console.log(`Accumulator : ${accumulator}, Current_value : ${currentValue}`);
    
//     return accumulator + currentValue   // sends to accumulator
// },0)


//  arrow func
const total = mynum.reduce( (acc,currentVal) => acc+currentVal ,0) 


console.log(total);


const ShoppingCart = [
    {
        itemName : "Js course",
        price : 799
    },
    {
        itemName : "Python course",
        price : 999
    },
    {
        itemName : "Mobile dev course",
        price : 5999
    }
]

// add all the course prices

let total_bill = ShoppingCart.reduce( (acc_total,item) => (acc_total + item.price),0)

console.log(total_bill);

