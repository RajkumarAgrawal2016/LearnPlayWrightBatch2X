function test(testName, callback){
    console.log(testName);
    callback();
}

test("Rajkumar",  () => {
    console.log("I am an arrow function");
})