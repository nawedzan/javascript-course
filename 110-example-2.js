// function func(){
//     let counter = 0;
//     return function(){
//         if(counter < 1){
//             console.log("Hi You Called me");
//             console.log(counter);
//             counter++;
//         }else{
//             console.log("Mai already ek bar call ho chuka hoon!");
//             console.log(counter);
//             counter++;
//         }
//     }
// }

// const myFunc = func();
// myFunc();
// myFunc();
// myFunc();
// myFunc();
// myFunc();
// myFunc();
// myFunc();

// the clousure variable act like referece passed arguments of c++ and not only variable of lexical environment are passed with the returned function
// which in other languages donot happen as when a block ends the object occupying the memory are knocked out
// but here not only those objects or variables carry forward any changes made to those variables also carry forward as shown above
// -----------------------------------------------------------------------------------------------------------------------------

// here i try my own experiment and try to change fumcntion prototypes 
// first lets see if functions are carried in a lexical env

function first_f(){
    let x=9;
    function second_f(x){
        return x*x;
    }
    return function(){
        // console.log(second_f)
        second_f.prototype.get=1;
        return second_f(9)*0;
        // return x;
    }
}
const ans=first_f();
ans();
console.log(ans.prototype)
ans.prototype.get=1;