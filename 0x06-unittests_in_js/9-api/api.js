const express = require('express');

const app = express();
const PORT = 7865;

// Index route
app.get('/', (req, res) => {
  res.status(200).send('Welcome to the payment system');
});

// Cart route with ID validation
app.get('/cart/:id(\\d+)', (req, res) => {
  const { id } = req.params;
  res.status(200).send(`Payment methods for cart ${id}`);
});

// Catch invalid cart ID
app.get('/cart/:id', (req, res) => {
  res.status(404).send('Not Found');
});

// Start the server
app.listen(PORT, () => {
  console.log(`API available on localhost port ${PORT}`);
});

module.exports = app;
