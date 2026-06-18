function print() {
    console.log("Normal Function is called");
}

function placeOrder(ClipboardItem, pramodCallback) {
    console.log("Hi, You order is placed");
    pramodCallback();
}

//first way
placeOrder("Pizza", print);

//second way anoy

placeOrder("Burger", function () {
    console.log("Anoy Fn, I am also a function wihtout name!")
});

placeOrder("Momos", () => {
    console.log("Arrow Fn, I am also a function wihtout name!")
});