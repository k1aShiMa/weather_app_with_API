const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Middleware to serve static files from the public directory
app.use(express.static(path.join('C:', 'dev2')));

// Middleware to serve static files from the public directory
app.get('/', (req, res) => {
  res.sendFile(path.join('C:', 'dev2', 'index.html'));
});

//Server running on port 3000
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
