"use strict";
exports.__esModule = true;
var mongoose = require("mongoose");
exports.User = mongoose.model("User", { name: String, email: String });
