//make your own methods
// when we want to write a object which uses the properties of that object itself we should use this
// this upto now is like a pointer to the immmediate object
// this is that object which calls the function in which this is used.
//---funciton inside object
// this keyword also allows one function to be used by as many objects as possible
// const user={
//     Name:"nawed",
//     age:18,
//     about:function(){
//         console.log(this.Name,this.age);
//     }

// }
// user.about()
// // ----------------
// const user1={
//     Name:"nawed",
//     age:18,
//     about:function(Name,age){
//         console.log(`${user1.Name} and ${user1.age}`)
//     }
// }
// user1.about()

// --- this being used as an outside funciton

function personInfo(){
    console.log(`person name is ${this.firstName} and age is ${this.age}`);
}

const person1 = {
    firstName : "harsh",
    age: 8,
    about: personInfo
}
const person2 = {
    firstName : "mohit",
    age: 18,
    about: personInfo
}
const person3 = {
    firstName : "nitish",
    age: 17,
    about: personInfo
}

person1.about();
person2.about();
person3.about();