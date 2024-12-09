const express = require("express");
const app = express();

// Step 1. Install express via the terminal

// Step 2. Before the first route, create middleware that console logs the request method and request url
// Make sure to call next() inside the callback function

// Step 3. Run your server and test the routes /, /pasta, & /pizza
// What do you see being console logged?

// Step 4. Create middleware that console logs "YUM" only for the routes /pasta & /pizza

// Step 5. Create middleware that catches all undefined routes, and sends back "404 NOT FOUND" in an h1 tag
// Does the placement of this middleware mattter?

app.get("/", (req, res) => {
  res.send(`<h1>Welcome to my resturant</h1>`);
});

app.get("/pasta", (req, res) => {
  res.send(`<h1>Pasta</h1><img src="http://bit.ly/3ZUcEpH" width="500px">`);
});

app.get("/pizza", (req, res) => {
  res.send(`<h1>Pizza</h1><img src="https://bit.ly/3ZH9OUL" width="500px">`);
});

app.listen(3000, () => {
  console.log(`Server running at http://localhost:3000`);
});
