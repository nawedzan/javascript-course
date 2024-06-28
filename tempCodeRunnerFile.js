function createUser(firstname,age){
    this.firstname=firstname;
    this.age=age;
}

const user1=new createUser("harshit",6)

console.log(user1.age);