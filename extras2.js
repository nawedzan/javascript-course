const user1={
    a:1,
    b:2,
    c(){
        console.log(user1.a,user1.b);
    }
}

// console.log(user1);

// user1.c();

// let d=user1.c();
// d();
function e(){
    let g=0;
    function h(){
        console.log("hello")
    }
    return h
}
user1.f=e.bind(user1)
user1.f()
console.log(user1);
// Object.setPrototypeOf(user1,e())