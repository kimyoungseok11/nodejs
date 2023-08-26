import express from "express";
import "express-async-errors";
import * as userController from "../controller/auth.js";

const router = express.Router();

router.post("/signin", userController.createUser);

router.post("/login", userController.loginUser);

export default router;
