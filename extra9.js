// function addTriple(a){
//     return function(b){
//         return function(c){
//             return a + b + c;
//         }
//     }
// }

// console.log(addTriple.prototype);  //10

function abc(x){
    c=8;
    function def(c){
        return x;
    }
    return def
}

let ghi=abc(9);
console.log(ghi.prototype)
