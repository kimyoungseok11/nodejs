import express from "express";
import fs from "fs";
import fsAsync from "fs/promises";
//예외처리시 catch를 사용안해도 예외처리를 해주는 라이브러리
//사용시 promise 리턴을 하거나 async await를 사용해야함
import "express-async-errors";

const app = express();

app.use(express.json());

app.get("/file", (req, res) => {
  fs.readFile("/file1.txt", (err, data) => {
    if (err) {
      res.sendStatus(404);
    }
  });
});

app.get("/file1", (req, res) => {
  try {
    const data = fs.readFileSync("/file1.txt");
    res.send(data);
  } catch (error) {
    res.sendStatus(404);
  }
});

app.get("/file2", async (req, res) => {
  //promise를 리턴하는 방식
  return fsAsync.readFile("/file2.txt").then((data) => res.send(data));
});

app.get("/file3", async (req, res) => {
  //asyncy await를 사용
  const data = await fsAsync.readFile("/file3.txt");
  res.send(data);
});

app.get("/file4", async (req, res) => {
  return fsAsync.readFile("/file4.txt").then((data) => res.send(data));
});

app.get("/file5", async (req, res) => {
  const data = await fsAsync.readFile("/file5.txt");
  res.send(data);
});

app.use((error, req, res, next) => {
  //에러 처리함
  console.log(error);
  res.status(500).json({ message: "Something went wrong" });
});

app.listen(8080);
