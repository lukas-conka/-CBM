"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const User_1 = require("./../models/User");
exports.resolvers = {
    Query: {
        allUsers: () => __awaiter(void 0, void 0, void 0, function* () { return User_1.User.find(); })
    },
    Mutation: {
        createUser: (root, { name, email }) => __awaiter(void 0, void 0, void 0, function* () {
            const newUser = new User_1.User({ name, email });
            yield newUser.save();
            console.log(newUser);
            return newUser;
        })
    }
};
