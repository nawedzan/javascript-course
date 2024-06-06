
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
const user1=createUser("nawed","zan","nawedzan3016@gmail.com",26,"jivi")

user1.is18() // this works