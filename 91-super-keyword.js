// super 
class Animal {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    eat(){
        return `${this.name} is eating`;
    }

    isSuperCute(){
        return this.age <= 1;
    }

    isCute(){
        return true;
    }
}

class Dog extends Animal{
    constructor(name, age, speed){
        super(name,age);
        this.speed = speed;
    }

    run(){
        return `${this.name} is running at ${this.speed}kmph`
    }
} 
// object / instance 
const tommy = new Dog("tommy", 3,45);
console.log(tommy.run());
console.log(Animal);


// super is a keyword used to acesss the constructor of the parent class
// it cannot touch the methods or the variable not defined in the constructor

//extends Keyword: The super keyword is specifically designed to be used in the context of classes that inherit from other classes using the extends keyword. 
// Without extends, super has no meaning.

// if there is a sub-class with arguments passed to it that doesnot exist in parent-class than super keyword must be used to use the this keyword .
// even if there is just one variable to declare


