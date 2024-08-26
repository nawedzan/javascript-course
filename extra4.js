let user1 ={
    a:1,
    b:2,
    c(){
        console.log(this.a,this.b);
    }
}

// user1.c();

setTimeout(function(){
    user1.c()
},1000)