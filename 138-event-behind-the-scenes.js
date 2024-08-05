
console.log("script start !!!!!")
const allButtons = document.querySelectorAll(".my-buttons button");

allButtons.forEach((button)=>{
    button.addEventListener("click", (e)=>{
        let num = 0;
        for(let i = 0; i<= 1000000000; i++){
            num += i;
        }
        console.log(e.currentTarget.textContent, num);
    })
})

let outerVar = 0;
for(let i = 0; i<= 100000000; i++){
    outerVar += i;
}
console.log("value of outer variable is ", outerVar);
console.log("script end !!!!!")

// the js is build so in such a way that it looks out for events to happen once assigned to a particular element
// now since js is synchronous in nature it cannot wait for buttons to be clicked 
// so once the buttons are clicked the callback function of the eventlistener  are passed in the CALLBACK QUEUE
// this callback queue is processed by the event loop 
// this event loop sees to the fact that thes clicked buttons are called only when the call stack is empty
// so when the GEC(global execution context is finshed ) the callback functions in callback queue gets initialized