// third loop
for(let it=5000;it<5003;it++){
    console.log(it);
}

onmessage = function(e) {
    console.log('Worker: Message received from main script');
    const result = e.data[0] * e.data[1];
    if (isNaN(result)) {
      postMessage('Please write two numbers');
    } else {
      const workerResult = 'Result: ' + result;
      console.log('Worker: Posting message back to main script');
      postMessage(workerResult);
    }
  }
  // fourth loop
  for(let it=1010;it<1015;it++){
    console.log(it);
}
