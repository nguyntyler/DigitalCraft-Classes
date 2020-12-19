const http = require("http");
const express = require("express");
const morgan = require("morgan");
const db = require("./db");
const app = express();
const server = http.createServer(app);
const PORT = 3000;
const es6Renderer = require("express-es6-template-engine");
app.engine("html", es6Renderer);
app.set("views", "templates");
app.set("view engine", "html");
const logger = morgan("tiny");

// -----------------
const fetch = require("node-fetch");
const url = "https://rickandmortyapi.com/api/character/";

app.get("/data", (req, res) => {
	fetch(url)
		.then((res) => res.json())
		.then((data) => {
			console.log(data);
			res.render("data", {
				locals: {
					db: data.results,
				},
			});
		});
});

app.get("/data/:char", (req, res) => {
	const { char } = req.params;
	fetch(url)
		.then((res) => res.json())
		.then((data) => {
			const db = data.results;
			console.log(db);
			let target = db.find((c) => c.id == char);

			res.render("char", {
				locals: {
					target,
				},
			});
		});
});

// -----------------

app.use(express.urlencoded({ extended: true }));

const thoughtsDB = [];

app.get("/", (req, res) => {
	res.render("home");
});

app.get("/dogs", (req, res) => {
	res.render("list", {
		locals: {
			db,
			thoughtsDB,
		},
	});
});

app.get("/dogs/:idx", (req, res) => {
	const { idx } = req.params;
	res.render("description", {
		locals: {
			dog: db[idx],
		},
	});
});

app.post("/dogs", (req, res) => {
	const { thoughts } = req.body;
	thoughtsDB.push({ thoughts });
	console.log(thoughtsDB);
	res.redirect("/dogs");
});

server.listen(PORT, () => {
	console.log("Listening at:", PORT);
});
