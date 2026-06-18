let apiCall = new Promise(function(resolved, reject){
        resolved({
            status : 200, body : "User data"
        })
});

apiCall.then(function(response)   {
        console.log("Status code:", response.status," and ", "Body: ",response.body);
})

// .then() runs ONLY when the promise resolves successfully.