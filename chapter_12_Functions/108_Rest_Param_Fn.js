// Rest of the param

function logResult(suitName, ...results){
    console.log(suitName);
    console.log(results);
}
logResult("Login Test", 1,2,3);
logResult("Reg Test","Hello","Pramod");