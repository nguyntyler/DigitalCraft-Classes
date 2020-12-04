const http = require("http");
const express = require("express");
let people = require("./people.json");
const path = require("path");
const fs = require("fs");
const bl = require("bl");

const app = express();
const server = http.createServer(app);

const port = 3001;

app.get("/api/people", (req, res) => {
  res.send(people);
});

app.get("/api/people/gender/:gender", (req, res) => {
  const { gender } = req.params;
  foundItem = people.filter((person) => person.gender == gender);
  res.send(foundItem);
});

app.get("/api/people/email/:email", (req, res) => {
  const { email } = req.params;
  foundItem = people.find((person) => person.email == email);
  res.send(foundItem);
});

app.get("/script", (req, res) => {
  fs.readFile("script.js", function (err, data) {
    if (err) return console.error(err);
    console.log(data.toString("utf8"));
  });
});

server.listen(port, () => console.log(`Listening on port ${port}`));
