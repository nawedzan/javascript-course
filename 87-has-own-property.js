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
    this.is18.prototype.get=1;
    return this.age >= 18; 
}
CreateUser.prototype.sing = function (){
    return "la la la la ";
}


const user1 = new CreateUser('harshit', 'vashsith', 'harshit@gmail.com', 18, "my address");
const user2 = new CreateUser('harsh', 'vashsith', 'harshit@gmail.com', 19, "my address");
const user3 = new CreateUser('mohit', 'vashsitha', 'harshit@gmail.com', 17, "my address");

for(let key in user1){
    console.log(user1.key);// this statement wont work becoz its like asking the object to print the value of "key" which doesnot exist
    console.log(user1[key]); // this works
    if(user1.hasOwnProperty(key)){
        console.log(key);
    }
    
}

// what hasOwnProperty does is it checks whether the key of user1 is its own key or is it in its protyotype or in prototype of prototype
// if the key is the objects own key than it returns true or else it returns false
// 
//  OWN EXPERIMENT

// set the prototype of a method of an object to something
console.log(CreateUser.prototype.about())
user2.about.prototype.get=1
// CreateUser.prototype.
const user={
    a:1,
    b:2,
}
Object.setPrototypeOf(user1.about.prototype,user)

console.log(user1.about.prototype)

