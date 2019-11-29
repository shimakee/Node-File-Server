'user strict'
const express = require('express');
const serveIndex = require('serve-index');
const app = express();
// const http = require('http');
const path = require('path');


const port = 80;
const dir = path.join(__dirname, "public");

// app.use('/static', express.static("public"));
app.use('/', express.static(dir), serveIndex(dir, {icons: true}));

// http.createServer(app).listen(80);
app.listen(port, ()=>{
    console.log(`Nodejs server running on ${port}`);
    console.log(`serving files in \n${dir}`);
});
