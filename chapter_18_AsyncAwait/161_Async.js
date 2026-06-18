async function testApi(){
    try{
        let results = await Promise.reject("503 reject");
    }catch(error){
        console.log("Clean up!");
    }
}
testApi();