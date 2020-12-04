// Route parameters

const http = require("http");
const express = require("express");
let people = require("./people.json");
const path = require("path");

const app = express();
const server = http.createServer(app);

const port = 3000;

db = {
  posts: [
    {
      id: "001",
      title: "Good Things",
      content: "Lorium ipsum",
    },
    {
      id: "002",
      title: "Bad Things",
      content: "FooBar",
    },
  ],
  people: [
    {
      id: "p001",
      name: "Clint",
    },
    {
      id: "p002",
      name: "Anna",
    },
  ],
};

const htmlbp = (page, custom) => {
  return `
    <!DOCTYPE html>
    <html> 
        <head> 
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

app.get("/api/post/:id", (req, res) => {
  // "/api/post/:id" is common when dealing with data.
  const { id } = req.params; // Looks for just the id in the data.
  /* same as above, but above is better
        const id = req.params.id
    */
  const foundPost = db.posts.find((post) => post.id == id); // Find looks through the data and returns the first true statement. Standard code.
  res.send(foundPost);
});

app.get("/api/:type/:id", (req, res) => {
  const { type, id } = req.params;
  if (!db.hasOwnProperty(type)) return res.send(null); //Error handling. If it can't find that type, return an error.
  foundItem = db[type].find((item) => (item.id = id));
  res.send({ type, foundItem });
  //same as above
  //res.send({type:type, foundItem:foundItem})
}); // Can be used as /api/people/001

app.get("/api/:type", (req, res) => {
  const { type } = req.params;
  res.send(db[type]);
}); // Can either be people or posts. Lists everything in that category.

// app.get("/api/people", (req, res) => {
//   res.send(people);
// });

// app.get("/api/people/:gender", (req, res) => {
//   const { type } = req.params;
//   res.send(people.gender);
// });

server.listen(port, () => console.log(`Listening on port ${port}`));
