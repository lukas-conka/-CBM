"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
exports.userTypes = userTypes;
const userQueries = `
    users(first: Int, offset: Int): [User!]!
    user(id: ID!): User
`;
exports.userQueries = userQueries;
const userMutations = `
    createUser(input: UserCreateInput!): User
    updateUser(id: ID!, input: UserUpdateInput!): User
`;
exports.userMutations = userMutations;
