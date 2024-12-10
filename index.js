const express = require("express");
const app = express();

// Step 1. Install express via the terminal

// Step 2. Modify the all the existing route handlers, make sure to set the status as 200 (ok) for each of them.

// Step 3. Before the first route, create middleware that console logs the request method and request url
// Make sure to call next() inside the callback function

// Step 4. Run your server and test the routes /, /pasta, & /pizza
// What do you see being console logged?

// Step 5. Create middleware that console logs "YUM" only for the routes /pasta & /pizza but not /

// Step 6. Create middleware that catches all undefined routes, and sends back "404 NOT FOUND" in an h1 tag. 
// Set the status as 404 (Not Found)
// Where should this middleware go? 

app.use((req, res, next)=>{
  console.log(req.method + "/" + req.url)
next();
})

app.use((req, res, next)=>{
if (req.url ==="/pasta" || req.url === "/pizza"){
  console.log("Yum")
}
  next();
})


app.get("/", (req, res) => {
  res.status(200).send(`<h1>Welcome to my resturant</h1>`);
});

app.get("/pasta", (req, res) => {
  res.status(200).send(`<h1>Pasta</h1><img src="http://bit.ly/3ZUcEpH" width="500px">`);
});

app.get("/pizza", (req, res) => {
  res.status(200).send(`<h1>Pizza</h1><img src="https://bit.ly/3ZH9OUL" width="500px">`);
});

app.use((request, response, next) => {
	response.status(404).send("<h1>404 (NOT FOUND)</h1>")
})


app.listen(3000, () => {
  console.log(`Server running at http://localhost:3000`);
});
