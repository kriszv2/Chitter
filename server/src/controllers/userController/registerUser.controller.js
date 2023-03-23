import User from "../../models/User.js";
import bcrypt from "bcrypt";

export const registerUser = async (req, res) => {
  bcrypt
    .hash(req.body.password, 10)
    .then((hashedPassword) => {
      const user = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        username: req.body.username,
        email: req.body.email,
        password: hashedPassword,
      });
      user
        .save()
        .then((result) => {
          res.status(201).send({
            message: "Created user!",
            result,
          });
        })

        .catch((error) => {
          res.status(500).send({
            message: "Error creating user!",
            error,
          });
        });
    })
    .catch((e) => {
      res.status(500).send({
        message: "Failed to hash password!",
        e,
      });
    });
};
