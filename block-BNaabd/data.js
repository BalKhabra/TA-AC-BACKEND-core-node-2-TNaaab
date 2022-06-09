let http = require("http");

let server = http.createServer(handleRequest);

function handleRequest(req, res) {

}

server.listen(7000, () => {
  console.log("server is listening on port 7k");
});