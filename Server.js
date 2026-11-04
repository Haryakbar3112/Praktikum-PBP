const http = require('http');

const host = 'localhost';
const port = 3000;

const server = http.createServer((req, res) => {
  const url = new URL(req.url, `http://${host}:${port}`);

  res.writeHead(200, {
    'Content-Type': 'application/json; charset=utf-8',
    'Access-Control-Allow-Origin': '*',
  });

  const response = {
    message: 'Server localhost aktif',
    method: req.method,
    path: url.pathname,
    query: Object.fromEntries(url.searchParams.entries()),
    timestamp: new Date().toISOString(),
  };

  res.end(JSON.stringify(response, null, 2));
});

server.listen(port, host, () => {
  console.log(`Server berjalan di http://${host}:${port}`);
});
