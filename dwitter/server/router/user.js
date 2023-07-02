import express from "express";
import "express-async-errors";
import * as userController from "../controller/userController.js";

const router = express.Router();

router.get("/", userController.findAllUser);
router.get("/:username", userController.findUserById);
router.post("/signup", userController.createUser);
router.post("/signin", userController.loginUser);

export default router;
