"use strict";
exports.__esModule = true;
var utils_1 = require("./utils/utils");
var http = require("http");
var app_1 = require("./app");
var server = http.createServer(app_1["default"]);
var port = utils_1.normalizePort(process.env.port || 3000);
server.listen(port);
server.on('error', utils_1.onError(server));
server.on('listening', utils_1.onListening(server));
