const express = require('express');
const app = express();
const port = process.env.PORT || 8080;

app.get('/', (req, res) => {
  res.send('Hello, World! This is my first Google App Engine application using Node.js and Express.');
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
