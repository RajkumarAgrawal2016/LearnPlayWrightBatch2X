// Reverse string
 let input = "Rajkumar";

 let reverseStr = input.split("").reverse().join("");
 console.log(reverseStr);
// Find maximum number

let num = [10,20,30,40];

const maxnum= Math.max(...num);
console.log(maxnum);

//Check odd and even number

let num1 = 7;
if(num1%2 === 0){
    console.log("Even");
}else{
    console.log("Odd");
}
//count vovels in String

let ch_name = "automation";
let vo = "aeiou";
let count = 0;


    console.log(ch_name.includes(vo).count);
