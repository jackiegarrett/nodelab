"use strict"
const http = require('http');
const { randomQuote } = require('./randomQuote');
const port = 3000;


http.createServer((req, res) => {
    res.write(JSON.stringify(
        randomQuote[Math.floor(Math.random() * randomQuote.length)]
    ));
    res.end();
}).listen(port)