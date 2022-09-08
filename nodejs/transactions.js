"use strict";
exports.__esModule = true;
var express = require("express");
var transaction = express.Router(); // sub module
//we need to export -export default 
transaction.get("/trans", function (req, res) {
    res.status(200).json({ "message": "transactions sucess" });
});
exports["default"] = transaction;
