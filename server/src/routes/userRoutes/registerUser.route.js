import express from "express";
import { registerUser } from "../../controllers/userController/registerUser.controller.js";

const router = express.Router();

router.post("/", registerUser);

export { router as registerUser };
