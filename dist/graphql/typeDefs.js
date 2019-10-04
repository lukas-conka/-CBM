"use strict";
exports.__esModule = true;
exports.typeDefs = "\n    type User {\n        id: ID!\n        name: String!\n        email: String!\n    }\n\n    type Query {\n        allUsers: [User]\n    }\n\n    type Mutation {\n        createUser(name: String!, email: String!): User\n    }\n\n";
