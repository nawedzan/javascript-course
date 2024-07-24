
// const userMethods={
//     isAbout:function(){
//         console.log(`${this.firstname} ${this.lastname} has an email id of ${this.email} and is ${this.age} old and lives in ${this.address}`)
//     },
//     is18:function(){
//     if(this.age>=18){
//                  console.log(`${this.firstname} is old enough to drink`)
//              }
//              else{
//                  console.log("dont drink")
//              }
//     }
// }

function createUser(firstname,lastname,email,age,address){
    const user=Object.create(createUser.prototype);
    user.firstname=firstname;
    user.lastname=lastname;
    user.email=email;
    user.age=age;
    user.address=address;
    // user.about=userMethods.isAbout;
    // user.is18=userMethods.is18;
    return user;                                                        

}
createUser.prototype.isAbout=function(){
    console.log(`${this.firstname} ${this.lastname} has an email id of ${this.email} and is ${this.age} old and lives in ${this.address}`)

}
createUser.prototype.is18=function(){
    if(this.age>=18){
        console.log(`${this.firstname} is old enough to drink`)
    }
    else{
        console.log("dont drink")
    }

}
createUser.prototype.living=function(){
    console.log("he is alive");
}
const user1=createUser("nawed","zan","nawedzan3016@gmail.com",26,"jivi")

user1.is18() // this works
user1.living();

// the whole point of this lecture was to why create a separate object with all the function when you can link the prototype(object of a function)
// of the constructor function with the created object. using object.create

