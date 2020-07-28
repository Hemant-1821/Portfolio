const express = require('express');
const app = express()
const bodyParser = require('body-parser');

const path = require('path');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, '/public/')));

app.use((req,res,next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});


app.use('/', (req,res,next) => {
    res.sendFile(path.join(__dirname+'/views/index.html'));
});

const PORT = process.env.PORT || 4000;

app.listen(PORT);
