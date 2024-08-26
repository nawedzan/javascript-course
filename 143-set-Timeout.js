// js is a synchronus language
/* Single threaded means that only one thing happens at a time.

//stack oveflow answer

Synchronous means that if you need to wait for something, then everything stops until the wait is over.

The most common example of synchronous vs asynchronous in JavaScript is making an HTTP request.

If you make a synchronous request, then you send out the HTTP request over the network and then everything stops.
 Mouse clicks are ignored. Timers that reach zero at put on hold. Nothing happens until the response gets back.

If you want an asynchronous request, then the JS engine carries on with other work. When the request comes back, and the JS engine isn't busy, 
then it is picked up and dealt with */


/* I found this and it really helped me to understand:

"In the end threading is about how many blocks of code (i.e. threads) we run on your computer's microprocessor simultaneously. 
If you have multiple 'cores' (like most modern Intel processors have) you can run multiple 'threads' simultaneously 
(i.e. each processor core is processing instructions at the same time).

Javascript engines don't do this. Javascript doesn't necessarily get faster with more processor cores.

On the other hand synchronous/asynchronous has to do with how a single thread is processed. 
Synchronous means 'wait for me to finish before doing something else'. 
Asynchronous means 'it's ok, keep going while I finish'. 
Javascript is synchronous and single-threaded. Only one thing is happening at a time within the engine, 
and only one set of instructions is being sent to your computer's microprocessor."*/

// ----------------------------------------------

// no matter how fast the set timeout the function will work when G.E.C becomes emoty
 /* becasue the web api who is responsible for execution of the function will wait for the said time in the argument 
 and than push the function in callback queue 
 and callback queue is governed by the eventloop and event loop makes sure that when callstack is 
 empty than stuff of callback queue are pushed in it */


 console.log("script start");

const id = setTimeout(() => {
  console.log("inside setTimeout0");
}, 1000);


  
  const id2 = setTimeout(() => {
        const id3 = setTimeout(() => {
        console.log("inside setTimeout2p");
      }, 1000);
      
    console.log("inside setTimeout8p",id);
  }, 1000);

  const id1 = setTimeout(() => {
    console.log("inside setTimeout");
  }, 1000);
  
for (let i = 1; i < 100; i++) {

  console.log("....");
}

console.log(typeof(id))
// clearTimeout(id1)
console.log("settimeout id is ", id,id1,'p'+id2);
console.log("clearing time out");
// clearTimeout(id);
console.log("Script end");


// -----------------------------------------------------------------------


// the explaination for 

for (var i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log(i);
  }, 1000);
}
// Logs 3, 3, 3


// and 

let i = 0;
for (; i < 3; i++) {
  setTimeout(() => {
    console.log(i);
  }, 1000);
}


