import express from "express";
import helmet from "helmet";
import cors from "cors";
import morgan from "morgan";
import postRouter from "./router/post.js";

const app = express();

app.use(express.json());
app.use(helmet());
app.use(cors());
app.use(morgan("tiny"));

app.use("/post", postRouter);

app.use((req, res, next) => {
  res.sendStatus(404);
});

app.use((req, res, next) => {
  console.log(error);
  res.sendStatus(500);
});

app.listen(8080);
