let unknown : unknown = "Hello";

if(typeof unknown ==="string"){
    console.log("Hi");
}

let userName: String;
let userId : number;

//Function anotation


function greet(name:string): string{
    return `Hello, ${name}`;
}

//arrow function annotation

const multiply = (a:number,b:number):number => a*b;

//Object annotations

let use:{name: string; age:number}= {
    name: "John",
    age:30
}