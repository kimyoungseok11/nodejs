import express from "express";
import "express-async-errors";
import * as postController from "../controller/post.js";

const router = express.Router();

router.get("/", postController.getPosting);

router.post("/create", postController.createPost);

router.put("/update/:id", postController.updatePost);

router.delete("/delete/:id", postController.deletePost);

export default router;
