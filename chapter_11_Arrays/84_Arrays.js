//Creating Arrays// Array literal(preferred)
let browsers = ["Chrome","Firefox","Safari"]

//Array constructor

let scores = new Array(3);// here 3 is length
scores[0]= 20;
scores[1]= "Amit";
scores[2]= 20.7;

let scores2 = new Array(10,29,38,46);
console.log(scores);
console.log(scores2);

let numbers = new Array(100,200,300,400); //0-3; 4
console.log(numbers);

let test = Array.of(10,20,30,40,50,60);
console.log(test);

// Array.from()

let chars = Array.from("hello");
//["h","e","l","l","o"]

console.log(chars);

