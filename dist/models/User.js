"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
exports.User = mongoose.model("User", { name: String, email: String });
