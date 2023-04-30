const http = require('http');
http.createServer((req, res) => {
    if(req.url=='/'){
        res.end("Hello from root");
    }
    else if (req.url == '/about') {
        res.end("Hello from about");
    }
    else{
        res.writeHead(404);
        res.end("404 not found");
    }
}).listen( 8000);



