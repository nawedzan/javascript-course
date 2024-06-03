//this keyword
// whenever we write a function in js it is attached to a object 
// that means even we just write a function like below 
//just_a_func is a part of window object

function just_a_func(){
    console.log("yo")
}
this.just_a_func()
window.just_a_func();
// both window and this refer to the same object window