// function createUser(firstname,age){
//     this.firstname=firstname;
//     this.age=age;
// }

// const user1=new createUser("harshit",6)

// console.log(user1.age);

//new keyword creates an empty object
// new


// new keyword 
// 1.) this = {}
// 2.) return {} 
// 3.) binds the prototype  of the function with the __proto__ of the created object

// __proto__ 
// // official ecmascript document
// [[prototype]]

// constructor function 
function CreateUser(firstName, lastName, email, age, address){
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.age = age;
    this.address = address;
}
CreateUser.prototype.about = function(){
    return `${this.firstName} is ${this.age} years old.`;
};
CreateUser.prototype.is18 = function (){
    return this.age >= 18; 
}
CreateUser.prototype.sing = function (){
    return "la la la la ";
}

// whenever you create a constructor function that needs to be invoked with new keyword than use a pascal-case or start the function with capital letters


const user1 = new CreateUser('harshit', 'vashsith', 'harshit@gmail.com', 18, "my address");
const user2 = new CreateUser('harsh', 'vashsith', 'harshit@gmail.com', 19, "my address");
const user3 = new CreateUser('mohit', 'vashsitha', 'harshit@gmail.com', 17, "my address");
console.log(user1);
console.log(user1.is18());