const http = require("http");
const { readFileSync } = require('fs')

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

const react = readFileSync('./react.html')
const css = readFileSync('./style.css')
const js = readFileSync('./app.js')
const reactPng = readFileSync('./react.png')
const nodePng = readFileSync('./n.png')
const data = readFileSync('./student.json')

const server = http.createServer((req,res) => {;
   const url = req.url
 if(url === '/') {
   res.writeHead(200, {'content-type': 'text/html'})
   res.write(react)
   res.end()
 } else if (url === '/style.css') {
   res.writeHead(200, {'content-type': 'text/css'})
   res.write(css)
   res.end()
 } else if (url === '/app.js') {
   res.writeHead(200, {'content-type': 'application/javascript'})
   res.write(js)
   res.end()
 } else if (url === '/n.png') {
   res.writeHead(200, {'content-type': 'image/png'})
   res.write(nodePng)
   res.end()
 } else if (url === '/react.png') {
   res.writeHead(200, {'content-type': 'image/png'})
   res.write(reactPng)
   res.end()
 } else {
   res.writeHead(200, {'content-type': 'application/json'})
   res.write(data)
   res.end()
 }

});




const port = "8080";
server.listen( port, () => {
    console.log(`port on ${port}`);
  }
);