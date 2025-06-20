//write a node js programe to determine local modules with function.

function add(a,b){
    return a+b;
}
function div(a,b){
    return a/b;
}
function mul(a,b){
    return a*b;
}
module.exports={
    add:add,
    div:div,
    mul:mul
}
//other file
const local=require('./assignment2.6');
console.log(local);
console.log(local.add(7,9));
console.log(local.div(50,7));
console.log(local.mul(78,45));


