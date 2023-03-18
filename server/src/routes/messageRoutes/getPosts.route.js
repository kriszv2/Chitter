import express from "express";
import { getPosts } from "../../controllers/messageControllers/getPosts.controller.js";

const router = express.Router();

router.get("/", getPosts);

export { router as getPosts };
