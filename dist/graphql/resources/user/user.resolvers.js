"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const UserModel_1 = require("../../../models/UserModel");
exports.userResolvers = {
    Query: {
        users: (root, { offset = 0, first = 10 }, context) => {
            return UserModel_1.User.find()
                .skip(offset)
                .limit(first);
        }
    },
    Mutation: {
        createUser: (root, { input }, context) => {
            const user = new UserModel_1.User(input);
            user.save();
            return user;
        }
    }
};
