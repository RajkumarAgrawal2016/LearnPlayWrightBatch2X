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

const printit1= (name) => {return name;}
console.log(printit1("kumar"));

function add(a,b){
    return a+b;
}
console.log(add(10,70));

const add1 = (a,b) => (a+b);
console.log(add(20,40));

const add2 = (a,b) => {return (a+b);}
console.log(add(20,40));

function say(){
        console.log("Hi");
}
say();

const say1 = () => console.log("Hello"); // variable always need to defined empty or fill
say1();
const say2 = () => {return "How are you"};console.log(say2());

const greeting = (name) => {
        const message = "Hi " + name;
        return message;
}
console.log(greeting("java Script"));    