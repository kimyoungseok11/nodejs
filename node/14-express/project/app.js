import express from "express";
import conn from "./dbConn.js";
import cors from "cors";

const app = express();

conn.connect();

conn.query("SELECT * FROM users", function (error, results, fields) {
  if (error) {
    console.log(error);
  }
  console.log(results);
});

app.use(express.json());
app.use(cors());

app.get("/", (req, res, next) => {
  res.send("hello");
  next();
});

app.listen(8080);

conn.end();
