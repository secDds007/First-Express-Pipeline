// server.js
const http = require('http');

const PORT = 3000; // You can set any port number you prefer

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello, this is my Node.js server!\n');
});

server.listen(PORT, () => {
  console.log(`Server Started on port ${PORT}`);
});
