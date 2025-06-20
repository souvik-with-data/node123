//create a node js project using express that serves different html file and different routes.
const express = require('express');
const path = require('path');

const app = express();
const port = 3040;

// Serve static HTML files for different routes
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname,'assi4.3.1.html'));
});

app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname,'assi4.3.2.html'));
});

app.get('/contact', (req, res) => {
  res.sendFile(path.join(__dirname,'assi4.3.3.html'));
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
