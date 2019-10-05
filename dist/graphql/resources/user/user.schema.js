"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const userTypes = `
    type Dependents {
        id: ID!
        name: String!
        birthday: String!
    }
    type User {
        id: ID!
        name: String
        email: String
        password: String
        address: String
        addressNumber: String
        complement: String
        phone: String
        whatsApp: String
        dependents: [Dependents]
    }


    input DependentsInput {
        name: String!
        birthday: String!    

    }

    input UserCreateInput {
        name: String!
        email: String!
        password: String!
        address: String!
        addressNumber: String!
        complement: String
        phone: String
        whatsApp: String
        dependents: [DependentsInput]

    }

     input UserUpdateInput {
        name: String! 
        email: String!
    }

`;
exports.userTypes = userTypes;
const userQueries = `
    users(first: Int, offset: Int): [User]
    user(id: ID!): User
`;
exports.userQueries = userQueries;
const userMutations = `
    createUser(input: UserCreateInput!): User
    updateUser(id: ID!, input: UserUpdateInput!): User
`;
exports.userMutations = userMutations;
