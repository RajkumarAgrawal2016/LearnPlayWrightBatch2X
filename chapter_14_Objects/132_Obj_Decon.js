const user = {name1: "John", age:55, city: "NYC"};

// Basic destructuring
const { name1, age } = user;
console.log(name1);
console.log(age);

//Rename variable
const {name1: userName, age: userAge} = user;
console.log(userName);
console.log(userAge);

// destructuring  : Identifier 'age' has already been declared
///const { age } = user;

//Default value
const {country = "USA"}= user;
console.log(country);
console.log(user);

//data object contain user, AND address objects
const data = {
    user: {name : "John",
    address:{
            city : "NYC"
        }
    }
}

const{user:{address:{city}}} = data;
console.log(data.user.address.city);