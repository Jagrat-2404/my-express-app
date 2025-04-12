const express = require('express');
const app = express();

// Basic route
app.get('/', (req, res) => {
  res.send('Hello, Express!');
});

app.get('/home', (req, res) => {
  res.send('Home, Express!');
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

