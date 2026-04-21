const http = require('http');

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end(`
    <html>
      <body style="font-family: Arial; text-align: center; margin-top: 100px;">
        <h1>Node.js App Deployed via Jenkins CI/CD</h1>
        <p>Server running on port ${PORT}</p>
        <p>Timestamp: ${new Date().toISOString()}</p>
      </body>
    </html>
  `);
});

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});