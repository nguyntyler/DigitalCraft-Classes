let people = [
  { firstName: "Tyler", lastName: "Nguyen", email: "tn@email.com" },
  { firstName: "Tom", lastName: "Nope", email: "tno@email.com" },
  { firstName: "Jerry", lastName: "Nugget", email: "jn@email.com" },
];

const http = require("http");
const server = http.createServer((req, res) => {
  res.writeHead(200, {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  });
  //You can write to the response before sending/ending
  res.write(JSON.stringify(people));
  res.end();
});

server.listen(5566, () => {
  console.log(`Running on Port ${5566}`);
});
