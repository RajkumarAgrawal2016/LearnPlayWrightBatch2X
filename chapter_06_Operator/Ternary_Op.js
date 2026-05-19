let john_age = 18;
let john_will_go_goa = john_age>18 ? "John will go Goa" : "John will not go Goa";
console.log(john_will_go_goa);

let actualstatuscode = 200;
let expectedcodestatus = 200;
let testResult = actualstatuscode === expectedcodestatus ? "PASS":"FAIL";
console.log(testResult);

let environment = "staging";
let baseUrl = environment === "prod" ? "https://api.example.com":"https://https://staging-api.example.com";
console.log(baseUrl);

let isCI=true;
let browseMode = isCI ? "headless":"headed";
console.log("Launching browser in:", browseMode, "mode");

let responseTime= 850;
let sla= 1000;
let slaStatus = responseTime<=sla ? "Within SLA":"SLA breached";
console.log(slaStatus);

let age =26;
let is_pramod_goa = age>26 ? "will go goa":"will not go goa";
console.log(is_pramod_goa);


//nasted ternary
let age_proamod= 45;
let is_pramod_d= age_proamod>18 ? (age_proamod>26 ? "Can Drink":"Can not drink"): "No Goa";
console.log(is_pramod_d);

let statusCode = 404;
let category =
         statusCode < 300 ? "Success" : 
               statusCode < 400 ? "Regirect":
                    statusCode < 500 ? "Client error":"Server Error";
console.log('Status ${statusCode}: ${category}');


let temp = 35;
let feel = (temp>=40) ? "Very hot!" :
           (temp>=30) ? "Hot" :
           (temp>= 20) ? "Warm":
           (temp>=10) ? "Cool": "Cold";
console.log("7. Temprature:",temp, "|Feel:",feel);
