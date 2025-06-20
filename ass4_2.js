//to create a node js project using express.
const express = require('express');
const path = require('path');
const app = express();
const port = 3026;

// Middleware to parse JSON
app.use(express.json());

// HTML response route
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname,'third.html'));

});

// JSON response route
app.get('/api', (req, res) => {
  res.json({
    message: 'Hello, this is a JSON response!',
    status: 'success'
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
