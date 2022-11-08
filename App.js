const http = require('http');
const fs = require('fs');

const hostname = '127.0.0.1';
const port = 3000;

const home = fs.readFileSync('home.html')
const signup = fs.readFileSync('./Registration.html')
const retrieve = fs.readFileSync('./Retrievefile.html')
const upload = fs.readFileSync('./Uploadfile.html')
const signin = fs.readFileSync('./login.html')

const server = http.createServer((req, res) => {
    console.log(req.url);
    url = req.url;

    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    if (url == '/') {
        res.end(home);
    }
    else if (url == '/home') {
        res.end(home);
    }
    else if (url == '/Registration') {
        res.end(signup);
    }
    else if (url == '/Retrievefile') {
        res.end(retrieve);
    }
    else if (url == '/Uploadfile') {
        res.end(upload);
    }
    else if (url == '/login') {
        res.end(signin);
    }
    else {
        res.statusCode = 404;
        res.end("<h1>404  page not found</h1>");
    }
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
