//write a js programe using http module 
//i.display html form to take user i/p.
//ii.form submission capture user input from the post request.
//iii.write the capture input to a file one server.
const http = require('http');
const fs = require('fs');
const querystring = require('querystring');

const server = http.createServer((req, res) => {
    if (req.method === 'GET') {
        // Display HTML form to take user input
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(`
            <html>
                <body>
                    <form action="/submit" method="POST">
                        <label for="fname">Enter  first Name:</label>
                        <input type="text" id="fname" name="fname" required><br><br>
                        <label for="lname">Enter  last Name:</label>
                        <input type="text" id="lname" name="lname" required><br><br>
                        <button type="submit">Submit</button>
                    </form>
                </body>
            </html>
        `);
    } else if (req.method === 'POST' && req.url === '/submit') {
        // Capture user input from the POST request
        let body = '';
        req.on('data', chunk => {
            body += chunk.toString();
        });
        req.on('end', () => {
            const parsedData = querystring.parse(body);
            const firstName = parsedData.fname;
            const lastName = parsedData.lname;
            
            const userInput = `First Name: ${firstName}, Last Name: ${lastName}`;
            
            // Write captured input to a file on the server
            fs.appendFile('user.txt', userInput + '\n', (err) => {
                if (err) {
                    res.writeHead(500, { 'Content-Type': 'text/plain' });
                    res.end('Server Error');
                } else {
                    res.writeHead(200, { 'Content-Type': 'text/plain' });
                    res.end('Data received and saved.');
                }
            });
        });
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Not Found');
    }
});
const port=3028;
server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
