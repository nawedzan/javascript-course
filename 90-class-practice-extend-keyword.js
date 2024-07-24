// class Animal {
//     constructor(name, age){
//         this.name = name;
//         this.age = age;
//     }

//     eat(){
//         return `${this.name} is eating`;
//     }

//     isSuperCute(){
//         return this.age <= 1;
//     }

//     isCute(){
//         return true;
//     }
// }

// class Dog extends Animal{
    
// } 

// const tommy = new Dog("tommy", 3);
// console.log(tommy);
// console.log(tommy.isCute());

// here dog is sub-class and animal is parent class now what we have here is extend keyword which js way of inheritance
class Animal{
    constructor(name,age){
        this.name=name;
        this.age=age
    }
    eat(){
        console.log("yes he ate");
    }
}
const tommy= new Animal("tommy",18);
tommy.eat();

