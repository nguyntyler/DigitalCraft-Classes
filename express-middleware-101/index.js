const http = require("http");
const express = require("express");
const morgan = require("morgan");

const port = 3000;

const app = express();
const server = http.createServer(app);
const logger = morgan("tiny");

// app.use a piece of middleware
// app.use(logger); //Loggs the status code.

app.use((req, res, next) => {
	console.log("🌼 You got a request 🌼", req.url, req.method);
	next();
});

app.use("/something", (req, res, next) => {
	console.log("This is from the something else middleware");

	next();
});

app.use("/something", (req, res, next) => {
	// A piece of middleware that can modify the req or res. This does a 'fuzzy' match. (regular expressions or regex) Any link that starts with /something will have req.stuff = "👄"
	req.stuff = "👄";
	/* 
    Most times you'll use with will req.session
    Each visitor (browser) on your site will have their own session.

    req.session.user = {
        id: 12345,
        username: 'tnguyen',
        needsPasswordReset: true
    }
    */
	next();
});

/*
This allows the index.js file to be able to read files from the public directory. It is used in the HTML format in the css link
*/
app.use(express.static("public"));

// Everything in express is middleware.

app.get("/", (req, res) => {
	console.log("Here is your stuff: ", req.stuff);
	res.send("Hello world");
});

app.get("/something", (req, res) => {
	console.log("Here is your stuff: ", req.stuff);
	res.send(`
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Doc</title>
    <link rel="stylesheet" href="/stylesheet/styles.css">
    
</head>
<body>
    <h1>This works</h1>
    <p>Lorem</p>
    <p><a href="/projects">Click here</a> to go back to project list.</p>
</body>
</html>
    `);
});

server.listen(port, () => {
	console.log("Listening on port:", port);
});
