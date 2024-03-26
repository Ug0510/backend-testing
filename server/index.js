// Import the Express.js module
const express = require('express');
const api = require('./api');
// Create an instance of Express
const app = express();

// Define a route that responds with "Hello, World!" when accessed
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Start the server and listen on port 3000
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
