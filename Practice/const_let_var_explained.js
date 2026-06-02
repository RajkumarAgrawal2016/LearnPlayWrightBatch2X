const BASE_URL = "https://app.thetestingacademy.com";
//const BASE_URL = "https://thetestingacademy.com";//SyntaxError: Identifier 'BASE_URL' has already been declared
//BASE_URL = "https://thetestingacademy.in"; //TypeError: Assignment to constant variable.
console.log(BASE_URL);

var a = 10; //global scoped
console.log(a);
function printHello(){
    console.log("Hello! the testingacademy");
    var a = 20; // Local Scope
    console.log(a);//20
    if (true) {
        var a = 30;
        console.log(a); // 30
    }
    console.log("F->",a);
}
console.log("G ->", a);
printHello();
