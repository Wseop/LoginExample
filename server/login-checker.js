module.exports = {
    isLogin: function(req, res, next) {
        if (req.user) {
            next();
        } else {
            res.send("Signin first!");
        }
    }
};