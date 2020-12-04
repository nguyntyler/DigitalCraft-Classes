const http = require("http");
const express = require("express");

const app = express(); // Makes an instance of express. Assigns to variable for ease of use. Top of the tree diagram.
const server = http.createServer(app); // Creates a server that uses the app or the express instance.

// Tells the app to listen for GET requests.
// '/' means homepage.
// Anonymous function will handle HTTP request.
// Then sends back the HTTP response.
app.get("/", (req, res) => {
	res.send("Your website is up!");
});

app.get("/cats", (req, res) => {
	res.send(`
    <ul>
        <li><a href="/cats/Oakley">Oakley</a></li>
        <li><a href="/cats/Mochi">Mochi</a></li>
        <li><a href="/cats/Taro">Taro</a></li>
    `);
});

app.get("/cats/:catName", (req, res) => {
	const catName = req.params.catName;
	res.send(`
    <li><a href="/cats">Back</a></li>
    Welcome to ${catName}'s house!`);
});

server.listen(3000, "localhost", () => {
	console.log("Running on port: 3000!");
});
