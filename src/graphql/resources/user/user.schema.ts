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

const userQueries = `
    users(first: Int, offset: Int): [User]
    user(id: ID!): User
`;

const userMutations = `
    createUser(input: UserCreateInput!): User
    updateUser(id: ID!, input: UserUpdateInput!): User
`;

export { userTypes, userQueries, userMutations };
