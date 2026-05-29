let a = [1,2];
let b = [3,4];

let c = a.concat(b);

console.log(c);
// spread modern way- concatenations.(...)

let d = [...a,...b];

console.log(d);

//join


let s = ["pass","skip","fail"].join("|");
console.log(s);