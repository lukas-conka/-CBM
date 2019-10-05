const mongoose = require("mongoose");
const mongo = "mongodb://localhost:27017/cbm_teste";
mongoose.connect(mongo);
const { User } = require("../../dist/models/User");

describe("User model test", () => {
  beforeAll(async () => {
    await User.remove({});
  });
  it("should insert a new user", async () => {
    const user = new User({
      name: "Usuario Teste",
      email: "teste@email.com"
    });

    const savedUser = await user.save();
    const expected = "Usuario Teste";

    expect(savedUser.name).toBe(expected);
  });

  it("should get user", async () => {
    const user = new User({
      name: "Foo",
      email: "foo@email.com"
    });

    await user.save();
    const foundUser = await User.findOne({ name: "Foo" });
    const expected = "Foo";
    expect(foundUser.name).toEqual(expected);
  });

  it("should update a user", async () => {
    const user = new User({
      name: "Foo",
      email: "foo@email.com"
    });
    await user.save();
    user.name = "Foo Alterado";

    const foundUser = await user.save();

    const expected = "Foo Alterado";

    expect(foundUser.name).toEqual(expected);
  });
});
