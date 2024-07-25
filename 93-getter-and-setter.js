// getter and setters 
class Person{
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    get fullName(){
        console.log(56);
        return `${this.firstName} ${this.lastName}`
    }
    set fullName(argument){
        const [firstName, lastName] = argument.split(" ");
        this.firstName = firstName;
        this.lastName = lastName;
    }
}


const person1 = new Person("harshit", "sharma", 5);
// console.log(person1.fullName());
// this line gives an error becoz get keyword is used before fullname otherwise this line would work

console.log(person1.fullName);
person1.fullName = "mohit vashistha";
console.log(person1);
console.log(person1.fullName);


// if you want to use function /method as property or key value pair thing we can use get keyword 
// get keyword turns the function name as key and its return as value

// set keyword sets the return value as the value passed provided a argument must be given in our case argument 
// and this keyword must be used to set that value.