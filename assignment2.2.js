//write a node js programe to describe syncronious and asyncronious function.
function syncfunction(){
    console.log("synchronous start");
    for(let i=0;i<2;i++){
        console.log(`Sync Count:${i}`);
        
    }
    console.log("synchronous End \n");
    
    
}
function asyncfunction(){
    console.log("Asynchronous Start:");
    setTimeout(()=>{
        for(let i=0;i<2;i++){
            console.log(`Async count:${i}`);
            
        }
        console.log("Asynchronous End \n");
        
    },1000);
    
}
syncfunction();
asyncfunction();
console.log("program end");
