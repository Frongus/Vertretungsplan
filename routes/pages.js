const express = require('express');
const router = express.Router();
const config = require('../config/config.json');

router.get('/', (req,res) => {
    console.log(`${req.ip} requested ${req.url}`);
    res.render('index.hbs');
});

router.post('/plan/', (req,res) => {
    var ReqData = req.body;
    console.log(`Request has been made: ${ReqData}`);
    
    if(ReqData.ID == config.STUDENT)
    {
        res.render('Plan.hbs');
    }
    else
    {
        if(ReqData.ID == config.ADMINISTATOR)
        {
            res.render('Adminpannel.hbs');
        }
        else
        {
            res.send("error, wrong Student/Admin ID");
        }
    }
    console.log(`${req.ip} requested ${req.url}`);
});

module.exports = router;