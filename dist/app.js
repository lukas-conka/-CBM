"use strict";
exports.__esModule = true;
var express = require("express");
var graphqlHTTP = require("express-graphql");
var schema_1 = require("./graphql/schema");
var startServer = function () {
    var app = express();
    app.use('/graphql', graphqlHTTP({
        schema: schema_1["default"],
        graphiql: true
    }));
    app.listen({ port: 3000 }, function () { console.log("Server started ..."); });
};
startServer();
