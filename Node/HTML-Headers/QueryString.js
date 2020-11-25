const http = require("http");
const port = 5566
cosnt server - http.createServer((req, res) => {

  res.writeHead(200);

  console.log(req.url);
  console.log(req.headers.host);
  const url = new URL(req.headers.host+req.url)

  let page = url.searchParams.get("page")
  let count = url.searchParams.get("count")

  let content = ""
  switch(page){
    case "about":
      content += `<h1>This is about!</h1>`;
      break;
    case "contact":
      content += `<h1>This is contact</h1>`;
      break;
    default:
      content += `<h1>This is home</h1>`;
  } //This is called routing in express.
  content += `<div>The count is ${count || 0}</div>`
})
