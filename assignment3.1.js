//write a node js programe to create a server using the http core modules.
const server=require("http");
    const httpserver=server.createServer((req,res)=>{
console.log(`server request ${req.url} and method :${req.method}`);
res.writeHead(200,{"Content-type":"text/html"})
res.write(`
    <html>
    <body>
    <h1>hellow</h1>
    </body>
    </html>
    `)
    res.end();

    })
    const port=3012;
    httpserver.listen(port,()=>{
        console.log(`server listing on port ${port} http://localhost:${port}`);
        
    })
