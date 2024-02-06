const updateUser = require("../controllers/updateUser");
const jwt = require("jsonwebtoken");
const config = require("../config/config");

module.exports = updateUserRoutes = {
  path: "/user/:walletAddress/:signaturedata",
  method: "post",
  handler: async (req, res) => {
    try {
      const data = req.body;
      const { walletAddress, signaturedata } = req.params;
      console.log("walletAddress", walletAddress);
      console.log("signaturedata", signaturedata);
      console.log("data", data);
      const response = await updateUser(data, walletAddress);
      if (response === null) {
        return res.status(400).send({
          message: "User not found.",
          response: response,
          type: "Error",
        });
      }

      const token = jwt.sign(
        {
          walletAddress: walletAddress,
          signaturedata: signaturedata,
          exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24 * 10,
        },
        config.jwtSecret
      );
      console.log("Token: ", token);

      // Code to verify the wallet address and signature data with the token use it where you want to verify the user
      const verified = jwt.verify(token, config.jwtSecret);
      console.log("Verifing: ", verified);
      if (
        verified.walletAddress === walletAddress &&
        verified.signaturedata === signaturedata
      ) {
        console.log("Verified");
      }
      // End of verification code

      return res.status(200).send({
        message: "User updated successfully.",
        response: response,
        type: "Success",
        token: token,
      });
    } catch (err) {
      return res.status(400).send({
        message: "Error updating user. Please try again.",
        response: err,
        type: "Error",
        token: null,
      });
    }
  },
};
