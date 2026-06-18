function openBrowser(){
    return new Promise(function (resolved){
        //Code to open browser
        resolved("Open browser");
    })
}

function goToLogin(){
    return new Promise(function (resolved){
        resolved("Login page loaded");
    })
}
function enterCredential(){
    return new Promise(function (resolved){
        resolved("Credentials entered!");
    })
}
function clickLogin(){
    return new Promise(function (resolved){
        resolved("Logged in successfully");
    });
}

openBrowser()
    .then(function (msg){
    console.log("Step1:", msg);
    return openBrowser();
}).then(function (msg){
    console.log("Step2:", msg);
    return goToLogin();
}).then(function (msg){
    console.log("Step3:", msg);
    return enterCredential();
}).then(function (msg){
    console.log("Step4:", msg);
    return clickLogin();
}).catch(function (error){
    console.log("Error:", error);
}).finally(function(){
    console.log("Message: This message will be execute always")
});