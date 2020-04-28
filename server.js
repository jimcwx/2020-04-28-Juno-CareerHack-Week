const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.listen(3000, () => console.log(`Now listening on localhost:3000`));