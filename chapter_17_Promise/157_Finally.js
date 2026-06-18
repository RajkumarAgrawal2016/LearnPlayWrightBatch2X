let testRun = new Promise(function(resolved, rejected){
    let apiCall = true;
    if(apiCall){
        resolved({"status":"Done"});
    }else{
        rejected("Assertion failed")
    }
});
    testRun.then(function(data){
        console.log(data);
    }).catch(function (error){
        console.log(error);
    }).finally(function (){
        //this code will execute any how
        console.log("I will be executed anyHow!");
    })