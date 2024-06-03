//------ call apply and bind -------'

//call

/*The call method in JavaScript is a powerful tool for function invocation 
with a specific this context and arguments provided individually. 
It's especially useful for borrowing methods and handling different this contexts in functions. 
Understanding how to use call can make your code more flexible and reusable.
- the first argument of call function is the this argument of the outsider object
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

