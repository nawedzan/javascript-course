//this keyword
// whenever we write a function in js it is attached to a object 
// that means even we just write a function like below 
//just_a_func is a part of window object

// function just_a_func(){
//     console.log("yo")
// }
// this.just_a_func();
// window.just_a_func();
// document.just_a_func();
// both window and this refer to the same object window
// for future reference this is taken as a context thing 

/*
The keyword `this` in JavaScript is one of the most fundamental but sometimes confusing concepts. It refers to the context in which a function or object is executed or invoked. Its value depends on how and where it is used.

### 1. **What is `this`?**
   - `this` is a special keyword that refers to the "owner" of the current execution context.
   - Its value depends on how the function or method is called, and can be influenced by the context in which the function runs.

### 2. **The Value of `this` in Different Contexts:**

#### a. **Global Context (Outside Any Function):**
   - When `this` is used in the global context (outside any function), it refers to the global object.
   - In browsers, the global object is `window`. In Node.js, it is the `global` object.
   - Example:
     ```javascript
     console.log(this); // In a browser, this will print the `window` object
     ```

#### b. **Inside Functions (Non-strict Mode):**
   - When `this` is used inside a regular function (not a method) and in non-strict mode, it refers to the global object.
   - Example:
     ```javascript
     function myFunc() {
       console.log(this); // In non-strict mode, `this` refers to `window`
     }
     myFunc();
     ```
   - In **strict mode** (`"use strict";`), `this` inside a function will be `undefined`.
     ```javascript
     "use strict";
     function myFunc() {
       console.log(this); // `undefined` in strict mode
     }
     myFunc();
     ```

#### c. **Inside Methods (Object Context):**
   - When `this` is used inside a method (a function that is a property of an object), it refers to the object on which the method was called.
   - Example:
     ```javascript
     const person = {
       name: "Alice",
       greet: function() {
         console.log(this.name); // `this` refers to the `person` object
       }
     };
     person.greet(); // "Alice"
     ```

#### d. **Arrow Functions:**
   - Arrow functions (`() => {}`) behave differently from regular functions. They do not have their own `this`. Instead, `this` is inherited from the surrounding lexical scope (the scope where the function was defined).
   - Example:
     ```javascript
     const obj = {
       name: "Bob",
       greet: function() {
         const arrowFunc = () => {
           console.log(this.name); // `this` is inherited from the `greet` method, so it refers to `obj`
         };
         arrowFunc();
       }
     };
     obj.greet(); // "Bob"
     ```

#### e. **Constructor Functions:**
   - In constructor functions (functions used to create objects), `this` refers to the newly created object.
   - Example:
     ```javascript
     function Person(name) {
       this.name = name; // `this` refers to the new object
     }
     const person1 = new Person("Charlie");
     console.log(person1.name); // "Charlie"
     ```

#### f. **`call()`, `apply()`, and `bind()` Methods:**
   - These methods allow you to manually set the value of `this` when invoking a function.

   - **`call()`**:
     - Calls a function with a specified `this` value and arguments.
     - Example:
       ```javascript
       function sayHello() {
         console.log(this.name);
       }
       const user = { name: "David" };
       sayHello.call(user); // "David"
       ```

   - **`apply()`**:
     - Similar to `call()`, but takes arguments as an array.
     - Example:
       ```javascript
       function greet(greeting) {
         console.log(greeting + ", " + this.name);
       }
       const user = { name: "Eve" };
       greet.apply(user, ["Hello"]); // "Hello, Eve"
       ```

   - **`bind()`**:
     - Creates a new function with the specified `this` value.
     - Example:
       ```javascript
       function sayHello() {
         console.log(this.name);
       }
       const user = { name: "Frank" };
       const boundSayHello = sayHello.bind(user);
       boundSayHello(); // "Frank"
       ```

#### g. **Event Listeners:**
   - In event listeners, `this` refers to the DOM element that the event was triggered on.
   - Example:
     ```javascript
     document.getElementById("myButton").addEventListener("click", function() {
       console.log(this); // `this` refers to the button element
     });
     ```

#### h. **Class Methods:**
   - In class methods, `this` refers to the instance of the class.
   - Example:
     ```javascript
     class Animal {
       constructor(name) {
         this.name = name;
       }
       speak() {
         console.log(this.name + " makes a noise.");
       }
     }
     const dog = new Animal("Dog");
     dog.speak(); // "Dog makes a noise."
     ```

### 3. **Arrow Functions vs. Regular Functions with `this`:**

- **Arrow Functions:**
  - Do not have their own `this`. Instead, they "capture" the `this` value from the enclosing context.
  
- **Regular Functions:**
  - Have their own `this` that depends on how the function is called (global object, object method, etc.).

### 4. **Summary of `this` in Different Contexts:**

| Context                      | Value of `this`                 |
|-------------------------------|---------------------------------|
| Global Context                | Global object (`window` or `global`) |
| Function in Non-Strict Mode    | Global object (`window` or `global`) |
| Function in Strict Mode        | `undefined`                    |
| Object Method                 | The object the method is called on |
| Arrow Function                | Inherited from the lexical scope |
| Constructor Function          | The newly created object        |
| `call()`, `apply()`, `bind()`  | Set manually                    |
| Event Listener                | The DOM element that triggered the event |

### 5. **Common Mistakes with `this`:**
   - **Losing `this` in Callbacks:**
     ```javascript
     const person = {
       name: "John",
       greet: function() {
         setTimeout(function() {
           console.log(this.name); // `this` refers to `window`, not `person`
         }, 1000);
       }
     };
     person.greet(); // undefined
     ```
     - Fix: Use arrow functions or `bind()`:
       ```javascript
       setTimeout(() => {
         console.log(this.name); // Arrow function inherits `this` from `greet`
       }, 1000);

       const person = {
  name: "John",
  greet: function() {
    const self = this; // Store reference to `this`
    setTimeout(function() {
      console.log(self.name); // `self` refers to `person`
    }, 1000);
  }
};

person.greet(); // Output: "John"

       ```
// the regular function that we are taking about here is the callback inside the settimeout and not the settime out itself
### Conclusion:
- The value of `this` in JavaScript is determined at runtime, based on how the function is invoked.
- It plays a critical role in how functions behave, especially in relation to objects, event handling, and inheritance patterns. Understanding the behavior of `this` is essential for writing effective and bug-free JavaScript code.*/ 

