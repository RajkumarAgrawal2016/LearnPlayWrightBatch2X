let apiCall = new Promise(function(resolved, rejected){
        rejected("500 error");
});

apiCall.then(function(data){
    console.log("Success or Resolved");
}).catch(function (error)
{
    console.log(error);
})

// .catch() runs ONLY when the promise is rejected.
//  .then() is completely skipped.





