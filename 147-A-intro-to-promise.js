// Promise
console.log("script start");
const bucket = ['coffee', 'chips','vegetables','salt','rice'];

function a(){
    console.log(a);
}
console.log()

// promise is an object
// it has two key value pairs status and value
// for status the key can either be fullfilled or rejected
const friedRicePromise = new Promise((resolve,reject)=>{
    if(bucket.includes("vegetables")&& bucket.includes("salt") && bucket.includes("rice")){
        console.log(this)
        resolve("did it");
    }else{
        reject("could not do it");
    }
})

// produce 
// upto this we learnt how to create a promise


// consume 
// how to consume 
// here we will learn how to consume it or use it in js a promise is consumed more and that produced
// the value passed in  reslve is received in reject

friedRicePromise.then(
    (myfriedrice)=>{
        console.log(myfriedrice)
    }
    ,
    (error)=>{
        console.log(error)
    }
)
// because this setup doesnot look very clean it is recommened to use then keyword

setTimeout(()=>{
    console.log("hello from settimeout1")
},0)

friedRicePromise.then(
    (myfriedrice)=>{
        console.log(myfriedrice)
    }
).catch(
    (rejected) =>{
        console.log("not possible" ,rejected)
    }
)

// here one promise was produced but it was consumed twice so it is possible 


setTimeout(()=>{
    console.log("hello from settimeout")
},0)

for(let i = 0; i <=100; i++){
    console.log(Math.random(), i);
}
console.log(friedRicePromise) //this line proves that before promise goes into microtask queue it has been completed as this line returns a object with either fullfilled or rejected key
console.log("script end!!!!")

// this whole promise consuming thing not producing but comsuminig only is async in nature
// as promise is not a feature of the js but a feature of the browser
// and it is consumed not by the js but by the browser api
// the then method is consumed by the browser api

// promise is an object

// MICROTASK QUEUE HAS MORE PRIORITY THAN CALLBACK QUEUE AS WE CAN CLEARLY SEE BOTH SETTIMEOUT IS RECEIVED AT THE END

// a promise can be stored in a variable and used as a stand alone thing

