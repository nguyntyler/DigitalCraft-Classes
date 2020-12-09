const http = require("http");
const express = require("express");

const port = 3000;

const app = express();
const server = http.createServer(app);

app.get("/", (req, res) => {
	res.send("hello, world");
});

server.listen(port, () => {
	console.log("Listening on port:", port);
});
