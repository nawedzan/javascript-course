// intro to clousures

//this is not the full example but leads to the example everything is connected so there is no need to make extra files


// closures
// closure : 30-40%
// analyse : 70-80%
// real example : 100%


// function can return functions

// function outerFunction(){
//     function innerFunction(){
//         console.log("hello world")
//     }
//     return innerFunction;
// }

// const ans = outerFunction();
// // console.log(ans);
// ans();


function printFullName(firstName, lastName){
    let x=0;
    function printName(){
        console.log(firstName);
        console.log(x);
    }
    return printName;
}

const ans = printFullName("harshit", "sharma");
// console.log(printFullName.prototype);
console.log(ans.prototype);
console.log(ans.prototype.x)
ans();

const hello = x => () =>x*x;
const ans1=hello(14);
console.log(hello())
console.log(ans1());

/*Variable scope
When you declare a local variable, that variable has a scope. Generally, local variables exist only 
within the block or function in which you declare them.

function() {
  var a = 1;
  console.log(a); // works
}    
console.log(a); // fails
If I try to access a local variable, most languages will look for it in the current scope, 
then up through the parent scopes until they reach the root scope.

var a = 1;
function() {
  console.log(a); // works
}    
console.log(a); // works
When a block or function is done with, its local variables are no longer needed and are usually blown out of memory.

This is how we normally expect things to work.

A closure is a persistent local variable scope
A closure is a persistent scope which holds on to local variables even after the code execution has moved out of that block. 
Languages which support closure (such as JavaScript, Swift, and Ruby) will allow you to keep a reference to a scope (including its parent scopes), 
even after the block in which those variables were declared has finished executing, provided you keep a reference to that block or function somewhere.

The scope object and all its local variables are tied to the function and will persist as long as that function persists.

This gives us function portability. We can expect any variables that were in scope when the function was first defined to still be in scope 
when we later call the function, even if we call the function in a completely different context.

For example
Here's a really simple example in JavaScript that illustrates the point:

outer = function() {
  var a = 1;
  var inner = function() {
    console.log(a);
  }
  return inner; // this returns a function
}

var fnc = outer(); // execute outer to get inner 
fnc();
Here I have defined a function within a function. The inner function gains access to all the outer function's local variables, including a. 
The variable a is in scope for the inner function.

Normally when a function exits, all its local variables are blown away. However,
 if we return the inner function and assign it to a variable fnc so that it persists after outer has exited,
  all of the variables that were in scope when inner was defined also persist. The variable a has been closed over -- it is within a closure.

Note that the variable a is totally private to fnc. This is a way of creating private variables in a functional programming language such as JavaScript.

As you might be able to guess, when I call fnc() it prints the value of a, which is "1".

In a language without closure, the variable a would have been garbage collected and thrown away when the function outer exited. 
Calling fnc would have thrown an error because a no longer exists.

In JavaScript, the variable a persists because the variable scope is created when the function is first declared and persists for 
as long as the function continues to exist.

a belongs to the scope of outer. The scope of inner has a parent pointer to the scope of outer. fnc is a variable which points to inner.
 a persists as long as fnc persists. a is within the closure.



Further reading (watching)
I made a YouTube video looking at this code with some practical examples of usage.
*/

// -------------------------------------

// Q   is there any way to print all the variablses which exist in the clousure of a function


// In JavaScript, closures capture variables from their surrounding scope. 
// However, JavaScript does not provide a built-in way to list or print all the variables in a closure directly. 
// This is because closures are an abstract concept related to the lexical scope, 
// and there's no explicit data structure that contains the closure's variables

// However, the object your code did log can be inspected in the console (or in the debugger) and you can navigate to the closure scope:

//https://i.sstatic.net/75mpi.png


// it would only print those in scoops that the return function is using

//
// ------------------------------------------------------

// whenever clousures are formed the variable may get wiped out of stack memory but will be present in the heap memory