// race condition happens when functions 
/* A race condition in JavaScript occurs when two or more operations attempt to execute simultaneously, but the order in which they complete causes unexpected behavior. This typically happens in asynchronous programming when the timing of events leads to a situation where the outcome depends on the sequence or timing of uncontrollable events.

Here’s a simple example:

javascript
let counter = 0;

function incrementCounter() {
    counter += 1;
}

function printCounter() {
    console.log(counter);
}

setTimeout(incrementCounter, 100);
setTimeout(printCounter, 50);


In this example, there’s a race condition because printCounter might execute before incrementCounter, leading to an unexpected result of 0 instead of 1.

### How to Avoid Race Conditions
To avoid race conditions, you can:

1. *Use Promises:* Ensure that one operation completes before another begins.
   
   javascript
   incrementCounter().then(printCounter);
   

2. *Use async/await:* This can also help in making sure that asynchronous operations run in a predictable order.

   javascript
   async function updateCounter() {
       await incrementCounter();
       printCounter();
   }

   updateCounter();
   

3. *Locking Mechanisms:* Although less common in JavaScript, locking mechanisms can prevent multiple operations from modifying shared resources simultaneously.

By carefully managing the flow of asynchronous operations, you can avoid race conditions in your JavaScript code.*/ 


// understood from this reddit discussion

/*How do I use module functions in my html?

I've done a lot of googling and I'm just not understanding what is the best practice here. I have a web app I'm working on and in my html, I had something like:

    <img src="https://imgur.com/xwCaQWn.png" 
      id="urlButtonPreview"
      onLoad="checkImage()">

Where checkImage() is a function defined in my javascript. This was working, then I wanted to import something into my javascript, it says my functions are undefined. IIUC this is because my javascript is now a module and I need to use module scope.

I've read you can add event listeners, but it seems cumbersome to be adding an event listener for every instance of using a function in my HTML. There has to be some kind of streamlined conventional way to do this. */

// reply

/*I very much think that on* attributes should be removed... They just cause problems, including security issues. The one and only way to add listeners should be addEventListener.

Part of your issue here is that modules don't add to the global scope. When you import checkImage or the module script in general, it's not adding that function to window. Aside from breaking code up, that's the whole point of modules... Importing and exporting what you need without polluting global. 

But you're also introducing race conditions. If an image loads before the script, the load event will never be fired. It'd be better to use:


document.querySelectorAll('.my-imgs').forEach(img => {
  img.decode().then(/* whatever code here );
});


That'll work even on images that have already loaded. */