// const person = {
//     name: "John",
//     greet: function() {
//       setTimeout(function() {
//         console.log(this.name); // `this` refers to `window`, not `person`
//       }, 1000);
//     }
//   };
//   person.greet();

const person = {
    name: "John",
    greet: function() {
      setTimeout(function() {
        console.log(this.name); // `this` now refers to the `person` object
      }.bind(this), 6000); // Using bind to explicitly bind `this` to `person`
    }
  };
  
  person.greet(); // Logs "John" after 1 second
  
// const person = {
//     name: "John",
//     greet: function() {
//       setTimeout(function() {
//         console.log(this.name);
//       }.call(this), 5000); // This will immediately invoke the function instead of waiting 1 second
//     }
//   };
  
//   person.greet();
  

// const person = {
//     name: 'john',
//     greet: function () {
//       console.log(this); // (1) Logs 'person' object, because `greet` is a method of `person`
      
//       b = () => {
//         console.log(this); // (2) Logs 'person' object, because arrow functions don't have their own `this`
        
//         c = () => {
//           console.log(this); // (3) Logs 'person' object, for the same reason as above
//         }
//         c(); // (3) Call the arrow function `c`
//       }
//       b(); // (2) Call the arrow function `b`
//     }
//   }
  
//   person.greet();

  // read all the examples above 
  
console.dir(person)
