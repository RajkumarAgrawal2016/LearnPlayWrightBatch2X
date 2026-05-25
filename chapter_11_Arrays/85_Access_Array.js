//Accessing & Modifying

let statues = ["pass","fail","skip"];

console.log(statues[0]);
console.log(statues[2]);

console.log(statues.at(-1));
console.log(statues.at(-2));
console.log(statues.at(-3));

//modify
statues[1] = "blocked";
console.log(statues);