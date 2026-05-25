let browser = ["Chrome","Edge","IE","Firefox","Safari","Opera"];
console.log(browser.length);
console.log(browser);

//browser.pop();// delete item from last
//console.log(browser);

let remove= browser.shift();// remove item from start
console.log(browser);
console.log(remove); // print remove item

for(let i= 0; i< browser.length; i++){
        console.log(browser[i]);    
        if(browser[i] === "Opera"){
            console.log("Opera is removed from the Seleniium!");

        }
}


