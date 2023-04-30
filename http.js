const http=require('http');
const server=http.createServer((req,res)=>{
    if(req.url=='/')
    {
        res.end("Root page");
    }
    else if(req.url=='/about')
    {
        res.end('About page');
    }
    else
    {
        res.writeHead(404);
        res.end('404 Not found');
    }
});

server.listen(5000,()=>{
    console.log('Server runnning on port 5000');
});