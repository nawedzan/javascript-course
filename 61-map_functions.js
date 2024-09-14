// map method 
// const numbers = [3,4,6,1,8];

// const square = function(number){
//     return number*number;
// }

// const squareNumber = numbers.map((number, index)=>{
//     return index;
// });
// console.log(squareNumber);

const users = [
    {firstName: "harshit", age: 23},
    {firstName: "mohit", age: 21},
    {firstName: "nitish", age: 22},
    {firstName: "garima", age: 20},
]

const userNames = users.map(function(user){
    return user.firstName+this.firstName;
},users[0]);

console.log(userNames);
// console.log(users);

// in forEach console.log thing happens while in map returning in an index happens
// -----------------------------------------------------------------------



/*The `map` function in JavaScript can take two arguments:

1. **Callback Function**
2. **Optional `thisArg`**

### 1. Callback Function

The callback function itself can take up to three parameters:

- **Current Value (`element` or `item`):** The current element being processed in the array.
- **Index (`index`):** The index of the current element being processed in the array.
- **Array (`array`):** The array `map` was called upon.

### 2. Optional `thisArg`

- **thisArg:** An optional value to use as `this` when executing the callback function.

### Example

Here is an example demonstrating the use of all possible arguments:

```javascript
const numbers = [1, 2, 3, 4, 5];

const result = numbers.map(function(element, index, array) {
    console.log('Element:', element);  // Current value
    console.log('Index:', index);      // Index of the current value
    console.log('Array:', array);      // The original array
    return element * 2;
});

console.log(result);  // Output: [2, 4, 6, 8, 10]
```

### Using `thisArg`

You can also use the optional `thisArg` to provide a context for `this` inside the callback function:

```javascript
const numbers = [1, 2, 3, 4, 5];
const multiplier = {
    value: 2
};

const result = numbers.map(function(element) {
    return element * this.value;
}, multiplier);

console.log(result);  // Output: [2, 4, 6, 8, 10]
```

In this example, the `thisArg` is the `multiplier` object, and `this.value` refers to `multiplier.value` within the callback function.

### Summary

To summarize, the `map` function in JavaScript can take:

1. **Callback Function:** A function that is called for every element in the array.
    - **element:** The current element being processed in the array.
    - **index:** The index of the current element being processed in the array.
    - **array:** The array `map` was called upon.
2. **Optional `thisArg`:** An object to use as `this` inside the callback function.

These inputs allow for flexible and powerful transformations of array elements. */
