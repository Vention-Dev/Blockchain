const insertUser = require("../controllers/insertUser");

module.exports = insertUserRoutes = {
  path: "/user/create",
  method: "post",
  handler: async (req, res) => {
    try {
      const data = req.body;
      console.log(data);
      const response = await insertUser(data);
      return res.status(200).send({
        message: "User saved successfully!",
        response: response,
        type: "Success",
      });
    } catch (err) {
      return res.status(400).send({
        message: "User could not be saved!",
        response: err,
        type: "Error",
      });
    }
  },
};
