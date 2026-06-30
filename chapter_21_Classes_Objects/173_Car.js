class car{
    //Constructor
    constructor(name_given_when_object_creation){
        this.name= name_given_when_object_creation;
    }
    //Attributes
    //Behavior

    driver(){
        console.log("i am driving", this.name);
    }
}

const tesla = new car("Model S");
tesla.driver();

const i10 = new car("Grand i10");
i10.driver();