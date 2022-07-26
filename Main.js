const express = require('express');
const server = express();
const config = require('./config/config.json');
const os = require('os');
const path = require('path');
const PublicDirectory = path.join(__dirname, './Public');

Startup();

server.use('/', require('./routes/pages.js'));
server.use(express.static(PublicDirectory));
server.set('view engine', 'hbs');

function Startup() {
    console.log("");
    console.log("");
    console.log("");
    console.log("");
    console.log("");
    console.log("");
    console.log("");
    console.log("");
    console.log("");
    console.log("");
    console.log(os.arch() + ' | ' + os.version() + ' | ' + os.platform());
    console.log("-----------------------------------------------------------------------------------------------------");
    console.log("-----------------------------------------------------------------------------------------------------");
    console.log("");
    console.log('Student-Access-key: ' + config.STUDENT);
    console.log('Admin-Access-key: ' + config.ADMINISTATOR);
    console.log('Web-Server-Port: ' + config.PORT);
    console.log(__dirname);
    server.listen(config.PORT, (err) => {if(err){console.log(err)}else{console.log("Webserver online")}});
    console.log("");
    console.log("-----------------------------------------------------------------------------------------------------");
    console.log("-----------------------------------------------------------------------------------------------------");
}