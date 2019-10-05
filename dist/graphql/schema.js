"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const resolvers_1 = require("./resolvers");
const typeDefs_1 = require("./typeDefs");
const graphql_tools_1 = require("graphql-tools");
exports.default = graphql_tools_1.makeExecutableSchema({ typeDefs: typeDefs_1.typeDefs, resolvers: resolvers_1.resolvers });
