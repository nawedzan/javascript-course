//for each method
// let numbers=[1,2,3,4];
// numbers.forEach(function(a){

//     console.log(a);
// })
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
// wont work on strings
// lets try changing the array with foreach

let numbers=[1,2,3,4];
numbers.forEach(function(a,i){
    numbers[i]=numbers[i]+1;
    console.log(this.age);
},users[0])
console.log(numbers[1])

// the given array can be changed with foreach
// if the function is not consoleloging than nothing gets printed the return statement is ignored
// for each takes two arguments one is callback function the other is thisarg
