import express from "express";
import { postMessage } from "../controllers/MessageController.js";

const router = express.Router();

router.post("/", postMessage);

export { router as postMessage };
