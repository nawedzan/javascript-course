// a small warning with this

const user1={
    firstname:'nawed',
    secondname:"zan",
    about:function(){
        console.log(this.firstname,this.secondname)
    }
}
user1.about() // output - nawed zan
// now if we store this funciton in a varaible and call that variable we should get the sanme output
const func=user1.about;
func() // output - undefined undefined

// it is happening coz when we copied the user1.about funciton we did not copy the entire object into the function 
// we copied only the funciton

// something like this

// function func(){
//     console.log(this.firstname,this.secondname)
// }

// that is why we got the error

//now we know that bind keyword keeps the this of the object passed in the argument and returns a function 
// so what we can do is

const func1=user1.about.bind(user1);
func1() // nawed zan