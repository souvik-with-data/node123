const express=require("express");
const app=express();
app.get("/",(req,res)=>{
    res.send("hellow world");
})
app.get("/calculator/:num1/:num2",(req,res)=>{
    //console.log(req.params);
    const sum=parseFloat(req.params.num1)+parseFloat(req.params.num2);
    res.send(`calculator ${sum}`);

    
})
const port=5002;
app.listen(port,()=>{
    console.log(`server is http://localhost:${port}`);
    
})