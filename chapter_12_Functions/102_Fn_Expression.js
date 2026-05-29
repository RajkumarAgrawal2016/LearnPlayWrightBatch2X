const greet = function (name){
    return `Hello, ${name}`;
}

let r = greet("Rajkumar");
console.log(r);

//type 4 normal fn
function greet1(name){
    return `Hello, ${name}`;
}

const greet2 = function(name1){
        return `Hello, ${name1}`;
}

console.log(greet1("Kumar"));
console.log(greet2("Amol"));