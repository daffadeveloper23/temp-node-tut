const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('Welcome traveler')
    } else if (req.url === '/about') {
        res.end('We are traveler support')
    } else {
        res.end(`
            <h1>Sorry we are not found the page you are looking for</h1>
            <a href='/'>Back to the homepage</a>
        `)
    }
})

server.listen(4500)
