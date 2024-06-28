// const user1={
//     firstname:"nawed",
//     lastname:"zan",
//     email:"nawedzan2016@gmail.com",
//     age:"2",
//     address:"jivi",
//     isABout(){
//         console.log(`${this.firstname} ${this.lastname} has an email id of ${this.email} and is ${this.age} old and lives in ${this.address}`)
//     },
//     is18(){
//         if(this.age>=18){
//             console.log(`${this.firstname} is old enough to drink`)
//         }
//         else{
//             console.log("dont drink")
//         }
//     },
// }
// console.log(user.is18())
//problems are what if there are a million users
// than we cannot define each of there objects
// what we can do is make a function and whenever an array of users request these data we give them their data by calling the reqired function
// so create a funciton which creates an empty object adds key value pair and returns that object
// in empty object key value pair are added using = sign and not : sign
// 
function createUser(firstname,lastname,email,age,address){
    const user={};
    user.firstname=firstname;
    user.lastname=lastname;
    user.email=email;
    user.age=age;
    user.address=address;
    user.isAbout=function(){
               console.log(`${this.firstname} ${this.lastname} has an email id of ${this.email} and is ${this.age} old and lives in ${this.address}`)
               console.log(this.is18)
    }
    user.is18=function(){
        if(this.age>=18){
                        console.log(`${this.firstname} is old enough to drink`)
                    }
                    else{
                        console.log("dont drink")
                    }
                  
    }
    return user;
    // in js this function is called constructor function 
}

const user1=createUser("nawed","zan","nawedzan3016@gmail.com",26,"jivi");
console.log(user1.is18());
console.log(user1)