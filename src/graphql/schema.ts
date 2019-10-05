import { userResolvers } from './resources/user/user.resolvers';

import { makeExecutableSchema } from "graphql-tools";
import { Query } from "./query";
import { Mutation } from "./mutation";
import { userTypes } from "./resources/user/user.schema";
import { merge} from 'lodash';

const resolvers = merge(
    userResolvers
);

const SchemaDefinition = `
    type Schema{
        query: Query
        mutation: Mutation
    }

`;

export default makeExecutableSchema({
  typeDefs: [SchemaDefinition, Query, Mutation, userTypes],
  resolvers
});
