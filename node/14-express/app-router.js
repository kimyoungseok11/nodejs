import express from "express";
import postRouter from "./router/post.js";
import userRouter from "./router/user.js";

const app = express();
app.use(express.json());
app.use("/posts", postRouter); //최상위 경로 설정 후 router연결
app.use("/users", userRouter);

app.listen(8080);
