const coffee = require("./coffee.json");
const product = require("./products.json");
const http = require("http");
const express = require("express");
const app = express();
const server = http.createServer(app);
const port = 3000;
const morgan = require("morgan");
const logger = morgan("tiny");
const renderer = require("express-es6-template-engine");
const { ppid } = require("process");
app.engine("html", renderer);
app.set("views", "templates");
app.set("view engine", "html");
app.use(express.static("public"));
app.use(logger);
app.use((req, res, next) => {
	console.log("🌸 You got a request 🌸", req.url, req.method);
	next();
});

app.get("/", (req, res) => {
	const totalOrder = coffee.length;
	const totalSpent = coffee.reduce((acc, order) => {
		return acc + order.cost;
	}, 0);
	res.send(
		`There are ${totalOrder} orders totaling ${totalSpent.toFixed(2)}`
	);
});

app.get("/orders", (req, res) => {
	const uniqueOrder = [...new Set(coffee.map((item) => item.order))];
	const allItemsDB = [];
	for (let item of uniqueOrder) {
		const totalCost = coffee
			.filter((order) => order.order === item)
			.reduce((acc, order) => {
				return acc + order.cost;
			}, 0)
			.toFixed(2);

		const obj = { item, totalCost };
		allItemsDB.push(obj);
	}
	res.render("orders", {
		locals: {
			allItemsDB,
		},
	});
});

app.get("/orders/:kind", (req, res) => {
	let kind = req.params.kind;
	kind = kind.replace("%20", " ");
	const allKind = coffee.filter((item) => item.order === kind);
	res.render("individual", {
		locals: {
			allKind,
		},
	});
});

server.listen(port, () => {
	console.log("listening on port:", port);
});
