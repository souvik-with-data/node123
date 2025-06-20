//write a node js project name calculator on the home page show a welcome and click calculator from the calculator page 
//display a form with 2 input fields a sum button when user press the sum button.
const express = require('express');
const path = require('path');
const app = express();
const port = 3043;

app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname,'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname,'first.html'));
});



app.get('/calculator', (req, res) => {
    res.sendFile(path.join(__dirname,'second.html'));
});

app.post('/calculator', (req, res) => {
    const num1 = parseFloat(req.body.num1);
    const num2 = parseFloat(req.body.num2);

    if (isNaN(num1) || isNaN(num2)) {
        return res.send('Please enter valid numbers.');
    }

    const sum = num1 + num2;

    res.send(`
        <h1>Result</h1>
        <p>The sum of ${num1} and ${num2} is <strong>${sum}</strong></p>
        <a href="/calculator">Back to Calculator</a>
    `);
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
