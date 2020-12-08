const http = require("http");
const express = require("express");

const app = express();
const server = http.createServer(app);

const es6renderer = require("express-es6-template-engine");
app.engine("html", es6renderer); // Registering a new view engine.
app.set("views", "templates"); // What directory?
app.set("view engine", "html"); // Default type

const port = 3000;

app.get("/", (req, res) => {
	res.render("home1");
});

app.get("/lift-off", (req, res) => {
	res.render("lift-off");
});

server.listen(port, () => {
	console.log("listening on port:", port);
});
