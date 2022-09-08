"use strict";
exports.__esModule = true;
var express = require("express");
var account = express.Router();
account.get("/acc", function (req, res) {
    res.status(200).json({ "message": "account sucess" });
});
exports["default"] = account;
