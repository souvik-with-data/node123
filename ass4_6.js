//to create a node js project using express with application level middleware.
const express = require('express');
const app = express();
const port = 3015;
app.use((req, res, next) => {
  const now = new Date().toISOString();
  console.log(`[${now}] ${req.method} ${req.url}`);
  next(); // move to the next middleware or route handler
});

// Example middleware for specific path only
app.use('/admin', (req, res, next) => {
  console.log('Accessing admin route...');
  next();
});
app.get('/', (req, res) => {
  res.send('<h1>Welcome to the Home Page</h1>');
});

app.get('/about', (req, res) => {
  res.send('<h1>About Us</h1>');
});

app.get('/admin', (req, res) => {
  res.send('<h1>Admin Dashboard</h1>');
});
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
