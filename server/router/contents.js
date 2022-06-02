const express = require('express');
const router = express.Router();
const loginChecker = require('../login-checker.js');

router.get('/', loginChecker.isLogin, (req, res) => {
    res.send(req.user.email + "'s Contents!");
});

module.exports = router;