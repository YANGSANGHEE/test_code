const http = require('http');
const fs = require('fs');
const Server = process.env.Port || 8282;

http.createServer((req, res) => {
  res.end('hello world');
}).listen(Server, (err) => {
  console.log('서버돌리는중');
})