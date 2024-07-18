//for each method
let numbers="jasper";
numbers.forEach(function(a){

    console.log(a);
})
// runs a specified function for every element in an array 
// it is different from map as foreach doesnot do anyting with return while in map return elements are specifically stored in a array
// element and index


const users = [
    {firstName: "harshit", age: 23},
    {firstName: "mohit", age: 21},
    {firstName: "nitish", age: 22},
    {firstName: "garima", age: 20},
]

users.forEach(function(user){
    console.log(user.firstName);
})
