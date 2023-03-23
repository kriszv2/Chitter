import User from "../../models/User.js";

export const loginUser = async (req, res) => {
  const { username, password } = req.body;
  console.log(username);
  User.findOne({ username: username })
    .then((user) => {
      console.log("login successful");
    })
    .catch((e) => {
      response.status(404).send({
        message: "Email not found",
        e,
      });
    });
};
