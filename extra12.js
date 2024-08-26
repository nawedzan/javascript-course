let a=10;
function abc(x){
    function inner(){
        return x;
    }
    return inner;
}
abc(9);