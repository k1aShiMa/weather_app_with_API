const express = require('express');
const path = require('path');
const http = require('http');
const WebSocket = require('ws');

const app = express();
const port = 3000;

// Serve static files (HTML, CSS, JS, etc.)
const publicPath = path.join('C:', 'dev2');
app.use(express.static(publicPath));

// Serve index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(publicPath, 'index.html'));
});

// Create HTTP server
const server = http.createServer(app);

// Setup WebSocket server on same HTTP server
const wss = new WebSocket.Server({ server });

let clients = new Set();

wss.on('connection', (ws) => {
  clients.add(ws);
  broadcastViewerCount();

  ws.on('close', () => {
    clients.delete(ws);
    broadcastViewerCount();
  });

  ws.on('error', () => {
    clients.delete(ws);
    broadcastViewerCount();
  });
});

function broadcastViewerCount() {
  const count = clients.size;
  const message = JSON.stringify({ type: 'viewerCount', count });
  clients.forEach(client => {
    if (client.readyState === WebSocket.OPEN) {
      client.send(message);
    }
  });
}

// Start server
server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
