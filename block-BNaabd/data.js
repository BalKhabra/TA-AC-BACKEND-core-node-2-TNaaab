let http = require("http");

let server = http.createServer(handleRequest);

function handleRequest(req, res) {
    var store = '';
    req.on('data', (chunk) => {
        store += chunk;
    })
    req.on('end', () => {
        if(req.method === 'POST' && req.url === '/json') {
            console.log(store);
            res.setHeader('Content-Type', "application/json")
        }
        if(req.method === 'POST' && req.url === '/form'){
            console.log(store);
           var formData = qs.parse(store);
           res.end(JSON.stringify(formData))
        }
    })
}

server.listen(7000, () => {
  console.log("server is listening on port 7k");
});