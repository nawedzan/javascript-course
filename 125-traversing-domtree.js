const rootNode = document.getRootNode();
console.log(rootNode)
console.log(rootNode.childNodes[0])
const a=rootNode.childNodes[1].childNodes[2].childNodes[0]
console.dir(a)
// console.log(rootNode.childNodes[1].getRootNode())
// const htmlElementNode = rootNode.childNodes[0];
// // console.log(htmlElementNode.childNodes); NodeList(3) [head, text, body]
// const headElementNode = htmlElementNode.childNodes[0];
// const textNode1 = htmlElementNode.childNodes[1];
// const bodyElementNode = htmlElementNode.childNodes[2];
// console.log(headElementNode.childNodes);
// sibling relation 
// const h1 = document.querySelector("h1");
// const body = h1.parentNode.parentNode;
// body.style.color = "#efefef";
// body.style.backgroundColor = "#333"
// const body = document.body
// body.style.color = "#efefef";
// body.style.backgroundColor = "#333"
// const head = document.querySelector("head");
// // console.log(head);
// const title = head.querySelector("title");
// console.log(title.childNodes);
// const container = document.querySelector(".container");
// console.log(container.children);


// if i write rootnode.childNode[0] we get a nodelist
// if i write rootnode .children we get a html collection

/* 4. Key Differences:
Type of Nodes: HTMLCollection only holds element nodes, while NodeList can contain any type of node.
Live vs. Static: HTMLCollection is always live, while NodeList can be either live or static.
Method Support: NodeList (especially the static one from querySelectorAll) supports some array methods like forEach, whereas HTMLCollection does not.*/

// sibling relations
// we can travel from parent to child from child to parent and from sibling to sibling
// for sibling to sibling we can use nextsibling and nextelementsibling

// body can be selected directly
const body= document.body;
body.style.backgroundColor="blue"
