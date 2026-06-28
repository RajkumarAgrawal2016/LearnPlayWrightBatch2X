class Person{

    constructor(){
        console.log("I will be created when object is created");
    }

    //Attributes
    name;
    email;
    salary;
    address;

    //Behavior
    sleep(){}
    eat(){}
    walk(){}
}

const obj_ref = new Person();
console.log(obj_ref);