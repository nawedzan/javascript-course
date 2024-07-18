// -------------OPTIONAL CHAINING----------------------------
// in optional chaining we chain the properties of properties with a '?' 
// now if say a there is a object of object like user.address.home
//but home is not availbale so the js compiler can put an error there to avoid this
// we use '?' user?.addresss?.home 
// the '?' mark ensueres if hte user is presesnt thant search for its address
// if not than return undefined
const user={
    Name:"nawed",
    age:18,
    realName:this.age,
    about:function(){
        console.log(this.Name,this.age)
        return null
    },
    address:{home:"sundarapada",office:"california",
    }
}
// console.log(user)
// console.log('\n')
// console.log(user.about())
// console.log('\n')
// user.about()
console.log(user?.address?.home)
console.log(user.realName)
// ---------------------------------------------