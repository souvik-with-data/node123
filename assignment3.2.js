const { log } = require("console");
const http=require("http");
const httpserver=http.createServer((req,res)=>{
    console.log(`server req ${req.url}`);
    switch(req.url){
        case'/':
        res.write(
        `<html>
        <body>
        <h1>home page</h1>
        </body>
        </html>
        `
        )
        break;
        case'/profile':
        res.write(
            `<html>
            <body>
            <h1>profile home</h1>
            </body>
            </html>`
        )
        break;
        default:
            case'/':
            res.write(
                `
                <html>
                <body>
                <h1>404 error</h1>
                </body>
                </html>
                `
            )
            res.end();
    }
    
})
const port=3014;
httpserver.listen(port,()=>{
    console.log(`server listening on port http://localhost:${port}`);
    
})