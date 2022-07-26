const express = require('express');
const router = express.Router();

router.get('/', (req,res) => {
    console.log(`${req.ip} requested ${req.url}`);
    res.render('index.hbs');
});

router.get('/Login/', (req,res) => {
    console.log(`${req.ip} requested ${req.url}`);
    res.render('Login.hbs');
});

router.post('/Plan/', (req,res) => {
    console.log(`${req.ip} requested ${req.url}`);
    res.render('Plan.hbs');
});

router.post('/Adminpannel/', (req,res) => {
    console.log(`${req.ip} requested ${req.url}`);
    res.render('Adminpannel.hbs');
});

module.exports = router;