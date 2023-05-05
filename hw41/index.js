var http = require('http');
let users = [{id: 1, old: 1}, {id: 2, old: 2}, {id: 3, old: 3}, {id: 4, old: 4}];

let server = http.createServer(function (req, res) {
    if(req.url === '/users'){
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.end(JSON.stringify(users));
    } else {
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end('there is nothing here');
    }
    
});
server.listen(8199);
console.log('server:port 8199 is run');