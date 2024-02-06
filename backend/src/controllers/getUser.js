const User = require("../models/user");

module.exports = getUser = async (walletAddress) => {
  console.log("getUser", walletAddress);
  try {
    const responseUser = await User.find({
      walletAddress: walletAddress,
    });
    return responseUser;
  } catch (err) {
    console.log(err.message);
    throw err;
  }
};
