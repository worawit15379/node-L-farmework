/**
 * Created by lvlq on 16/11/17.
 */
var express = require("express");
var router = express.Router();

router.get("/", function (req, res) {
    var username = req.query.username;
    var passwd = req.query.passwd;
});

module.exports = router;