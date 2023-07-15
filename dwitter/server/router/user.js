import express from "express";
import "express-async-errors";
import * as userController from "../controller/userController.js";
import { body, param } from "express-validator";
import { validate } from "../middleware/validator.js";

const validateCredential = [
  body("username").trim().notEmpty().withMessage("5자 이상 입력하세요"),
  body("password")
    .trim()
    .notEmpty()
    .isLength({ min: 5 })
    .withMessage("5자 이상 입력하세요"),
  validate,
];

const validateSignUp = [
  ...validateCredential,
  body("name").trim().notEmpty().withMessage("이름을 입력하세요"),
  body("email").isEmail().normalizeEmail().withMessage("이메일을 입력하세요"),
  body("url").trim().isURL().optional({ nullable: true, checkFalsy: true }),
  validate,
];

const router = express.Router();

router.get("/", userController.findAllUser);
router.get("/:username", userController.findUserById);
router.post("/signup", validateSignUp, userController.createUser);
router.post("/signin", validateCredential, userController.loginUser);

export default router;
