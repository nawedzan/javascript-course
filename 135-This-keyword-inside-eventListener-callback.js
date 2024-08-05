// this keyword
const btn = document.querySelector(".btn-headline");

btn.addEventListener("click",function(){
    console.log("you clicked me !!!!");
    console.log("value of this")
    console.log(this);
});

// <button class="btn btn-headline">Learn More</button> 
// when this is called 
// The value of this is evaluated during the run-time, depending on the context.
// value of this in case of arrow function is window object

// not related
// js is a run time lang not build time 
// 