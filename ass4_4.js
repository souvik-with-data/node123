const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const port = 3012;

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));

// Serve HTML pages
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname,'views1.html'));
});

app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname,'views2.html'));
});

app.get('/add', (req, res) => {
  res.sendFile(path.join(__dirname,'views3.html'));
});

// Handle form POST
app.post('/add', (req, res) => {
  const num1 = parseFloat(req.body.num1);
  const num2 = parseFloat(req.body.num2);
  const sum = num1 + num2;

  // Return result as HTML
  res.send(`
    <h1>Result</h1>
    <p>${num1} + ${num2} = <strong>${sum}</strong></p>
    <a href="/add">Try Again</a> | <a href="/">Home</a>
  `);
});

// Start server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
