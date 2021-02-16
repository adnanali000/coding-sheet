const http = require('http');
const fs = require('fs');
const hostname = '127.0.0.1';
const port = 3000;
const home = fs.readFileSync('home.html')
const about = fs.readFileSync('./about.html')
const contact = fs.readFileSync('./contact.html')
const destination = fs.readFileSync('./destination.html')


const server = http.createServer((req,res)=>{
    url = req.url;
    res.statusCode = 200;
    res.setHeader('Content-Type','text/html');
    if(url == '/'){
        res.end(home);
    }
    else if(url == '/about'){
        res.end(about);  
    }
    else if(url == '/contact'){
        res.end(contact)
    }
    else if(url == '/destination'){
        res.end(destination)
    }
    else{
        res.statusCode = 404;
        res.end('<h2>404 not found</h2>');
    }
});

server.listen(port,hostname,()=>{
    console.log(`server is running at http://${hostname}:${port}/`);
});