interface APIResponse{
    readonly statuscode: number;
    body: string;
    headers?: object;
    responseTime?: number
}

//readonly- Can't modify the readonly value

let response : APIResponse = {
    statuscode:200,
    body:'{"user": "admin"}'
}
console.log("Status:", response.statuscode);
console.log("Body:", response.body);
console.log("Headers", response.headers);