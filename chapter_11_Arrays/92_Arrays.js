let fruits = ["Banana","Cherry","Apple","Drifruit"];
fruits.sort();
console.log(fruits);    

let num1 = [1,9,5,4];
num1.sort();
console.log(num1);

//when number is in 2 digits, then below sorting will not work.
let num2 = [1,15,5,23];
num2.sort();
console.log(num2);

//for 2 digit number there is natural sorting and lexicographic Sorting
num2.sort((a, b) => a-b);//assesnding result of a - b is negative, a is placed before b.
console.log(num2);
num2.sort((a, b) => b-a);//assesnding
console.log(num2);


