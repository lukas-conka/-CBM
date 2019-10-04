import { User } from "./../models/User";
import {UserModel} from './../models/User.d'

export const resolvers = {
  Query: {
    allUsers: async (): UserModel[] => User.find()
  },
  Mutation: {
    createUser: async (root, { name, email }): UserModel[] => {
      const newUser = new User({ name, email });

      await newUser.save();

      console.log(newUser);

      return newUser;
    }
  }
};
