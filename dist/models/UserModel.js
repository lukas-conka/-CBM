"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const mongoose_1 = require("mongoose");
const dependentsSchema = new mongoose_1.Schema({ name: String, birthday: String });
const userSchema = new mongoose_1.Schema({
    name: String,
    email: String,
    password: String,
    birthday: String,
    address: String,
    addressNumber: String,
    complement: String,
    phone: String,
    whatsApp: String,
    dependents: [dependentsSchema]
});
exports.User = mongoose.model("User", userSchema);
