// Arrow function

const greet = function(name1){
    return `"Hi", ${name1}`;

}

let r = greet("Pramod");
console.log(r);

const greet2 = (name1) => "Hi" + name1;
let r2 = greet2("Lodha");
console.log(r2);

//if you want to make a normal function to arrow functio
//Remove the keyword function, remove the keyword return, remove the curly braces, and use the =>

const doubleit = n => n*2;
console.log(doubleit(10));

const printit = name => console.log(name);
printit("Dutta");