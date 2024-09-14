/*`"use strict"` is a directive in JavaScript that enforces a stricter parsing and error handling of your JavaScript code. It was introduced in ECMAScript 5 (ES5) and is used to catch common coding mistakes, improve code performance, and prevent the use of certain unsafe features of JavaScript. It can be applied at the top of a script or a function to enforce strict mode.

### Key Features and Benefits of `"use strict"`:

1. **Prevents the Use of Undeclared Variables**:
   - In strict mode, assigning a value to an undeclared variable will throw a `ReferenceError`. Without strict mode, this would create a global variable, which can lead to unpredictable behavior.
   ```javascript
   "use strict";
   x = 10; // Throws an error: x is not defined.
   ```

2. **Eliminates `this` from Global Scope**:
   - In non-strict mode, calling a function without a context (i.e., without `this`) sets `this` to the global object (`window` in browsers). In strict mode, `this` remains `undefined` in such cases.
   ```javascript
   "use strict";
   function example() {
     console.log(this); // In strict mode, this will be `undefined`.
   }
   ```

3. **Prevents Duplicates in Function Parameters**:
   - In strict mode, having duplicate parameter names in a function throws a `SyntaxError`.
   ```javascript
   "use strict";
   function example(a, a) { // SyntaxError: Duplicate parameter name not allowed in this context.
     return a;
   }
   ```

4. **Disallows `delete` of Plain Variables**:
   - You cannot use the `delete` operator to delete variables, functions, or function arguments in strict mode.
   ```javascript
   "use strict";
   var x = 10;
   delete x; // SyntaxError: Cannot delete variable 'x'.
   ```

5. **Prevents Octal Number Syntax**:
   - Octal number literals (e.g., `075` for `decimal 61`) are not allowed in strict mode.
   ```javascript
   "use strict";
   var num = 075; // SyntaxError: Octal literals are not allowed in strict mode.
   ```

6. **Secures `eval` Function**:
   - In strict mode, `eval` doesn’t create variables in the surrounding scope.
   ```javascript
   "use strict";
   eval("var x = 10;");
   console.log(x); // ReferenceError: x is not defined.
   ```

7. **Read-Only Properties Cannot Be Written to**:
   - In strict mode, writing to a read-only property throws an error.
   ```javascript
   "use strict";
   const obj = {};
   Object.defineProperty(obj, "x", { value: 10, writable: false });
   obj.x = 20; // TypeError: Cannot assign to read-only property 'x'.
   ```

### Usage:

1. **At the top of a script**:
   ```javascript
   "use strict";
   // The entire script is in strict mode
   ```

2. **Inside a function**:
   ```javascript
   function example() {
     "use strict";
     // This function runs in strict mode
   }
   ```

### Summary:
Using `"use strict"` helps catch errors and promotes better coding practices, making your JavaScript code more secure and reliable. */