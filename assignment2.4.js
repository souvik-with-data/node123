//write a node js programe to core model path and fs

const fs=require('fs');
const path=require('path');
const filename=path.join(__dirname,"example.txt");
console.log(filename);
fs.readFile(filename,(err,data)=>{
    if(err){
        console.log(err);
        return;
    }
    console.log("readdata is:-",data.toString());
    
})
console.log("end file read");
console.log("start file Syncronious:-");
const data=fs.readFileSync(filename);
console.log(data);
console.log("end file syncronious:-");

const filecontent=("This is node.js examole");
fs.writeFileSync(filename,filecontent);
fs.writeFile(filename,filecontent,(err,data)=>{
    if(err){
        return console.log(err);
        
    }
    console.log('write complete');
    
})
fs.appendFile(filename," my name is souvik",(err,data)=>{
    if(err){
        return console.log(err);
        
    }
    console.log("done",data);
    
})



