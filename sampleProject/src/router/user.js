import express from "express";
import { db } from "../dbConnect/dbConn.js";
import {
  getAllUser,
  createUser,
  getUserById,
  deleteTweetByUserIdx,
} from "../controller/userController.js";

const router = express.Router();

router.get("/", getAllUser);
router.get("/:id", getUserById);
router.post("/create", createUser);
router.delete("/delete/:idx", deleteTweetByUserIdx);

export default router;
