
import { User } from "./../models/User";

export const resolvers = {
  Query: {
    allUsers: async () => User.find()
  },
  Mutation: {
    createUser: async (root, { name, email }) => {
      const newUser = new User({ name, email });

      await newUser.save();

      console.log(newUser);

      return newUser;
    }
  }
};
