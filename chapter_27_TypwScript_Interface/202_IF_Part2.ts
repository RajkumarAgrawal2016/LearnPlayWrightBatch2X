// ? mark make object optional
interface APIResponse{
    body: String;
    headers?: Object;
    responseTime?: Number;
}
let response1: APIResponse = {
    body:'Hi',
}

let response2: APIResponse ={
    body : 'Hi',
    headers: {},
    responseTime:400
}