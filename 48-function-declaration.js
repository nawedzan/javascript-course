// Unlike other programming languages, functions are special type of Objects in JavaScript. They have their own methods (viz. bind, call, apply and a hell lot more) like other objects do. Therefore, when you assign a prop a to your func, you are not creating a new func object. Instead, it's the same func object (function object) and you are just creating a new prop func.a on it. Read this for more info. Also, you can do something like the following to print all the props you have assigned to a function object (or any object in JS):

// for (var prop in func) {

