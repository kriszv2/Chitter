import User from "../../models/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const loginUser = async (req, res) => {
  const { username, password } = req.body;

  User.findOne({ username: username })
    .then((user) => {
      bcrypt
        .compare(password, user.password)
        .then(() => {
          const token = jwt.sign(
            {
              username: user.username,
              userEmail: user.email,
            },
            "PWD-TOKEN",
            { expiresIn: "24h" }
          );
          res.status(200).send({
            message: "Login Successful",
            email: user.email,
            token,
          });
        })
        .catch((e) => {
          res.status(400).send({
            message: "password doesn't match",
            e,
          });
        });
      console.log("login successful");
    })
    .catch((e) => {
      res.status(404).send({
        message: "username not found",
        e,
      });
    });
};
