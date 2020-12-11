const http = require("http");
const express = require("express");
const morgan = require("morgan");
// const helmet = require("helmet");
const app = express();
const server = http.createServer(app);
const PORT = 3000;
const es6Renderer = require("express-es6-template-engine");
app.engine("html", es6Renderer);
app.set("views", "templates");
app.set("view engine", "html");
const logger = morgan("tiny");

const db = [
	{
		name: "Mochi",
		age: 1,
		breed: "Pomeranian",
		description: "Fun, lovable dog that enjoys napping on tall surfaces.",
		id: "1",
	},
	{
		name: "Taro",
		age: 2,
		breed: "American Eskimo",
		description:
			"Energetic, charismatic, and enjoys lots of cuddles and rubs.",
		id: "2",
	},
	{
		name: "Appa",
		age: 1,
		breed: "Pomeranian",
		description: "Will eat anything in sight. Please beware.",
		id: "3",
	},
];

app.get("/", (req, res) => {
	res.render("home", {
		locals: {
			home: "This is the home page.",
		},
	});
});

app.get("/items", (req, res) => {
	res.render("items", {
		locals: {
			db,
		},
	});
});

app.get("/items:id", (req, res) => {
	const { id } = req.params;
	const target = ;
	res.render("individual", {
		locals: {
			target,
		},
	});
});

server.listen(PORT, () => {
	console.log("Listening at:", PORT);
});
