function hello(){
    console.log("hello world");
}
const user={
    a:1,
    b:2,
}
const user1={
    a:1,
    b:2,
}
// javascript function ===> function  + object

// console.log(hello.name);

// you can add your own properties 
// hello.myOwnProperty = "very unique value";
// console.log(hello.myOwnProperty);

// name property ---> tells function name;

// function provides more usefull properties.


// console.log(hello.prototype); // {}

// only functions provide prototype property

// hello.prototype.abc = "abc";
// hello.prototype.xyz = "xyz";
// hello.prototype.sing = function(){
//     return "lalalla";
// };
// console.log(hello.prototype.sing());

hello.prototype.good="bad";
hello.prototype.sing=function(){
    return "lalalala";
}
console.log(hello.prototype.good);
console.log(hello.prototype);
console.log(hello.prototype.sing());

// basically in js function works both as an object and a function 
// when we have to store key value pairs for the function we store it in the functions prototype
// now function can have protorypte which are basically object and from previous lesson we learnt that we can create a chain of objects using dunder or  __proto__
Object.setPrototypeOf(hello.prototype,user);
Object.setPrototypeOf(user,user1);
// console.log(hello.prototype);
