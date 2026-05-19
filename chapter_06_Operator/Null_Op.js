console.log(null>=0); //true
console.log(null===0); //false

//Nullish operator

let amul=null;
let milk_required = amul?? "Nandani Milk";
console.log(milk_required);

let amul1="dairy";
let milk_required1 = amul1?? "Nandani Milk";
console.log(milk_required1);