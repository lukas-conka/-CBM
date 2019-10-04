"use strict";
exports.__esModule = true;
var resolvers_1 = require("./resolvers");
var typeDefs_1 = require("./typeDefs");
var graphql_tools_1 = require("graphql-tools");
exports["default"] = graphql_tools_1.makeExecutableSchema({ typeDefs: typeDefs_1.typeDefs, resolvers: resolvers_1.resolvers });
