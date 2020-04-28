const express = require('express');

const app = express();

// registering the static "middleware"

const staticMiddleware = express.static('public');
app.use(staticMiddleware);

// GET / will return "Hello World" in my browser
// I can visit it by going to localhost:3000

// i changed my route because I want my "index.html" to be from the server
let numberOfClicks = 0;

app.get('/api/json', (req, res) => {
  const json = {};
  json.message = "Hello World";
  json.otherMessage = "Foo Baz Bar blah"
  json.numberOfClicks = numberOfClicks;
  res.json(json);
});

app.post('/api/json', (req, res) => {
  numberOfClicks++;
  res.redirect('/');
})

// start the server and take port 3000
app.listen(
  // I am now actually running the server on port 3000;
  
  3000, 
  // callback that runs when the server successfully starts
  () => console.log(`Now listening on localhost:3000`)
);