// middleware

const http = require("http");
const express = require("express");
const path = require("path");
const fs = require("fs");

const app = express();
const server = http.createServer(app);

const port = 3000;

// Should be ran before any other app. stuff
const morgan = require("morgan");
const logger = morgan("tiny");
app.use(logger);

db = { people: ["hey", "hi"], places: [], things: [] };

const timeLogger = (req, res) => {
  let requestTime = new Date();
  console.log("A request came in at " + requestTime);

  req.reqestTime = requestTime;
  res.send();
};

// Using express to run static files.
app.use(express.static("public"));

//Create middleware for the "/" route that will console.log the current time.
app.get("/", timeLogger);

const checkId = (req, res, next) => {
  const { type } = req.params;
  if (!db.hasOwnProperty(type)) {
    res.send("That doesnt exist");
  }
  next();
};

app.get("/:type", checkId, (req, res) => {
  const { type } = req.params;
  res.send(`${db[type]}`);
});

server.listen(port, () => console.log(`Listening on port ${port}`));
