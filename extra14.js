const promise = new Promise((resolve, reject) => {
    resolve("Success!");
});

const newPromise = promise.then((result) => {
    console.log(result); // Logs: "Success!"
    return "Next success!";
});

console.log(newPromise); // Logs: Promise { <pending> }

newPromise.then((result) => {
    console.log(result); // Logs: "Next success!"
});
