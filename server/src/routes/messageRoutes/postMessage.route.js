import express from "express";
import { postMessage } from "../../controllers/messageControllers/postMessage.controller.js";

const router = express.Router();

router.post("/", postMessage);

export { router as postMessage };
