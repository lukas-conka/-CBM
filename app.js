"use strict";
exports.__esModule = true;
var express = require("express");
var App = /** @class */ (function () {
    function App() {
        this.express = express();
        this.middleware();
    }
    App.prototype.middleware = function () {
        this.express.use('/', function (req, res, next) {
            res.send("Ola mundo");
        });
    };
    return App;
}());
exports["default"] = new App().express;
