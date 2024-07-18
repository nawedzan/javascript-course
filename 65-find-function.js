// find method 

// const myArray = ["Hello", "catt", "dog", "lion"];

// function isLength3(string){
//     return string.length === 3;
// }

// const ans = myArray.find((string)=>string.length===3);
// console.log(ans);

const users = [
    {userId : 1, userName: "harshit"},
    {userId : 2, userName: "harsh"},
    {userId : 3, userName: "nitish"},
    {userId : 4, userName: 3},
    {userId : 5, userName: "aaditya"},
];

const myUser = users.find((user)=>user.userName===3);
console.log(myUser);

// find method doesnot put the result in the array it only gives one output and first element  that satisfies the condition