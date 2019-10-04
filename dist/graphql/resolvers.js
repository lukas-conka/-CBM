"use strict";
exports.__esModule = true;
var users = [
    {
        id: 2,
        name: "Lucas",
        email: "lucas@email.com"
    }
];
exports.resolvers = {
    Query: {
        allUsers: function () { return users; }
    },
    Mutation: {
        createUser: function (root, args) {
            var newUser = Object.assign({ id: users.length + 1 }, args);
            users.push(newUser);
            return newUser;
        }
    }
};
