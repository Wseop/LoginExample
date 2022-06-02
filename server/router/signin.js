const express = require('express');
const router = express.Router();
const passport = require('passport');
const loginChecker = require('../login-checker.js');

router.post('/', passport.authenticate('local', {failureRedirect: '/signin/fail'}), (req, res) => {
    console.log("[SIGNIN] | id : " + req.body.id + ", pw : " + req.body.pw);
    res.send("Login Success");
});

router.get('/logout', loginChecker.isLogin, (req, res) => {
    console.log("[LOGOUT] | user : " + req.user.email);

    req.logout((err) => {
        if (err) throw err;

        res.send("logout");
    });
});

router.get('/fail', (req, res) => {
    res.send("Login Failed");
});

module.exports = router;