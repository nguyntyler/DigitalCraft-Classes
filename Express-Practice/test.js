const fs = require("fs");

const sendFavicon = (req, res) => {
  fs.readFile("./script.js", (err, data) => {
    if (err) return res.send(err);
    console.log(data);
  });
};

sendFavicon();
