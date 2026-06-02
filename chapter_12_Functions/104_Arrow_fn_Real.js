//if (ourStatusCode >=200  && OurStatusCode <300)
    // This is perfectly a normal function

function validateStatusCode(status){
    if (status >=200 && status <300)
    {
        console.log("Request is fine!");
    }
}
validateStatusCode(210);
//This function is an expression

const validateStatusCode_Exp = function(status){
        if(status >= 200 && status <= 300){
            console.log("Exp Request is fine!");
        }
}
validateStatusCode_Exp(240);
//Arrow function
 const validateStatusCode_Arrow = status =>
 {
    if(status >= 200 && status <= 300){
            console.log("Arrow Request is fine!");
        }
}
validateStatusCode_Arrow(250);