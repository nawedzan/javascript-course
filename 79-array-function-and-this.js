// arrow functions nad this

const user1 = {
    firstName : "harshit",
    age: 8,
    about: () => {
        console.log(this.firstName, this.age);
    }   
}

user1.about(user1);

// arrow funciton takes the this of its lexical environment 
// in the case of above example the this keyword points to window object