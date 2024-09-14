

if (window.Worker) {
  const myWorker = new Worker("159-o-web-worker-2.js");

  let a=10;
  let b=9;
      myWorker.postMessage([a, b]);
      console.log('Message posted to worker');
   // first loop
for(let it=0;it<5;it++){
    console.log(it);
}
  myWorker.onmessage = function(e) {
    console.log( e.data);
    console.log('Message received from worker');
  }
} else {
  console.log('Your browser doesn\'t support web workers.');
}
//second loop
for(let it=10;it<12;it++){
    console.log(it);
}

// web-sorkers work asyncronously like settimeout once the global execution context is over and out of callstack than the worker thread will run and the result of worker thread will be received and showed in the browser but that is true for only onmessage function 
// within the worker thread the stuff not in on message will be executed first and than the stuff that is onmessage