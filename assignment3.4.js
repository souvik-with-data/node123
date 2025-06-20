//write a node js programe to perfrome curd operation on a file using the fs core module.
const http = require('http');
const fs = require('fs');
const url = require('url');
const PORT = 3012;

const filePath = 'data.txt';

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const { pathname, query } = parsedUrl;

  res.setHeader('Content-Type', 'text/plain');

  // CREATE
  if (pathname === '/create' && req.method === 'GET') {
    const content = query.content || 'Default content\n';
    fs.writeFile(filePath, content, (err) => {
      if (err) return res.end('Error creating file.');
      res.end('✅ File created with content.');
    });
  }

  // READ
  else if (pathname === '/read' && req.method === 'GET') {
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) return res.end('Error reading file.');
      res.end(`📖 File Content:\n\n${data}`);
    });
  }

  // UPDATE
  else if (pathname === '/update' && req.method === 'GET') {
    const newContent = query.content || '\nAppended content\n';
    fs.appendFile(filePath, newContent, (err) => {
      if (err) return res.end('Error updating file.');
      res.end('✍️ File updated.');
    });
  }

  // DELETE
  else if (pathname === '/delete' && req.method === 'GET') {
    fs.unlink(filePath, (err) => {
      if (err) return res.end('Error deleting file.');
      res.end('🗑️ File deleted.');
    });
  }

  // Invalid Route
  else {
    res.end('❌ Invalid Route. Use /create, /read, /update, or /delete');
  }
});

server.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
