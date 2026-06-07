const user = {
    name: "John",
    age: 40,
    email: "abc@ab.com"
};

console.log(user);
console.log(user.name);
console.log(user["age"]);
console.log(user["email"]);

//Dynamic property address

const key = "age";

console.log(user[key]); 

//Adding/Modiying properties

user.city= "Mumbai";
user.age = 60;

console.log(user);

let obj = {name : "Login"};

console.log(Object.getOwnPropertyDescriptor(obj, "name"));
// {
//   value: "Login",
//   writable: true,       ← can change the value
//   enumerable: true,     ← shows in for...in / Object.keys()
//   configurable: true    ← can delete or redefine
// }