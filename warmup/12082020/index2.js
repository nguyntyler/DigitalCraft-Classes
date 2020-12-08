const http = require("http");
const express = require("express");

const app = express();
const server = http.createServer(app);

const es6renderer = require("express-es6-template-engine");
app.engine("html", es6renderer); // Registering html type
app.set("views", "templates"); // What directory?
app.set("view engine", "html"); // Default type for line 8

const port = 3003;

app.get("/", (req, res) => {
	res.render("home2");
});

server.listen(port, () => {
	console.log("listening on port:", port);
});
