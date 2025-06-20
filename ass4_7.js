//to create a node js project using express with routh level middleware.
const express = require('express');
const app = express();
const port = 3016;

function simpleLogger(req, res, next) {
  console.log(`You visited: ${req.url}`);
  next(); // Go to the route handler
}


app.get('/', (req, res) => {
  res.send('<h1>Welcome to Home Page</h1>');
});

app.get('/hello', simpleLogger, (req, res) => {
  res.send('<h1>Hello Page with Middleware</h1>');
});

app.get('/bye', simpleLogger, (req, res) => {
  res.send('<h1>Goodbye Page with Middleware</h1>');
});


app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
