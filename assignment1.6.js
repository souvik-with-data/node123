const repl=require('repl');
const server=repl.start({
    prompt:'$',
    input:process.stdin,
    output:process.stdout,
    terminal:true
});
server.on('line',(line)=>{
    console.log(`you entered:${line}`);
});
server.on('exit',()=>{
    console.log('repl session has end');
});
server.context.greet=function(mame){
    return `Hellow,${name}! welcome to node js repl`;

}
server.context.add=function(a,b){
    return a+b;
};