const band = {
    bandName: "led zeppln",
    famousSong: "stairway to heaven",
    year: 1968,
    anotherFamousSong: "kashmir",
  };
  
  let { bandName, famousSong, ...restProps } = band;
  console.log(bandName);
  console.log(restProps);
  /*Object destructuring is a feature in JavaScript that allows you to extract properties from objects and assign them to variables. 
  Let's break down what's happening in your code and explain the key concepts of object destructuring:

### Original Code:
```javascript
const band = {
  bandName: "led zepplin",
  famousSong: "stairway to heaven",
  year: 1968,
  anotherFamousSong: "kashmir",
};

let { bandNam, famousSong, ...restProps } = band;
console.log(bandNam); // undefined
console.log(restProps); // { bandName: 'led zepplin', year: 1968, anotherFamousSong: 'kashmir' }
```

### Explanation:

1. **Destructuring with `bandNam`**:
   - `let { bandNam, famousSong, ...restProps } = band;`
   - Here, you are trying to destructure the `bandName` property, but you wrote `bandNam` instead. 
   Since there is no `bandNam` property in the `band` object, `bandNam` will be `undefined`.
   - `famousSong` will correctly destructure the `famousSong` property.
   - `...restProps` will contain the remaining properties of the `band` object, which includes `bandName`, `year`, and `anotherFamousSong`.

2. **Correctly Destructuring with Proper Variable Names**:
   ```javascript
   let { bandName, famousSong, ...restProps } = band;
   console.log(bandName); // "led zepplin"
   console.log(restProps); // { year: 1968, anotherFamousSong: 'kashmir' }
   ```
   - If you correct the property name to `bandName`, it will correctly destructure the `bandName` property.
   - `...restProps` will then only contain the remaining properties `year` and `anotherFamousSong`.

3. **Changing `restProps` to `restprop`**:
   ```javascript
   let { bandName, famousSong, ...restprop } = band;
   console.log(bandName); // "led zepplin"
   console.log(restprop); // { year: 1968, anotherFamousSong: 'kashmir' }
   ```
   - If you change `restProps` to `restprop`, it will still work the same way. The name of the variable holding the rest of the properties
    does not affect the destructuring behavior. It's just the name used to reference the object containing the remaining properties.

### Summary of Object Destructuring:

1. **Basic Destructuring**:
   - Extract properties from objects and assign them to variables.
   ```javascript
   const person = { name: 'Alice', age: 25 };
   const { name, age } = person;
   console.log(name); // Alice
   console.log(age); // 25
   ```

2. **Renaming Variables**:
   - You can rename variables while destructuring.
   ```javascript
   const { name: personName, age: personAge } = person;
   console.log(personName); // Alice
   console.log(personAge); // 25
   ```

3. **Default Values**:
   - You can assign default values if the property does not exist.
   ```javascript
   const { name, gender = 'female' } = person;
   console.log(gender); // female
   ```

4. **Rest Operator**:
   - The rest operator (`...`) allows you to collect the remaining properties into a new object.
   ```javascript
   const { name, ...rest } = person;
   console.log(rest); // { age: 25 }
   ```

### Conclusion:
Object destructuring is a powerful and concise way to extract values from objects in JavaScript. 
However, it's important to ensure that the variable names you use match the property names in the object.
 Otherwise, you might end up with `undefined` values, as seen in your original code with `bandNam` instead of `bandName`. 
 The rest operator (`...restProps`) allows you to capture all remaining properties in a new object, 
 which can be very useful for handling a subset of an object's properties. */
 
 // the rest element should always be last otherwise it will throw an error