// Add new HTML elements to page 


// innerHTML to add html element

const todoList = document.querySelector(".todo-list");
// console.log(todoList.innerHTML)
// todoList.innerHTML = "<li>New Todo 2 </li>"
// todoList.innerHTML += "<li>New Todo </li>";
// todoList.innerHTML += "<li>teach students </li>";

// when you should use it , when you should not
todoList.insertAdjacentElement("afterbegin", '<li>Hi</li>')

//you cannot use innerhtml to add elements in the dom as in the above three example when we add"teach students" 
//we are not only adding teach students but also adding the above two innerhtml which  is not optimal.