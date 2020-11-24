// Create a node app that will read the contents of a text file and console.log the content.

const fs = require("fs");

fs.readFile("text.txt", "utf8", (err, data) => {
  console.log(data);
});
