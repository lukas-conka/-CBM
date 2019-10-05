const userTypes = `
    type User {
        id: ID!
        name: String!
        email: String!
    }

    input UserCreateInput {
        name: String! 
        email: String!
    }

     input UserUpdateInput {
        name: String! 
        email: String!
    }

`;

const userQueries = `
    users(first: Int, offset: Int): [User!]!
    user(id: ID!): User
`;

const userMutations = `
    createUser(input: UserCreateInput!): User
    updateUser(id: ID!, input: UserUpdateInput!): User
`;

export { userTypes, userQueries, userMutations}