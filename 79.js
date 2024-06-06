// solution using object.create

// upto now we saw that we can create a function to create multiple objects and we can create object to hold multiple function
// but we need to call these function from our oject creating function
// and if there are a thousand functions than we have to call all that 
// but we dont need to call all the function if we use object.create

const userMethods={
    isAbout:function(){
        console.log(`${this.firstname} ${this.lastname} has an email id of ${this.email} and is ${this.age} old and lives in ${this.address}`)
    },
    is18:function(){
    if(this.age>=18){
                 console.log(`${this.firstname} is old enough to drink`)
             }
             else{
                 console.log("dont drink")
             }
    }
}
function createUser(firstname,lastname,email,age,address){
    const user=Object.create(userMethods);
    user.firstname=firstname;
    user.lastname=lastname;
    user.email=email;
    user.age=age;
    user.address=address;
    // user.about=userMethods.isAbout;
    // user.is18=userMethods.is18;
    return user;

}

// object.create does two things it creates an object and than chians the reference of its argument object properties  in its __proto__.
// In JavaScript, __proto__ is a property of an object that acts as a reference to the object's prototype. 
const user1=createUser("nawed","zan","nawedzan3016@gmail.com",26,"jivi");
console.log(user1)
console.log('\n')
user1.is18()