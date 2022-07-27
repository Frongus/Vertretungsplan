const express = require('express');
const router = express.Router();

router.get('/', (req,res) => {
    console.log(`${req.ip} requested ${req.url}`);
    res.render('index.hbs');
});

router.post('/Plan/', (req,res) => {
    console.log(`${req.ip} requested ${req.url}`);
    res.render('Plan.hbs');
});

module.exports = router;