import express from "express";
import "express-async-errors";
import cors from "cors";
import morgan from "morgan";
import helmet from "helmet";
import tweetsRoute from "./router/tweets.js";
import userRoute from "./router/user.js";

const app = express();

app.use(express.json());
app.use(morgan("tiny"));
app.use(helmet());
app.use(cors());

app.use("/tweets", tweetsRoute);
app.use("/user", userRoute);

//찾을 수 없는 페이지
app.use((req, res, next) => {
  res.sendStatus(404);
});

//에러 처리
app.use((err, req, res, next) => {
  console.error(err);
  res.sendStatus(500);
});

app.listen(8080);
