// document.createElement()
// append
// prepend
// remove
const newTodoItem = document.createElement("li");
// const newTodoItemText = document.createTextNode("Teach students");
newTodoItem.textContent = "Teach hhhstudents";
const todoList = document.querySelector(".todo-list");
newTodoItem.classList.add("text")
const a=document.createElement("div");
a.classList.add("todo-buttons")
todoList.prepend(newTodoItem);
console.log(newTodoItem);
// const todo1 = document.querySelector('.todo-list li');
// todo1.remove();
// console.log(todo1)

// before 
// after

// const newTodoItem = document.createElement("li");
// newTodoItem.textContent = "Teach students";
// const todoList = document.querySelector(".todo-list");
// todoList.after(newTodoItem);

// 5 properties append prepend remove before after