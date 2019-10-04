const users: any[] = [
  {
    id: 2,
    name: "Lucas",
    email: "lucas@email.com"
  }
];

export const resolvers = {
  Query: {
    allUsers: () => users
  },
  Mutation: {
    createUser: (root, args) => {
      const newUser = Object.assign({ id: users.length + 1 }, args);

      users.push(newUser);

      return newUser;
    }
  }
};
