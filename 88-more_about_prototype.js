// let numbers = [1,2,3];

// // console.log(Object.getPrototypeOf(numbers));
// console.log(Array.prototype);
// console.log(numbers);

// function hello(){
//     console.log("hello");
// }
// array are internally created in js by array function

let numbers= new Array(1,2,3);
console.log(numbers)
console.log(Object.getPrototypeOf(numbers))
// console.log(Object.getOwnPropertyNames(Array.prototype));
/*[
  'length',        'constructor',    'at',
  'concat',        'copyWithin',     'fill',
  'find',          'findIndex',      'findLast',
  'findLastIndex', 'lastIndexOf',    'pop',
  'push',          'reverse',        'shift',
  'unshift',       'slice',          'sort',
  'splice',        'includes',       'indexOf',
  'join',          'keys',           'entries',
  'values',        'forEach',        'filter',
  'flat',          'flatMap',        'map',
  'every',         'some',           'reduce',
  'reduceRight',   'toLocaleString', 'toString',
  'toReversed',    'toSorted',       'toSpliced',
  'with'
]*/
// so here the array function is like a construntor function 
// as it is a function it has its own prototype where all the inbuilt array functions are stored
// now when new keyword is used 
//1.object is created from array function which is why arrays are objects
// 2. the prototype of array is referenced with array-objects __proto__.
// let a=Object.getPrototypeOf(numbers)
// console.log(a);

// console.log(Array.prototype)
// console.log(Array.isArray(Array.prototype))
// the inbuilt methods of array function are stored in an array that is the prototype of that  Array function is an array 
// but we knew the prototype of a function is usually a object
// so here is the deal
// the type of prototype can be changed
function a(){
    console.log("hello");
}
a.prototype=[];
a.prototype[0]=1;
console.log(a.prototype[0]);
// above we changed the prototype of a function from object to array than assigned values to it.
