// get and set attrubutes
const link = document.querySelector("a");
console.log(link.getAttribute("href").slice(1));
link.setAttribute("hrefm", "https://codprog.com");
// link.setAttribute("href", "https://codprog.com");
console.log(link.getAttribute("hrefm"));

const inputElement = document.querySelector(".form-todo input");
console.log(inputElement.getAttribute("type"));

// we can add custom attributes and set their values to anything
const abc=document.querySelector(".btn.btn-headline");
console.log(abc)
abc.setAttribute("abc","edg");
console.log(abc.getAttribute("abc"));