//setup node server w/o express:
const http = require('http');
const { readFile } = require('fs');

http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello World from scratch');
}).listen(3000, 'localhost');