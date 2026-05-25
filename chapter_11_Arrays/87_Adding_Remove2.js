let arr = [1,2,3];
arr.push(4,5,6);
console.log(arr);

//splice(start, deletecount,....itemsToAdd)

arr.splice(2,2);
console.log(arr);

arr.splice(2,0,99);// add
console.log(arr);
arr.splice(2,1,99);//replace
console.log(arr);

let arr1 = [1,2,3,4,5,6];
arr1.splice(1,2,10,20);
console.log(arr1);


