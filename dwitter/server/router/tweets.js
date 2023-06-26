import express from "express";
import "express-async-errors";
import * as tweetController from "../controller/tweetController.js";
import { body, param } from "express-validator";
import { validate } from "../middleware/validator.js";

const router = express.Router();

//GET /tweets
//GET /tweets?username=:username
router.get("/", tweetController.getTweets);
//GET /tweets/:id
router.get(
  "/:id",
  [
    param("id")
      .trim()
      .notEmpty()
      .withMessage("아이디를 입력하세요")
      .isString()
      .withMessage("문자열을 입력하세요"),
    validate,
  ],
  tweetController.getTweet
);
//POST /tweets
router.post(
  "/",
  [
    body("name").trim().notEmpty().withMessage("이름을 입력하세요"),
    body("username").trim().notEmpty().withMessage("유저이름을 입력하세요"),
    body("text")
      .trim()
      .notEmpty()
      .withMessage("이름을 입력하세요")
      .isLength({ min: 2 })
      .withMessage("최소 두글자 이상 입력하세요"),
    validate,
  ],
  tweetController.createTweet
);
//PUT /tweets/:id
router.put(
  "/:id",
  [
    body("text")
      .trim()
      .notEmpty()
      .withMessage("이름을 입력하세요")
      .isString()
      .withMessage("문자열 형식을 입력하세요")
      .isLength({ min: 2 })
      .withMessage("최소 두글자 이상 입력하세요"),
    validate,
  ],
  tweetController.updateTweet
);
//DELETE /tweets/:id
router.delete("/:id", tweetController.deleteTweet);

export default router;
