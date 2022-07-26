const express = require('express');
const server = express();
const env = require('env');
const config = './config/config.json';

Startup();

function Startup() {
    console.log(config);
}