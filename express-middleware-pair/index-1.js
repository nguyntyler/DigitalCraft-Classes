const coffee = require("./coffee.json");
const products = require("./products.json");
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
	res.render("allproducts", {
		locals: {
			products,
		},
	});
});

app.get("/sale", (req, res) => {
	const isSale = products.filter((t) => t.price < t.originalPrice);
	res.render("saleItem", {
		locals: {
			isSale,
		},
	});
});

server.listen(port, () => {
	console.log("listening on port:", port);
});
