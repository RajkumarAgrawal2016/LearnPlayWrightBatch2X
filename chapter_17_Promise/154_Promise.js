let order = new Promise(function (resolved, rejcted){
    let foodready = true;
    if(foodready){
        resolved("Food is ready, and delivered");
    }else{
        rejected("Food order is cancelled, due to rain");
    }
})



