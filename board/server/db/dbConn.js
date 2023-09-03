import mysql from "mysql2";

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  database: "board",
  password: "emaonx14",
});

export const db = pool.promise();
