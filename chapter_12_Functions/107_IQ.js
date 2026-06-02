function runTest(name, status, duration){
    return `${name} Has been ${status} in ${duration}ms`;
}
const r =runTest("LoginTest: ","Passed",1000);   
console.log(r);