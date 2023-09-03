import express from "express";
import * as authController from "../controller/auth.js";
import { validationResult } from "express-validator";

const router = express.Router();

router.post("/signup", authController.signup);

export default router;
