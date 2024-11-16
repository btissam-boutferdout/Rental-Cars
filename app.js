const express = require("express");
const path = require("path"); // To handle file paths
const app = express();
const port = 3000;
//
app.use(express.static(path.join(__dirname)));
//
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html")); // Serve the HTML file
});
//

app.get("/contact", (req, res) => {
  res.sendFile(path.join(__dirname, "contact.html")); // Serve the HTML file
});
//

app.get("/service", (req, res) => {
  res.sendFile(path.join(__dirname, "service.html")); // Serve the HTML file
});
//

app.get("/about", (req, res) => {
  res.sendFile(path.join(__dirname, "about.html")); // Serve the HTML file
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
// not work
