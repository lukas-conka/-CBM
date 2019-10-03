"use strict";
exports.__esModule = true;
var graphql_tools_1 = require("graphql-tools");
var users = [
    {
        id: 1,
        name: "Lucas",
        email: "lucas@email.com"
    }
];
var typeDefs = "\n\n    type User {\n        id: ID!\n        name: String!\n        email: String!\n    }\n\n    type Query {\n        allUsers: [User!]!\n    }\n\n";
var resolvers = {
    Query: {
        allUsers: function () { return users; }
    }
};
exports["default"] = graphql_tools_1.makeExecutableSchema({ typeDefs: typeDefs, resolvers: resolvers });
