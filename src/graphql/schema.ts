import { resolvers } from "./resolvers";
import { typeDefs } from "./typeDefs";
import { makeExecutableSchema } from "graphql-tools";

export default makeExecutableSchema({ typeDefs, resolvers });
