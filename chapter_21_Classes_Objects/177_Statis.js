class student{
    constructor(name_student, age, phoneNo){
            this.name_student = name_student
            this.age=age
            this.phoneNo= phoneNo
    }
    static name = "PlayWright";
    static mentor_name = "pramodDutta";

    static display(){
        console.log("Hi', i am a comman f(n)");
    }
}

const s1= new student("Yasho", 32, "0987656789");
const s2= new student("Sharad",38, "0987600089");

console.log(s1.name_student);
console.log(s2.name_student);

console.log(student.name);
console.log(student.mentor_name);
//console.log(student.display());