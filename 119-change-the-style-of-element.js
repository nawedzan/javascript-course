// change the styles of elements
// const mainHeading = document.querySelector("div.headline h2");
// console.log(mainHeading.style);
// mainHeading.style.backgroundColor = "blue";
// mainHeading.style.border = "20px solid green";

const mainHeading=document.querySelector("#main-heading");
console.log(mainHeading)
console.log(mainHeading.style)
mainHeading.style.backgroundColor="blue"

/* In your code, the difference in the behavior you're seeing with the console.log(mainHeading) 
statement before and after accessing mainHeading.innerText is related to how JavaScript handles DOM elements and their rendering in the console.

Explanation
First console.log(mainHeading):

When you log mainHeading for the first time, the console displays it as an object representing the DOM element. This is a live object, 
meaning it reflects the current state of the DOM element. The console typically shows something like h2#main-heading, indicating the tag type and the ID.
Accessing mainHeading.innerText:

When you access mainHeading.innerText, the browser may cause a reflow to ensure it has the latest value of the text. 
This can also trigger an update or re-rendering of the DOM in some cases, which is why the state of the mainHeading object may change afterward.
Accessing innerText returns the visible text content of the element, and may cause the browser to update the DOM structure.
Second console.log(mainHeading):

When you log mainHeading again, the console may display the element in a different form, 
showing the actual HTML content. This can happen because the browser console sometimes automatically updates the view of the logged object 
after certain operations, like reading innerText.
Why This Happens
The behavior you're observing is due to how the browser console handles and updates DOM objects. The first log shows the element's reference, 
while after accessing innerText, the console might refresh and show the element's outer HTML, which includes the current state of the element's HTML content.

This isn't a change in the underlying object itself but rather a different representation shown by the console. The actual mainHeading DOM */

// read how the dom tree works and how properties are selected and read