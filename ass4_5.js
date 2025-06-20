//to create project using express with routing the including parameters we can define routes that accept dynamic values
//in the url.
const express = require('express');
const app = express();
const port = 3013;

// Route with a dynamic "name" parameter
app.get('/user/:name', (req, res) => {
  const name = req.params.name;
  res.send(`<h1>Hello, ${name}!</h1>`);
});

// Route with two numbers to add
app.get('/add/:num1/:num2', (req, res) => {
  const num1 = parseFloat(req.params.num1);
  const num2 = parseFloat(req.params.num2);
  const sum = num1 + num2;
  res.send(`<h2>${num1} + ${num2} = <strong>${sum}</strong></h2>`);
});

// Route with product and category
app.get('/product/:category/:productName', (req, res) => {
  const { category, productName } = req.params;
  res.send(`<h1>Category: ${category}</h1><h2>Product: ${productName}</h2>`);
});

// Default route
app.get('/', (req, res) => {
  res.send('<h1>Welcome to the Routing with Parameters Example</h1>');
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
