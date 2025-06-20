
//write a node js programe to describe local modules with function

const readline = require('readline');
const person = require('./assignment2.7');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Ask for user input
rl.question("Enter your name: ", (name) => {
    rl.question("Enter your age: ", (age) => {
        person.setDetails(name, parseInt(age)); 
        console.log(person.getDetails()); 
        rl.close(); 
    });
});
//other file

const person = {
    name: "",
    age: 0,
    setDetails: function (name, age) {
        this.name = name;
        this.age = age;
    },
    getDetails: function () {
        return `Your name is:- ${this.name}, and Age is:- ${this.age}`;
    }
};
module.exports = person;
