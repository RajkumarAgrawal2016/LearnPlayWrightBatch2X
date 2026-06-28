function sayHello(msg: string): void{
    console.log("HI");
}
function greet(msg: string): string{
    return `Hello,${msg}`;
}

//never- function never returns {throws or infinite loop}
function throwError(message: string): never{
    throw new Error(message);
}
function initiateLoop(): never{
    while (true){}
}