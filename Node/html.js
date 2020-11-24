const http = require("http");

const htmlContent = `
  <!DOCTYPE html>
    <html>
      <head>
        <title>My Fav Food</title>
      </head>
      <body>
        <h1>All My Favorite Foods!</h1>
        <ul>
          <li>Apple</li>
          <li>Banana</li>
          <li>Carrot</li>
        </ul>
        <script>
          console.log("I actually don't like them.")
        </script>
      </body>
    </html>
  `;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.end(htmlContent);
});

server.listen(3344, () => {
  console.log("Server up");
});
