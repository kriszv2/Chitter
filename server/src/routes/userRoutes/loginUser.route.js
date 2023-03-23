import express from "express";
import { loginUser } from "../../controllers/userController/loginUser.controller.js";
const router = express.Router();

router.post("/login", loginUser);

export { router as loginUser };