/* Ok we can walk through this...

Starting with the first example using var.

for (var i = 0; i < 3; i++) {
  setTimeout(function () {
    console.log(i)
  }, 1000 + i)
}
When the current environment record for the outer scope - assuming its global - is created, the scope is checked for declarations and those declarations are hoisted. In this case it includes var i, so an i binding is created in the global scope.

Then the code executes encountering the for loop. The for loop will count for 3 iterations, each time using the i variable from the global scope. It first assigns it to 0, then adds 1 for each loop until i is 3. When i is 3, 3 < 3 is no longer true and the loop ends

For each iteration of the loop, the loop executes its loop statement. In this case its the block

{
  setTimeout(function () {
    console.log(i)
  }, 1000 + i)
}
For each loop, the runtime will create a new declarative environment record for the variables in this block. There are no variables in this block, so this new record isn't doing much. But the scope chain at this point looks like this:

global { var i } -> block {}
The setTimeout is called passing in a function expression. When the function is created, it is created as a closure that captures its outer scope, in this case the block scope, in an internal property called [[Environment]]. This property doesn't come into play until the function is called, which happens later. Instead the setTimeout simple stores the function internally knowing it needs to call it when the respective timeout time (1000 + i) has elapsed.

When the loop completes, the global execution context would have ended and the event loop (a different kind of loop) can start processing new tasks since all of the synchronous code of this call stack has run to completion. As the event loop spins, picking up new tasks as they come up, it also checks timers.

When the first timer has elapsed (1000 + 0), its respective callback is found and a new task is created to call it. The event loop will finish any tasks before it then run that task running the function (the callback):

function () {
  console.log(i)
}
When called, a local scope is created for the function body and its outer environment is set to the scope in the function's internal [[Environment]] property. In this case, it refers to the block scope that was created in the for loop back when this function was first created. That scope has its own outer environment which is the global scope making up the full scope chain that will now be available to the function body:

global { var i = 3 } -> block {} -> local {}
Calling the function runs

  console.log(i)
Which checks the scope chain for the variable i and finds it in the global scope where its value is 3 - set to 3 back when the loop ran and ended with i = 3.

This process repeats 2 more times with two other timers (1000 + 1 and 1000 + 2). In each case, a callback will find the same i variable as the other callbacks, the i in the global scope whose value is 3. The result is 3 printed 3 times.

The second example using let.

for (let i = 0; i < 3; i++) {
  setTimeout(function () {
    console.log(i)
  }, 1000 + i)
}
When the current environment record for the outer scope - assuming its global - is created, the scope is checked for declarations and those declarations are hoisted. In this case, JavaScript doesn't recognize the let i in the for loop because it knows not to consider them when looking for lexical declarations (those including let, const and class). It's only when the loop is using a var declaration does it create a binding when finding variables to hoist.

Then the code executes encountering the for loop. In the very specific case that the loop is using let for its initialization, some extra steps are performed.

A new "initialization" environment record is created to be the new current scope

The variables being declared in the initialization are logged. In this case its just the i variable.

For each of the logged variables, new bindings are created in the new environment record

Once that's done the for loop starts to evaluate, starting with initializing the variables by running the loop initialization code (i = 0). Once thats done, the looping begins.

For each loop iteration, another new "iteration" environment record is created. This new environment becomes the current scope, replacing the old new environment record, and it gets a copy of all the logged variables that were captured before using the values from that previous record. For the first loop, it means this new record gets an i variable with the value 0 since that first record had an i with the initialized value.

Once variables are copied, the condition is checked, making sure i < 3 is true and if so runs the loop statement. The body of the for loop gets run the same as before with one important difference. The scope chain for this loop now looks like this

global {} -> iteration { let i } -> block {}
There is now a new scope between global and the loop block. This scope is a per-iteration scope defined by the environment record created for that iteration.

When the body of the loop completes, the next loop starts and it gets its own, new environment record, and the variables from the old are copied over. For the second iteration, the value copied is i = 0 since that was the value of i in the iteration scope at the end of the last iteration. When this iteration starts, because its not the first iteration, the loop increment runs immediately (i++) updating i to i = 1. Assuming the condition continues to be true the loop continues. This process repeats for each loop iteration until the condition is no longer true.

When the body of the loop runs, the setTimeout gets called and gets its callback. This is all like before except the callback now has an [[Environment]] that includes a new scope. No longer is it just the block scope and global. It now also includes the iteration scope - the scope where i is defined, and not just any i, a copy of i specific to that scope. Now when each callback is called it gets called with

global {} -> iteration { let i } -> block {} -> local {}
Each callback has a different iteration scope in its environment chain because each of these scopes were created for each loop iteration. And because each scope has a copy of i, each callback also has access to a different copy of i, each of those having different values because they each got copied and incremented independently. So for each timer callback:

callback @ 1000 + 0: global {} -> iteration { let i = 0 } -> block {} -> local {}
callback @ 1000 + 1: global {} -> iteration { let i = 1 } -> block {} -> local {}
callback @ 1000 + 2: global {} -> iteration { let i = 2 } -> block {} -> local {}
Because of this, when each console.log(i) runs, they see different values of i, each with the same value of i that it had when the loop originally ran unlike before where they each used the same i variable from the global scope. Note that each of these callbacks still refer to the same global scope. They just no longer get i from that scope.

The short of it is, when using var, one variable, i, is shared between all callbacks. Its a single variable that is used to determine when the loop ends, so its value when the callbacks run will be the final value that failed the loop condition. When using let, the loop gets new i variables for each iteration, and the callbacks will see those variables instead a single shared one. Because they're separate variables, they don't each get incremented for each loop iteration and remain their original values for their respective loop iteration.*/

// new decalrative env

