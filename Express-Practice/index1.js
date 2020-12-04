const http = require("http");
const express = require("express");
const fs = require("fs"); // For favicon.ico

const app = express();
const server = http.createServer(app);

const people = require("./people.json");

const sendFavicon = (req, res) => {
  fs.readFile("./favicon.ico", (err, data) => {
    if (err) return res.send(err);
    res.send(data);
  });
};

app.get("/favicon.ico", sendFavicon);

const _404Content = `
  <!DOCTYPE html>
  <html> 
      <head> 
          <title>An Error you have found</title>
      </head>
      <body>
          <h1>404</h1>
          <blockquote>"An Error you have found" - Yoda
          </blockquote>
      </body>
  </html>
  `;

const navigation = `
  <nav>
      <span><a href="home">Home</a></span>
      <span><a href="contact">Contact</a></span>
      <span><a href="about">About</a></span>
  </nav>
`;

const htmlbp = (page, custom) => {
  return `
    <!DOCTYPE html>
    <html> 
        <head> 
            ${navigation}
            <title>You are at ${page}</title>
        </head>
        <body>
            <h1>This is the ${page} page.</h1>
            <p>${custom}</p>
        </body>
    </html>
    `;
};

app.get(["/", "/home"], (req, res) => {
  res.send(
    htmlbp("home", "Welcome home. This is where I reside. My humble abode.")
  );
});

app.get("/about", (req, res) => {
  res.send(
    htmlbp("about", "I'd rather not share my details with you, thanks.")
  );
});

app.get("/contact", (req, res) => {
  res.send(htmlbp("contact", JSON.stringify(people)));
});

// Default route
app.get("*", (req, res) => {
  // Star is a catch-all. It will make every website in the url, this.
  console.log("A request has been received.");
  res.send(_404Content);
});

const port = 3000;
server.listen(port, () => console.log(`Listening on port ${port}`));
