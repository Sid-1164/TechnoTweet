const http = require('http')

const server = http.createServer((req , res) => {
    // console.log(req)

    if(req.url === '/'){
        res.end('Welcome to home')
    }
    
    if(req.url === '/about'){
        res.end('Welcome to about page')
    }

    res.write(`
        <h1>Oops!</h1>
        <p> We can't seem to find the page you are looking for</p>
        <a href = "/"> back home </a>
    `)

    // res.write('Welcome to root')
    // res.end()
})

server.listen(5000)