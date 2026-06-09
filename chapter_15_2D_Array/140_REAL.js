let testMatrix = [
    ["login","pass", 200],
    ["checkout","fail",404],
    ["search","pass",100]

];

console.log(testMatrix);
console.log(testMatrix[0][2]);
console.log(testMatrix[1][1]);
console.log(testMatrix[2][0]);
console.log();

// How many test cases have we executed? 
// How many test cases are passed? 
// What is the status code that you have got for the fail? 

for(let i = 0; i<testMatrix.length; i++){
    for(let j = 0; j<testMatrix[i].length; j++){
        console.log(testMatrix[i][j]);
    }
    console.log();
}
//forEach

testMatrix.forEach(row => {
    row.forEach(
         cell => process.stdout.write(cell + " ")
    );
    console.log();
    
}
);