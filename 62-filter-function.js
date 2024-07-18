// filter method 

const numbers = [1,3,2,6,4,8];



// const evenNumbers = numbers.filter((number)=>{
    
//     return number % 2 === 0;
// });
// console.log(evenNumbers);

// const evenNumbers = numbers.filter((number)=>{
    
//     return number ;
// });
// console.log(evenNumbers);

// filter method works like map as in returns in an array but only selective number


const users = [
    {firstName: "harshit", age: 23},
    {firstName: "mohit", age: 21},
    {firstName: "nitish", age: 22},
    {firstName: "garima", age: 20},
]

const evenNumbers = users.filter((number)=>{
    
    return number.age ;
});
console.log(evenNumbers);

/*Yes, there is a fundamental difference between the `map` and `filter` methods in JavaScript, and they serve different purposes. Let's compare their functionalities and use cases:

### `map` Method

- **Purpose:** The `map` method is used to transform each element in an array and create a new array with the transformed elements.
- **Return Value:** It returns a new array of the same length as the original array, with each element being the result of the callback function.
- **Use Case:** Use `map` when you want to perform an operation on each element of an array to produce a new array of the same length with transformed data.

### Example of `map`:

```javascript
const numbers = [1, 2, 3, 4, 5];

// Using map to double each number
const doubled = numbers.map(number => number * 2);

console.log(doubled);  // Output: [2, 4, 6, 8, 10]
```

### `filter` Method

- **Purpose:** The `filter` method is used to create a new array containing only the elements that pass a specified test (i.e., the callback function returns `true`).
- **Return Value:** It returns a new array with a subset of the original elements, potentially of different length.
- **Use Case:** Use `filter` when you want to include only certain elements in a new array based on a condition.

### Example of `filter`:

```javascript
const numbers = [1, 2, 3, 4, 5];

// Using filter to get only even numbers
const evenNumbers = numbers.filter(number => number % 2 === 0);

console.log(evenNumbers);  // Output: [2, 4]
```

### Differences and Interchangeability

While there are some scenarios where `map` and `filter` might seem interchangeable, their core purposes are different:

1. **Transformation vs. Selection:**
   - `map` transforms each element in the array.
   - `filter` selects a subset of elements based on a condition.

2. **Return Value Length:**
   - `map` always returns an array of the same length as the original.
   - `filter` returns an array that may be shorter than the original, containing only the elements that pass the test.

### Can `filter` Be Achieved with `map`?

Technically, you can achieve the effect of `filter` using `map` combined with `filter`, but it’s less efficient and not idiomatic. For example:

```javascript
const numbers = [1, 2, 3, 4, 5];

// Using map to tag elements with a boolean indicating if they are even
const mapped = numbers.map(number => ({
    value: number,
    isEven: number % 2 === 0
}));

// Using filter to select only the even numbers
const evenNumbers = mapped.filter(item => item.isEven).map(item => item.value);

console.log(evenNumbers);  // Output: [2, 4]
```

While this achieves the same result as `filter`, it’s more complex and less readable.

### Conclusion

While both `map` and `filter` are array methods that iterate over the elements, they are designed for different tasks. `map` is for transforming every element in the array, and `filter` is for selecting elements that meet a condition. Use each method for its intended purpose to write clear and efficient code.
*/

// IMPORTANT 
// filter function only returns value that are true 
// filter function only supposed to return boolean value
// although this can be achieved using a map
// but we cannot use a filter function to the job of a map
// as the filter funtion is returning a boolean true value in the array 
// so if we use filter to the job of a map and in the return statement there  0 returned which needs to be in the array but wont happen cuz its boolean false
// so major error