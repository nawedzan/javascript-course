// fill method 
// value , start , end 

// const myArray = new Array(10).fill(0);
// console.log(myArray);

const myArray = [1,2,3,4,5,6,7,8];
myArray.fill(0,2,5);
console.log(myArray);

// the end pointer is not included it is excluded that is if i write (0,2,5) than 0 will be filled in 2nd 3rd and 4th index only