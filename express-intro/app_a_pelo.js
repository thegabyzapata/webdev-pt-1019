const http = require("http");
const fs = require("fs");

const server = http.createServer((request, response) => {
  if (request.url == "/") {
    const data = fs.readFileSync("./htmls/index.html").toString();
    console.log(data);
    response.write(data);
  } else if (request.url == "/pepe") {
    response.write("holapepe");
  }
  response.end();
});

const port = 3000;

server.listen(port, () => console.log(`Ready en puerto ${port}`));
