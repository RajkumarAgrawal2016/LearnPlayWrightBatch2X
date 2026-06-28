interface TestCases {
    id: number;
    name:string;
    status: string;
    duration: number;
}

let test1: TestCases = {
    id:1,
    name:"Login with valid credential",
    status: "Pass",
    duration:1500
}
console.log("TC-" + test1.id + ":" + test1.name + "->" + test1.status);

let test2: TestCases = {
    id:1,
    name:"Login with valid credential",
    status: "fail",
    duration:1500
}
console.log("TC-" + test2.id + ":" + test2.name + "->" + test2.status);