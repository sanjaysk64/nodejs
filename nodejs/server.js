"use strict";
exports.__esModule = true;
var express = require("express");
var transactions_1 = require("./transactions");
var account_1 = require("./account");
var app = express();
app.use("/module1", transactions_1["default"]);
app.use("/module2", account_1["default"]);
app.listen(8080, function () {
    console.log("server started sucesfully");
});
//http://localhost:8080/module1/trans
//http://localhost:8080/module2/acc
