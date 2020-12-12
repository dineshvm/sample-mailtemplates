const express = require('express');
const sendEmail = require('./mail');
const app = express();
const PORT = 8090;

app.get('/', function (req, res) {
    sendEmail();
    res.send('Hello, App is running Successfully!');
});

app.listen(PORT, function () {
    console.log('app listening on port 8090!');
});