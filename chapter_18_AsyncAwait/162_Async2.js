function getToken(){
    return Promise.resolve("abc123");
}

//PlayWright
//page.goto()- Promise();
//await page.goto();

async function run(){
    let token = await getToken();
    console.log(token);
}
run();