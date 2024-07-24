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
    const user={};
    user.firstname=firstname;
    user.lastname=lastname;
    user.email=email;
    user.age=age;
    user.address=address;
    user.about=userMethods.isAbout;
    user.is18=userMethods.is18;
    return user;

}
// now since this createuser function can have more than one user and there is no reason for these  to  take space for each user 
// unlike key value pair user funtion defination does not have a differnet value
// we can define them in one object and call them when necessary

const user1=createUser("nawed","zan","nawedzan3016@gmail.com",26,"jivi");
user1.is18()