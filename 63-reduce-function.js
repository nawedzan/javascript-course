// reduce 
// The reduce method in JavaScript is used to process an array and reduce it to a single value based on a provided function. It applies the callback function to each element in the array (from left to right), accumulating a result as it processes the array elements.
const numbers = [1,2,3,4,5, 10];

// aim : sum of all the numbers in array 

// const sum = numbers.reduce((accumulator, currentValue)=>{
//     return accumulator + currentValue;
// }, 100);

// console.log(sum);
// accumulator , currentValue,  return 
// 1               2              3 
// 3               3              6
// 6               4              10
// 10              5              15
// 15              10             25


// const userCart = [
//     {productId: 1, productName: "mobile", price: 12000},
//     {productId: 2, productName: "laptop", price: 22000},
//     {productId: 3, productName: "tv", price: 15000},
// ]

// const totalAmount = userCart.reduce((totalPrice, currentProduct)=>{
//     return totalPrice + currentProduct.price;
// }, 0)

// console.log(totalAmount);

// total price      currentValue     return 
// 0                {}                  12000
// 12000            22000                34000
// 34000            15000                49000



const sum = numbers.reduce((accumulator, currentValue,a,numbers)=>{
    console.log(numbers);
    console.log(a);
    return accumulator *  currentValue;
}, 10000);

console.log(sum)

// reduce funciton deosnot return an array it returns a value