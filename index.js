const http = require("http");
const fs = require('fs').promises;


   /*  
    html: 'text/html',
    txt: 'text/plain',
    css: 'text/css',
    gif: 'image/gif',
    jpg: 'image/jpeg',
    png: 'image/png',
    svg: 'image/svg+xml',
    js: 'application/javascript' 
    */

const server = http.createServer((req,res) => {;
  
  if (req.url === "/") {
    
    fs.readFile(__dirname + "/react.html")
      .then(contents => {
        res.writeHead(200, { 'Content-Type':'text/html' })
        res.end(contents);
      });
  } else if (req.url === "/app.js") {
    
    fs.readFile(__dirname + "/app.js")
      .then(contents => {
        res.writeHead(200, { 'Content-Type':'text/javascript' })
        res.end(contents);
      });
  } else if (req.url === "/style.css") {
    
    fs.readFile(__dirname + "/style.css")
      .then(contents => {
        res.writeHead(200, { 'Content-Type':'text/css' })
        res.end(contents);
      });
  } else if (req.url === "/n.png") {
    
    fs.readFile(__dirname + "/n.png")
      .then(contents => {
        res.writeHead(200, { 'Content-Type':'image/png' })
        res.end(contents);
      });
  } else if (req.url === "/react.png") {
    
    fs.readFile(__dirname + "/react.png")
      .then(contents => {
        res.writeHead(200, { 'Content-Type':'image/png' })
        res.end(contents);
      });
  } else {
    fs.readFile(__dirname + "/student.json")
      .then(contents => {
        res.setHeader("Content-Type", "application/json; charset=UTF-8");
        res.writeHead(200);  
        res.end(contents);
      });
  }
});




const port = "8080";
server.listen( port, () => {
    console.log(`port on ${port}`);
  }
);

