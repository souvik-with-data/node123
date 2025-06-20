//write a node js programe to calculate the time taken by multiple  function to exicute.
function digitsum(){
    let sum=0;
    for(let i=0;i<1000;i++){
        sum=sum+i;
    }
    return sum;
    
}
functionmess(digitsum,"function one code");
function factorial(){
    let fact=1;
    for(let i=1;i<=10000;i++){
        fact=fact*i;
    }
    return fact;
}
functionmess(factorial,"function second code");

function functionmess(func,label){
    console.time(label);
    func();
    console.timeEnd(label);
}