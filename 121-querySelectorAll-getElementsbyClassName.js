// get multiple elements using getElements by class name 
// get multiple elements items using querySelectorAll
const navItemss = document.getElementsByClassName("nav-item"); // HTMLCollection
console.log(navItemss);
console.log(Array.isArray(navItems));
const navItems = document.querySelectorAll(".nav-item"); // NodeList
console.log(navItems[1]);

// when passing by getElementByCLassName we dont use selectors we directly pass the classname
// you will get a htmlcollection which is like an array like object on which you can iterate or access through index but you cannot use
// array like properties

//queryselector all will return something like array like object called a nodelist