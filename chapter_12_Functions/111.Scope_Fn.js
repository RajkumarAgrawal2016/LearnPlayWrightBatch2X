//Scope in function
let env = "Staging";  //Global scope


function setUpConfig(){
    let timeOut = 300; //Local scope
    console.log(env);  //Can access global
    console.log(timeOut); //Can access local

}
setUpConfig();
console.log(env);
//console.log(timeOut);  //ReferenceError: timeOut is not defined