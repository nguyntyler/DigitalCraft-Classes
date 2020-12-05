const http = require("http");
const express = require("express");
const { read } = require("fs");

const app = express();

const server = http.createServer(app);
const port = 3000;

app.use(express.static("public"));

app.get("/", (req, res) => {
	res.send(`
    <h1>You are Home</h1>
    Look at some <a href="/dogs">dogs</a> with that link. 
    `);
});

app.get("/dogs", (req, res) => {
	res.send(`
    <h2>So you want to see some dogs, huh?</h2>
    <h3>Please, take your pick.</h3>
    <ul>
        <p>Choose one</p>
        <li><a href="/dogs/Mochi">Mochi</a></li>
        <li><a href="/dogs/Taro">Taro</a></li>
    </ul>
    <h3>To go back:</h3>
    <a href="/">Home</a></li>

    `);
});

app.get("/dogs/:dogs", (req, res) => {
	const dogs = req.params.dogs;
	if (dogs === "Mochi") {
		res.send(`
        <head>
        <style>
        img {
            width: 500px;
            height: auto;
        }
        </style>
        </head>
        <h2>This is where Mochi resides. He enjoys his space. Please <a href="/dogs">Leave</a>.</h2>
        <img src="/mochi.JPG"/>
        
        `);
	} else if (dogs === "Taro") {
		res.send(`
        <head>
        <style>
        img {
            width: 500px;
            height: auto;
        }
        </style>
        </head>
        <h2>This is Taro's humble abode. You've chosen the nicer dog. Enjoy your stay! <a href='/dogs'>Leave</a></h2>
        <img src="/taro.HEIC"/>

        `);
	}
});

server.listen(port, () => {
	console.log(`Running on port: ${port}.`);
});
