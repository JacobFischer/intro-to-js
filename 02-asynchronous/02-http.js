// Here we'll combine callbacks with the http module to make a simple web server

 // Load the http module from node.js to create an http server.
const http = require('http');

// Configure our HTTP server to respond with Hello World to all requests.
const server = http.createServer((request, response) => {
    console.log("Hey someone love us :D");
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.end("Hello World from our simple web server\n");
    server.stop();
});

// Listen on port 8000, IP defaults to 127.0.0.1
server.listen(8000);

// Put a friendly message on the terminal
console.log("Server running at http://127.0.0.1:8000/");

// this will hang forever always waiting for a web browser to hit it up
