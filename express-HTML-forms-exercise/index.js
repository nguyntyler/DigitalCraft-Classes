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
	},
	{
		name: "Taro",
		age: 2,
		breed: "American Eskimo",
		description:
			"Energetic, charismatic, and enjoys lots of cuddles and rubs.",
	},
	{
		name: "Appa",
		age: 1,
		breed: "Pomeranian",
		description: "Will eat anything in sight. Please beware.",
	},
];

const db2 = [];

app.use(express.urlencoded({ extended: true }));

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

app.get("/create", (req, res) => {
	res.render("create");
});

app.post("/create", (req, res) => {
	const { firstName, lastName, age } = req.body;
	db2.push({ firstName, lastName, age });
	console.log(db2);
	res.redirect("/thank-you");
});

app.get("/thank-you", (req, res) => {
	res.render("thank-you");
});

app.get("/items/:id", (req, res) => {
	const { id } = req.params;
	const target = db[id];
	res.render("individual", {
		locals: {
			target,
		},
	});
});

server.listen(PORT, () => {
	console.log("Listening at:", PORT);
});
