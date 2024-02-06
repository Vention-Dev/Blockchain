const User = require("../models/user");

module.exports = insertUser = async (data) => {
  try {
    const isUser = await User.findOne({
      walletAddress: data.walletAddress,
    });
    if (isUser) {
      return "User already exists";
    }
    const UserUser = new User(data);
    const responseUserUser = await UserUser.save();
    return responseUserUser;
  } catch (err) {
    console.log(err.message);
    throw err;
  }
};
