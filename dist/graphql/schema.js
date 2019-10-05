"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_resolvers_1 = require("./resources/user/user.resolvers");
const graphql_tools_1 = require("graphql-tools");
const query_1 = require("./query");
const mutation_1 = require("./mutation");
const user_schema_1 = require("./resources/user/user.schema");
const lodash_1 = require("lodash");
const resolvers = lodash_1.merge(user_resolvers_1.userResolvers);
const SchemaDefinition = `
    type Schema{
        query: Query
        mutation: Mutation
    }

`;
exports.default = graphql_tools_1.makeExecutableSchema({
    typeDefs: [SchemaDefinition, query_1.Query, mutation_1.Mutation, user_schema_1.userTypes],
    resolvers
});
