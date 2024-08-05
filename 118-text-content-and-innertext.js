// change text 
// textContent and innerText
const mainHeading = document.getElementById("main-heading");
console.log(mainHeading.innerText);
// mainHeading.textContent = "This is something else";
console.log(mainHeading.textContent);

// both innertext and textcontent gives all the text content in the element
// whether it is within 
// but innertext ignores text that has display none 
// while textcontent doesnot