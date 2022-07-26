const express = require('express');
const server = express();
const env = require('env');
const config = require('./config/config.json');
const fs = require('fs');
const os = require('os');

Startup();

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
    server.listen(config.PORT, (err) => {if(err){console.log(err)}else{console.log("Webserver online")}});
    console.log("");
    console.log("-----------------------------------------------------------------------------------------------------");
    console.log("-----------------------------------------------------------------------------------------------------");
}