import express from "express";
import { db } from "./dbConnect/dbConn.js";
import config from "../config.js";

const app = express();

app.use(express.json());

app.get("/", (req, res, next) => {
  db.getConnection().then((connection) => {
    const result = connection.execute("select * from users");
    result.then((result) => res.send(result[0][0]));
  });
});

db.getConnection().then((connection) => {
  const result = connection.execute("select * from users");
  result.then((result) => console.log(result[0][0]));
});

app.listen(config.host.port);
