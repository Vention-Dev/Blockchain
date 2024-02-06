const getUser = require("../controllers/getUser");

module.exports = getUserRoutes = {
  path: "/user/:walletAddress",
  method: "get",
  handler: async (req, res) => {
    try {
      const { walletAddress } = req.params;
      const response = await getUser(walletAddress);
      return res.status(200).send({
        message: "User Found!",
        response: response,
      });
    } catch (err) {
      return res.status(400).send({
        message: "User not found!",
        response: err,
      });
    }
  },
};
