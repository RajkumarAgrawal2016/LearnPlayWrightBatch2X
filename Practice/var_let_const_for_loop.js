var a = 10;
let b = 23;
const c = 3.14;

var browser = "chrome";
var browser = "firefox"; //re declaration
browser = "edge"; //re assignment

var testCases = ["Login","Logout","Signup"];

for (let i = 0; i<testCases.length; i++){  //print array
        console.log(testCases[i]);
}

for (let test_cases of testCases){  // print array
        console.log(test_cases);
}
for (let test_cases in testCases){  // print index
        console.log(test_cases);
}
const items = ['A', 'B'];
items.forEach((item, index) => 
{
  console.log(index, item); // Outputs: "0 A", "1 B"
})


function say(){
    console.log("I am end of the code");
}

say();

var a = 10;  // variable is function scoped

console.log(a);

function printHello(){
        console.log("Hello! the testing academy .com");
        var a = 100;// Local scoped
        console.log(a);
        if(true){
                var a =200;
                console.log(a);
        }
}
printHello();

var a =300;
console.log(a);

//=========================================================

console.log("**************let is blocked scoped****************");
//let a = 10; // error will be displayed, a already been declared

let retryCount = 0;
retryCount = retryCount + 1;
retryCount = retryCount + 1;
console.log("Retry attempt:", retryCount);
//let retryCount = 1;  //SyntaxError: Identifier 'retryCount' has already been declared
retryCount = 10; //reassignment is allowed in JS
console.log("Retry attempt:", retryCount);

//=========================================
let testStatus = "pending";
if(testStatus === "pending"){
        let executionTime = 1200;
        console.log("Inside block:" , executionTime);
}

//console.log(executionTime); // ReferenceError: executionTime is not defined
let name = "pending"; //redeclaration not allowed, reassignment allowed
name = "done";
console.log(name);




