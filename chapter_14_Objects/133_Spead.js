const obj1 = {a:1, b:2};
const adj2 = {c:3, d:4};

const copy = {...obj1};
console.log(copy);
console.log(copy.a);
console.log(copy.b);
console.log(copy["a"]);

let config1 = {browser : "Chrome", timeout : 3000};
//Modifying properties allowed
config1.browser =  "Firefox";
config1.timeout = 2000;
config1.retries = 2;
console.log(config1);

config1 = {browser : "Safari"};

console.log(config1);

//print
console.log("...");

