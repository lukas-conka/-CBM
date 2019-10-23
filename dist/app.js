"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const express = require("express");
const graphqlHTTP = require("express-graphql");
const schema_1 = require("./graphql/schema");
const dotenv_1 = require("dotenv");
const path_1 = require("path");
const env = process.env.NODE_ENV || "prod";
const configPath = path_1.join(__dirname, './config', `.env.${env}`);
dotenv_1.config({
    path: configPath
});
const app = express();
exports.app = app;
console.log("ENV>", process.env.MONGODB_URL);
const connectMongo = () => __awaiter(void 0, void 0, void 0, function* () {
    yield mongoose.connect(process.env.MONGODB_URL, {
        useNewUrlParser: true
    });
});
const startServer = () => {
    app.use("/graphql", graphqlHTTP({
        schema: schema_1.default,
        graphiql: process.env.NODE_ENV === "dev"
    }));
    connectMongo();
};
exports.startServer = startServer;
