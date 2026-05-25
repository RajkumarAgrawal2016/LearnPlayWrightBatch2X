let results =["pass","fail","pass","error","fail"];

// indexOf - return first index or -1 if not found
console.log(results.indexOf("pass"));
console.log(results.indexOf("fail"));
//lastIndexof -searches from the end
console.log(results.lastIndexOf("fail"));

//includes - return boolean

console.log(results.includes("error"));
console.log(results.includes("skip"));

//find --return first matching element

let num = [10,25,30,45];
let r = num.find(x=> x> 20);
console.log(r);

//findIndex

let p =num.findIndex(n=> n> 25);// print first value index.
console.log(p);

let q = num.findLastIndex(n=> n>20);// last index
console.log(q);

let s = num.findLast(n=> n>20);// last value
console.log(s);