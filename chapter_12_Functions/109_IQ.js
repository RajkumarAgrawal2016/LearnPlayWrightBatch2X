// Return a value
function getStatus(code){
    if(code>= 200 && code <=300) return "success";
    if(code>= 400 && code <500) return "client error";
    if(code >= 500) return "server error";
}

console.log(getStatus(200));
console.log(getStatus(300));
console.log(getStatus(300));
console.log(getStatus(400));
console.log(getStatus(500));

function logTest(name){
    console.log(`Running: , ${name}`);
}

logTest("saurabh");




function logTest1(name){
    return (`Running! , ${name}`);
}
console.log(logTest1("Aman"));

const logTest2 = function(name){
    return (`HI , ${name}`);
}
console.log(logTest2("Amar"));