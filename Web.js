const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/random') {
    res.writeHead(200, {
      'Content-Type': 'text/html',
      'background-color': '#000000',
      'color': '#FFFFFF'
    });
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    res.write(`<div style="text-align: center;">`);
    res.write(`<h1>Your random number is: ${randomNumber}</h1>`);
    res.write(`<button onclick="window.location.href='/random'">Generate New Random Number</button>`);
    res.write(`</div>`);
    res.end();
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.write('404 Not Found');
    res.end();
  }
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});
