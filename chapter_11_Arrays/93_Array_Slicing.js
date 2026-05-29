// Slicing and Combining
let  arr = [1,2,3,4,5];
//slicing (start, end), return a new array, does not mutate actual -> (start, end-1 ), index = 0
//don't give the end, it will automatically take from start to end

console.log(arr.slice(1,3))// start and nd -1

console.log(arr.slice(2,4)); //3,4 will bw printed

console.log(arr.slice(2));

console.log(arr.slice(-2));

console.log(arr.slice(0));


let arr1= [10,20,30,40,50];
s= arr1.slice(1,4);
console.log(s);
console.log(arr1);

// splice is use for remove 

let arr2 = [10,20,30,40,50];

let removed = arr2.splice(1,2);

console.log(arr2);
console.log(removed);