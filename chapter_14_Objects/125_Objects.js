//objects/key value

let student1= {name : "Amit", age: 30};
let student2= {name: "Kamal"};
let student3= {name : "kumar", age : 30, phone: 9876543210};
//key will not be in double quotes, in JSOn, only key we provide in double quotes

let JSON_student4 = {"name": "Gaurav", "age": 50, "phone":9876543210};

let a = {status:"Pass"};

console.log(a.status);
console.log(a["status"]);

// 
let b = a;
b.status = "fail";
console.log(a.status);
console.log(b.status);

let c = {status : "pass"};
let d = {status : "pass"};

console.log(c);
console.log(d);

if(c===d){
    console.log("true");
}else{
    console.log("false");
}