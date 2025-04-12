const express = require('express');
const app = express();

// Basic route
app.get('/', (req, res) => {
  res.send('Hello, Express!');
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