/* In JavaScript, the "new declarative environment record" is a concept related to how variables are stored and accessed during the execution of code, particularly within different scopes.

### Declarative Environment Record

A *declarative environment record* is a component of the execution context that keeps track of variables, functions, and block-scoped entities (like let and const). It is essentially a data structure that maps variable names to their values and keeps track of their state.

### When is a New Declarative Environment Record Created?

1. *Function Execution*:
   - When a function is invoked, a new execution context is created, which includes a new declarative environment record. This record holds the function's parameters, local variables, and function declarations.

2. **Block Scoping (with let, const, and class):
   - When a block (e.g., { ... }) is entered, a new declarative environment record may be created if there are block-scoped declarations inside the block. For example, if a let or const variable is declared inside a for loop or an if statement, it gets its own environment record.

3. **For Loop with let or const**:
   - Specifically, when a for loop uses let or const, a new declarative environment record is created for each iteration of the loop. This record contains a unique binding for the loop variable. This is what ensures that each iteration of the loop has its own separate instance of the loop variable, which is crucial for asynchronous operations like setTimeout.

### How Does it Work?

When JavaScript encounters a block or a function, it creates a new declarative environment record to store any variables declared within that scope. If the block is entered multiple times (e.g., through loop iterations), a new record is created each time if block-scoped variables are declared.

For example, in the for (let i = 0; i < 3; i++) { ... } loop:

- On the first iteration, a new declarative environment record is created. It stores the value of i = 0.
- On the second iteration, a new declarative environment record is created again, storing i = 1.
- This process repeats, ensuring that each iteration has its own environment record.

These records are then part of the scope chain for the function or block where they are created. When a function (like the callback in setTimeout) accesses a variable, it checks its own environment record first, then moves up the scope chain if necessary.

### Why Does This Matter?

Understanding when and how new declarative environment records are created helps explain why let and const behave differently from var, especially in loops and asynchronous code. Each iteration of a loop with let or const gets a new environment record, preserving the state of the loop variable as it was during that specific iteration. This is why callbacks in a for loop using let see different values of i, while those using var see the final value after the loop ends.

This concept is key to writing reliable and predictable JavaScript, particularly when dealing with closures and asynchronous operations. */


// --------------------------------

// why let creates so many iteration blocks

 /* When you use let in a for loop, JavaScript creates a new "iteration environment" (or "iteration block") for each iteration of the loop. This behavior is crucial for understanding how let enables each iteration to have its own separate variable bindings, which is particularly important in the context of closures and asynchronous code. Let’s break down why this happens.

### Why Does let Create Iteration Blocks?

1. *Block Scope*: 
   - Variables declared with let are block-scoped. This means they are confined to the block { ... } in which they are declared.
   - In the context of a for loop, each iteration of the loop can be thought of as its own block. Because let is block-scoped, JavaScript creates a new scope (or block) for each iteration to ensure that the variable declared with let is unique to that iteration.

2. *Closure and Asynchronous Code*:
   - Consider a scenario where you use setTimeout inside a for loop. If let didn't create a new iteration block, all iterations would share the same variable, which could lead to unexpected behavior.
   - By creating a new iteration block, let ensures that any function (e.g., a callback in setTimeout) that closes over the loop variable captures the value of that variable as it was during that particular iteration.

3. *Variable Capture*:
   - When a new iteration block is created, it captures the value of the loop variable (i in this case) as it was during that iteration. This captured value is preserved even when the loop continues, allowing any asynchronous callbacks to access the correct value later.

### How It Works:

Let's revisit the for loop with let:

javascript
for (let i = 0; i < 3; i++) {
  setTimeout(function () {
    console.log(i);
  }, 1000 + i);
}


- *Iteration 1* (i = 0): 
  - JavaScript creates a new iteration block and initializes i to 0 within this block.
  - setTimeout is called, and the callback function closes over this block, capturing i = 0.

- *Iteration 2* (i = 1):
  - A new iteration block is created, and i is now 1 within this block.
  - setTimeout is called again, and this new callback function closes over the new block, capturing i = 1.

- *Iteration 3* (i = 2):
  - Another new iteration block is created, and i is 2 within this block.
  - setTimeout captures this final iteration's block, capturing i = 2.

### Result:

- When the setTimeout callbacks execute, each one refers to a different iteration block:
  - The first callback refers to the block where i = 0.
  - The second callback refers to the block where i = 1.
  - The third callback refers to the block where i = 2.

This behavior allows each callback to print the correct value of i, corresponding to the value during its respective loop iteration. Without these iteration blocks, all callbacks would refer to the same variable (as with var), and they'd all print the same value (which would be the final value of i after the loop ends).

### Why is This Important?

The creation of separate iteration blocks for each loop iteration:

1. *Ensures Correct Variable Capture*: 
   - Each iteration’s variable is independent, which is essential for correct behavior in asynchronous functions like setTimeout.

2. *Prevents Common Pitfalls*:
   - Without this mechanism, it would be easy to encounter bugs where all asynchronous callbacks share the same variable state, leading to incorrect outputs.

3. *Supports Predictability in Closures*:
   - By creating separate scopes, JavaScript ensures that closures behave predictably, allowing developers to rely on consistent and expected variable values within asynchronous callbacks.

### Summary

let creates a new iteration block for each iteration of a for loop to ensure that each iteration has its own distinct scope. This mechanism is particularly important in scenarios involving closures and asynchronous code, as it allows each iteration to capture and retain the correct state independently of others. This behavior prevents issues where all iterations would otherwise share the same variable, leading to potential bugs in the code.
 */
