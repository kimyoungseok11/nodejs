import express from "express";
import { db } from "./dbConnect/dbConn.js";
import config from "../config.js";
import userRouter from "./router/user.js";
import cors from "cors";

const app = express();

app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

app.use(express.json());

app.use("/user", userRouter);

app.listen(config.host.port);
