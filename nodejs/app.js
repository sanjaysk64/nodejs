"use strict";
exports.__esModule = true;
var express = require("express");
var app = express.Router();
app.get("/connect", function (req, res) {
    res.status(200).json({ "message": "hello from js" });
});
app.listen(8080, function () {
    console.log("server started sucessfully");
});
