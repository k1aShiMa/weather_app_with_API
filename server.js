const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Middleware to serve static files from the public directory
app.use(express.static(path.join('C:', 'Repok', 'sulis_javascriptxd', 'weather_app_with_API')));

// Middleware to serve static files from the public directory
app.get('/', (req, res) => {
  res.sendFile(path.join('C:', 'Repok', 'sulis_javascriptxd', 'weather_app_with_API', 'index.html'));
});

//Server running on port 3000
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
