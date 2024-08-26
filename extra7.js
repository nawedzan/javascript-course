const user1={
    a:1,
    b:2,
    second(){
        console.log(90);
    },
    use(){
       
        console.log(this.a,this.b);
        return this.second;
    },
}

// console.log("abc")
// let use4=user1.use;
// let use2=()=>user1.use();

// // console.log("abc")
// // console.log(use4());
// use2();
// console.dir(use2)

// function user3(){
    
//     use2()
//     return use2()
// }

// user3()


const user2 = {
    a: 10,
    b: 20,
    use: user1.use,
 };
 let use2;
 console.log(user2.use());
 
 console.log(use2.call(user1));

 new Promise()