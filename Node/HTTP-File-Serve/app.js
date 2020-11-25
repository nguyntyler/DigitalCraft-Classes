const http = require("http");
const fs = require("fs");
const port = 3344;
const navigation = `
    <nav>
        <span><a href="?page=home">Home</a></span>
        <span><a href="?page=contact">Contact</a></span>
        <span><a href="?page=about">About</a></span>
    </nav>
`;
const makeHeading = (page) => {
  let heading;
  switch (page) {
    case "about":
      heading = `<h1>This is about!</h1>`;
      break;
    case "contact":
      heading = `<h1>This is contact</h1>`;
      break;
    case "foo":
      heading = "<h1>I Pitty THE foo</h1>";
      break;
    default:
      heading = `<h1>This is Home</h1>`;
  }
  return heading;
};
// const addCss = (req, res) => {
//   fs.readFile(`./styles.css`, (err, data) => {
//     if (err) {
//       res.writeHead(404);
//       res.end();
//     }
//     res.writeHead(200);
//     res.end(data);
//   });
// };
let generateContent = ({ page, navigation, heading, additional, count }) => {
  return `
        <!DOCTYPE html>
        <html>
            <head>
								<title>My Selection:${page}</title>
								<link rel="stylesheet" href="./styles.css">
            <head>
            <body>
                ${navigation}
                ${heading}
                The count is ${count || 0}. I hope you are happy.
                <ul>
                    ${additional.join("")}
                </ul>
                <footer>
                    copyleft 2020
                </footer>
            </body>
        </html>
    `;
};
const serveFavicon = (req, res) => {
  fs.readFile("./favicon.ico", (err, data) => {
    if (err) {
      res.writeHead(404);
      res.end();
    }
    res.writeHead(200);
    res.end(data);
  });
};
const serveCSS = (req, res) => {
  fs.readFile("./styles.css", (err, data) => {
    if (err) {
      res.writeHead(404);
      res.end();
    }
    res.writeHead(200, { "Content-Type": "text/css" });
    res.write(data);
    res.end();
  });
};
const server = http.createServer((req, res) => {
  res.writeHead(200);
  if (req.url === `/favicon.ico`) return serveFavicon(req, res);
  if (req.url === `/styles.css`) return serveCSS(req, res);
  const url = new URL(req.headers.host + req.url);
  let page = url.searchParams.get("page");
  let count = url.searchParams.get("count");
  let additional = [];
  url.searchParams.forEach((value, name) => {
    additional.push(`<li>${name}:${value}</li>`);
  });
  let heading = makeHeading(page);
  let foo = "Yo are awesome Clint!";
  let wrapper = generateContent({
    page,
    navigation,
    heading,
    count,
    additional,
    foo,
  });
  res.write(wrapper);
  res.end();
});
server.listen(port, () => console.log(`${port} is rdy`));
