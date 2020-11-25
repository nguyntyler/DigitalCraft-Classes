const http = require("http");
const generateContent = require("./modules/generateContent");
const serveFile = require("./modules/serveFile");

const addVisit = require("./modules/visitCounter");

const port = 6677;

const server = http.createServer((req, res) => {
  if (req.url === "/favicon.ico") return serveFile(req, res, req.url);
  //   if (req.url === "/styles.css") return serveFile(req, res, req.url);
  addVisit(req.connection.remoteAddress);
  res.writeHead(200);
  const url = new URL(req.headers.host + req.url);
  let page = url.searchParams.get("page");
  let count = url.searchParams.get("count");

  let additional = [];
  url.searchParams.forEach((value, name) => {
    additional.push(`<li>${name}:${value}</li>`);
  });

  let wrapper = generateContent({
    page,
    count,
    additional,
  });

  res.write(wrapper);
  res.end();
});

server.listen(port);
