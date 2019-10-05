import { User } from "../../../models/UserModel";

export const userResolvers = {
  Query: {
    users: (root, { offset = 0, first = 10 }, context) => {
      return User.find()
        .skip(offset)
        .limit(first);
    }
  },
  Mutation: {
    createUser: (root, { input }, context) => {
      const user = new User(input);
      user.save();
      return user;
    }
  }
};
