/////Requests

const http = require("http");

const server = http.createServer((request, response) => {
  let body = [];
  request.on("data", (chunk) => {
    body.push(chunk);
  });
  request.on("end", () => {
    body = Buffer.concat(body).toString();
    console.log(body);
    response.setHeader("Content-Type", "text/html");
    response.write(
      '<form method="POST" action="/"><input name="username" type="text"/><button>Submit</button></form>'
    );
    response.end();
  });
});

server.listen(3000, () => {
  console.log("listening on 3000");
});
