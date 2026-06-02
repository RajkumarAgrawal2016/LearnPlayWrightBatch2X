console.log("Hi");
let a =10;
console.log(a);

for(let a =0; a<2; a++){
    console.log(a);
    print();
}

function print(){
    console.log("hello");
}

const print1 = name => console.log(name);
print1("Mittal");

const print2 = () => console.log("****************");
print2();

const print3= n => console.log(n);
print3(10);

const print4 = n=> console.log(n*2);
print4(10);

const print5 = p => p+10;
console.log(print5(20));

const print6=  b => { 
    return b;
}
console.log(print6(10));
