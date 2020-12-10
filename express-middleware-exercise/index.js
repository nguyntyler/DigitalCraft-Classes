const http = require("http");
const express = require("express");
const morgan = require("morgan");
const app = express();
const server = http.createServer(app);
const port = 3000;
const logger = morgan("tiny");

const renderer = require("express-es6-template-engine");
app.engine("html", renderer);
app.set("views", "templates");
app.set("view engine", "html");

app.use(express.static("public"));

const db = require("./db.js");

app.use(logger);

app.use((req, res, next) => {
	console.log("🌼 You got a request 🌼", req.url, req.method);
	next();
});

app.get("/", (req, res) => {
	res.render("home", {
		partials: {
			header: "/partials/header",
			footer: "/partials/footer",
		},
	});
});

app.get("/pets", (req, res) => {
	res.render("lists", {
		locals: {
			all: db,
		},
		partials: {
			header: "/partials/header",
			footer: "/partials/footer",
		},
	});
});

app.get("/pets/:idx", (req, res) => {
	const idx = req.params.idx;
	res.render("individual", {
		locals: {
			age: db[idx].age,
			pet: db[idx],
			breed: db[idx].breed,
			likes: db[idx].likes,
		},
		partials: {
			header: "/partials/header",
			footer: "/partials/footer",
		},
	});
});

server.listen(port, () => {
	console.log("listening on port", port);
});
