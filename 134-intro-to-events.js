// intro to events
// click 
// event add karne ke 3 tarike hai 
// 1.) 
const btn = document.querySelector(".btn-headline");
// method --- addEventListener

console.dir(btn)

function clickMe(){
    console.log("you clicked me !!!!!");
}
btn.addEventListener("contextmenu", ()=> {
    console.log("you clickedmm me !!!!");
    console.log(this)
});


// btn.addEventListener("click", ()=>{
//     console.log("arrow function !!!")
// });