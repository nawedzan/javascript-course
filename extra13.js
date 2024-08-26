console.log("script start");
const promise = new Promise((resolve,reject)=>{
    resolve("did it");
})

console.log(typeof promise)

const new_promise=promise.then((job)=>{
    console.log(job)
    return "jellp"
})


new_promise.then((result)=>{
    console.log(result);
})

console.log("script end")

// how does this whole promise thing work in the background