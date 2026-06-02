function retry(testName, maxRetries = 3, delay=1000){
    console.log(`Retrying ${testName} up to ${maxRetries} times, ${delay}ms apart`);
}

retry("loginTest");
retry("REgistration Test",5,2000);