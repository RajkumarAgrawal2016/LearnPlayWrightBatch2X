
let name: string = 'John';
let age: number = 30;
let pi: number = 31.14;
let distance_to_moon: number = 3987654332;
let isActive: boolean = true;
let nothing:null=null;
let notDefined: undefined = undefined;

let numbers: number[] = [1,2,3];
let names: Array<string>= ["John","Jane"];

//Any: Avoid when possible

let anything: any = "hello";

//Unknown -Safer than Any

let unknown: unknown = "hello";

let message: string = "Hello, TypeScript!";
let count: number = 42;
let isActive1: boolean = true;

console.log("Message", message);
console.log("Count", count);
console.log("isActive1", isActive1);