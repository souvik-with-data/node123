//write a node js programe demonstrate the use of buffer for reading from string dealing with fives handle network data.


const fs = require('fs');

// Read a file using buffer
fs.readFile('sample.txt', (err, data) => {
  if (err) throw err;
  console.log('File content in buffer:', data);
  console.log('File content as string:', data.toString());
});

// Write a buffer to a file
const bufferToWrite = Buffer.from('This content was written using Buffer!');
fs.writeFile('output.txt', bufferToWrite, (err) => {
  if (err) throw err;
  console.log('Buffer written to output.txt');
});
