export const typeDefs = `
    type User {
        id: ID!
        name: String!
        email: String!
    }

    type Query {
        allUsers: [User]
    }

    type Mutation {
        createUser(name: String!, email: String!): User
    }

`;