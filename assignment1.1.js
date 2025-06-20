//create a js file and compute some basic of node js syntex such as veriable,function,condition,loops,object,array,asyncronious code.
console.log("hellow world");
let   name="souvik";
var roll=723;
const age=20;
console.log("my name is:",name);
console.log("roll is",roll);
console.log("age is",age);
//function
function add(a,b=5){
    return a+b;
}
let sum=add(10,8);
let sum1=add(8);
console.log("the addition is",sum);
console.log("the default addition is:",sum1);

if (age>=18) {
    console.log("you are eligible for vote");
    
} else {
    console.log("you are not eligible for vote");
    
    
}
//loop
console.log("for loop");
let i=0;
for(i=0;i<5;i++){
    console.log(i);
    
}
console.log("while loop");
let j=0;
while(j<6){
    console.log(j);
    j++
    
}
//objact
let person={
    name:"souvik",
    age:20,
    city:"kolkata",

}
console.log(person);
//array
let fruits=['apple','mango','banana'];
fruits.forEach(function(fruits){
    console.log(fruits);
    
})
//asyncronious
console.log("this massage is first");
setTimeout(()=>{
    console.log("this message is middle");
    
},2000)
console.log("third");
//ternary operator
let a=30;
let result=a>=18?"adult":"child";
console.log(result);











