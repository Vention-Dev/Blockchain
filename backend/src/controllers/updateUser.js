const User = require("../models/user");

module.exports = updateUser = async (data, walletAddress) => {
  try {
    const response = await User.findOneAndUpdate(
      { walletAddress: walletAddress },
      data,
      {
        new: true,
      }
    );
    return response;
  } catch (err) {
    console.log(err.message);
    throw err;
  }
};
