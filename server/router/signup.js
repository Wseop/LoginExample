const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');

const db = require('../db.js');

router.post('/', (req, res) => {
    let userInfo = { email: req.body.id, pw: bcrypt.hashSync(req.body.pw, 10) };

    db.client.collection('login_info').findOne({email: req.body.id}, (err, findRes) => {
        if (err) throw err;

        if (!findRes) {
            db.client.collection('login_info').insertOne(userInfo, (err, r) => {
                if (err) throw err;
        
                console.log("[SIGNUP] | id : " + userInfo.email + ", pw : " + userInfo.pw);
                res.send("Signup Success");
            });
        } else {
            res.send("Already Exist!");
        }
    });
});

module.exports = router;