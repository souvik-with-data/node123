console.log("\n specific enviromental veriable");
console.log(process.env);
console.log("\n specific enviromental veriable");
console.log("\n HOME",process.env.HOME);
console.log("\N USER",process.env.USER);
console.log("\N PATH",process.env.PATH);
console.log("\n OS",process.env.OS);
console.log("Platform",process.platform);
if(process.Platform==='win32'){
    console.log("windows specific enviroments veriable");
    console.log("USERPROFILE",process.env.USERPROFILE);
    console.log("TEMP",process.env.TEMP);
    console.log("ProgramData",process.ProgramData);
    
}