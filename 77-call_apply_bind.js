//------ call apply and bind -------'

//call

/*The call method in JavaScript is a powerful tool for function invocation 
with a specific this context and arguments provided individually. 
It's especially useful for borrowing methods and handling different this contexts in functions. 
Understanding how to use call can make your code more flexible and reusable.
- the first argument of call function is the this argument of the outsider object

if call is used than the value of this changes from the object in which the function is present to the object passed in the argument
*/

// function about(hobby, favMusician){
//     console.log(this.firstName, this.age, hobby, favMusician);
// }
// const user1 = {
//     firstName : "harshit",
//     age: 8,   
// }
// const user2 = {
//     firstName : "mohit",
//     age: 9,
    
// }

// // apply
// // about.apply(user1, ["guitar", "bach"]);
// // const func = about.bind(user2, "guitar", "bach");
// // func();

const user1 = {
        firstName : "harshit",
        age: 8,   
        about: function (x,y){
                console.log(this.firstName, this.age ,x,y );
            }
    }
    const user2 = {
        firstName : "mohit",
        age: 9,

    }
console.dir(user1.about)
    user1.about.call() //works 1
    user1.about.call(user2) //works 2
    
    user1.about.call(user2,'firstarg','secondarg')  // 3




    // apply
    //in the third fucniton call the call apply and bind method the bind method takes all other argument starting from second argument
    // in an array
    user1.about.apply(user2,['thisarg1','thisarg2'])


    // bind 
    //in bind the bind keyword returns a function so we can store it in a variable and call it
     const func=user1.about.bind(user2,'this1','this2')
     func();

//      fn.call(context, arg1, arg2) calls the function with the specified "this" context.

// fn.apply(context, [arg1, arg2]) calls the function with the specified "this" context, but the arguments are passed as an array.

// fn.bind(context) creates a new function which will always use the specified "this" context when it is called.

 // Top-level 'this' is bound to 'globalThis' in scripts.
this.x = 9;
const module1 = {
  x: 81,
  getX() {
    return this.x;
  },
};

// The 'this' parameter of 'getX' is bound to 'module'.
console.log(module1.getX()); // 81

const retrieveX = module1.getX.bind(module1);
// The 'this' parameter of 'retrieveX' is bound to 'globalThis' in non-strict mode.
console.log(retrieveX()); // 9

// Create a new function 'boundGetX' with the 'this' parameter bound to 'module'.
const boundGetX = retrieveX.bind(module1);
console.log(boundGetX()); // 81

// example copied from mdn
