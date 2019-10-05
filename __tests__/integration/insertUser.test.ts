const mongoose = require("mongoose");
const mongo = "mongodb://localhost:27017/cbm_teste";
mongoose.connect(mongo);
const { User } = require("../../dist/models/UserModel");

describe("User model test", () => {
  beforeAll(async () => {
    await User.remove({});
  });
  it("should insert a new user", async () => {
    const user = new User({
      name: "Usuario Teste",
      email: "teste@email.com",
      password: "123456",
      birthday: "05-11-1990",
      address: "Estrada Teste",
      addressNumber: "123",
      complement: "Ap 210",
      phone: "11 3332-2222",
      whatsApp: "11 98084-4433",
      dependents: [
        {
          name: "Luiza",
          birthday: "04/03/2003"
        },
        {
          name: "Ramon",
          birthday: "01/03/2000"
        }
      ]
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
