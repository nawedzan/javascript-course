// clone using object.assign

//memory

// clone using Object.assign 

// memory  

const obj = {
    key1: "value1",
    key2: "value2"
}

// const obj2 = {'key69': "value69",...obj};
// const obj2 = Object.assign({'key69': "value69"}, obj);
const obj1=obj;
obj.key3 = "value3";
// console.log(obj2);

console.log(obj1);

let a=9;
const b=a;
a=8;
console.log(b);

// in the above line obj and obj1 are pointing to same memory in the code 
// unlike c++ asigning a object assignment in js makes them point to one object
// but when same thing is done to a variable than they point to different places in memory
// in any case this problem of object is solved by object.assign 
// this method makes a copy of object and puts it in a separate memory.

