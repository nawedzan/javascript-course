const allButtons = document.getElementsByClassName(".my-buttons ");

console.log(allButtons)
for(let button of allButtons){
    button.addEventListener("click", function(){
        console.dir(this);
    })
}

// for(let i = 0 ; i< allButtons.length; i++){
//     allButtons[i].addEventListener("click", function(){
//         console.log(this);
//     })
// }
// allButtons.forEach(function(button){
//     button.addEventListener("click", function(){
//         console.log(this);
//         });
// })