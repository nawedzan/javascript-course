//hello world
let p = new Promise((resolve)=>{
    function f(){
        console.log("A");
        return 100;
    }
    resolve(f());
})
p.then((result)=>{
console.log(result);
})