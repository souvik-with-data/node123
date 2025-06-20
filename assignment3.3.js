//write a programe in node js to perfrome create a server using the http 
// core model handle routh and process different  http methods get,post,put,delete.

const getRequest = (req, res) => {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ message: 'GET request handled successfully' }));
  };
  
  const postRequest = (req, res) => {
    
      res.writeHead(201, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({
        message: 'POST request handled successfully'
      }));
  };
  
  const putRequest = (req, res) => {
    
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ message: 'PUT request handled successfully'
      }));
    
  };
  
  const deleteRequest = (req, res) => {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ message: 'DELETE request handled successfully' }));
  };
  
  const notAllowed = (req, res) => {
    res.writeHead(405, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ message: 'Method Not Allowed' }));
  };
  
  module.exports = {
    getRequest,
    postRequest,
    putRequest,
    deleteRequest,
    notAllowed
  };
  //other file
  const http = require('http');
const handlers = require('./server');

const server = http.createServer((req, res) => {
  switch (req.method) {
    case 'GET':
      handlers.getRequest(req, res);
      break;
    case 'POST':
      handlers.postRequest(req, res);
      break;
    case 'PUT':
      handlers.putRequest(req, res);
      break;
    case 'DELETE':
      handlers.deleteRequest(req, res);
      break;
    default:
      handlers.notAllowed(req, res);
  }
});

const PORT = 3015;
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

  