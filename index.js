const http = require('http');
const express = require('express');
const fs = require('fs');

const app = express();

app.use('/static', express.static(__dirname + '/static'));

app.get('/', (request, response) => {

    //let csp = '';
    //let csp = "default-src 'none';";
    let csp = "default-src 'none'; script-src 'self' 'nonce-123'; style-src 'self'; img-src 'self'";
    //let csp = "default-src 'none'; img-src 'self'; style-src 'self' https://www.google.com 'unsafe-inline';";
    // let csp = "default-src 'none';";

    response.set({
        'Content-Type': 'text/html',
    });
    if (csp) {
        response.set('Content-Security-Policy', csp)
    }
    response.sendFile(__dirname + '/index.html');
});

app.listen(8080);
