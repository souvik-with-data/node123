//write a js programe that takes input from user two number and print the result.
const readline=require('readline');

const r1=readline.createInterface({
    input:process.stdin,
    output:process.stdout
});
r1.question('enter the first number:',(num1)=>{
    r1.question('enter the second number::',(num2)=>{
        const sum=parseFloat(num1)+parseFloat(num2);
        console.log(sum);
        r1.close();
        
        
    })
})
