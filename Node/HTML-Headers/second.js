// Make a node application that will supply html content based on the page parameter in the query string using the http module.(This is almost exactly the last example from this lesson)
// (bonus) Make the response send full valid html document without writing the top and bottom sections more than once. (IE make re-usable code)
// (Extra Bonus) Add additional content based on any additional parameters in the quesy string.

const http = require("http");

const htmlContent = `
  <!DOCTYPE html>
    <html>
      <head>
        <title>My Fav People</title>
      </head>
      <body>
        <h1>All My Favorite People!</h1>
        <script>
          console.log("I actually don't like them.")

          let body = document.querySelector("body")

          let bigList = document.createElement("ul")
          bigList.id = "big-list"
          body.append(bigList)
          
          fetch("http://localhost:5566")
          .then(res=>res.json())
          .then(data=>{
            data.forEach((person)=>{
              
              let newPerson = document.createElement("li")
              newPerson.innerText = person.firstName + " " + person.lastName + " : Email = " + person.email
              bigList.append(newPerson)
            })
          })
          .catch(err=>console.log(err))
        </script>
      </body>
    </html>
  `;

const server = http.createServer((req, res) => {
  res.writeHead(200, {
    "Content-Type": "text/html",
    "Access-Control-Allow-Origin": "*",
  });
  res.end(htmlContent);
});

server.listen(3344, () => {
  console.log("Server up");
});
