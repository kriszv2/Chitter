import User from "../../models/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const loginUser = async (req, res) => {
  User.findOne({ username: req.body.username })
    .then((user) => {
      bcrypt
        .compare(req.body.password, user.password)
        .then((isMatch) => {
          if (isMatch) {
            const token = jwt.sign(
              {
                username: user.username,
                email: user.email,
              },
              "PWD-TOKEN",
              { expiresIn: "24h" }
            );
            res.status(200).send({
              username: user.username,
              message: "Login Successful",
              email: user.email,
              token,
            });
          } else {
            res.status(400).send({
              message: "Password doesn't match",
            });
          }
        })
        .catch((e) => {
          res.status(400).send({
            message: "Error comparing passwords",
            e,
          });
        });
    })
    .catch((e) => {
      res.status(404).send({
        message: "Username not found",
        e,
      });
    });
};
