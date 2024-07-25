// Maps
// map is an iterable

// store data in ordered fashion

// store key value pair (like object)
// duplicate keys are not allowed like objects


// different between maps and objects

// objects can only have string or symbol
// as key 

// in maps you can use anything as key
// like array, number, string 

// object literal 
// key -> string 
// key -> symbol
const person1 = {
    firstName : "harshit",
    age: 7,
    1:"one"
}
// console.log(person.firstName);
// console.log(person["firstName"]);
// console.log(person[1]);
for(let key in person1){
    console.log(typeof key);
}

// key value pair 
const person = new Map();
person.set('firstName', 'Harshit');
person.set('age', 7);
person.set(1,'one');
person.set([1,2,3],'onetwothree');
person.set({1: 'one'},'onetwothree');
console.log(person);
console.log(person.get(1));
for(let key of person.keys()){
    console.log(key, typeof key);
}
console.log(person);
for(let index in person){
    // console.log(Array.isArray(key));
    console.log(index)
}
// the key  value is written in array coz we are destructureing it

// const person1 = {
//     id: 1,
//     firstName: "harshit"
// }
// const person2 = {
//     id: 2,
//     firstName: "harshta"
// }

// const extraInfo = new Map();
// extraInfo.set(person1, {age: 8, gender: "male"});
// extraInfo.set(person2, {age: 9, gender: "female"});
// // console.log(userInfo);
// console.log(person1.id);
// console.log(extraInfo.get(person1).gender);
// console.log(extraInfo.get(person2).gender);

var arr = [3, 5, 7];
arr.foo = "hello";
    
for (var i in arr) {
  console.log(i); // logs "0", "1", "2", "foo"
}
    
for (var i of arr) {
  console.log(i); // logs "3", "5", "7"
  // it doesn't log "3", "5", "7", "hello"
}
arr.bar="nolan";