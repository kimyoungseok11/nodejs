import mysql from "mysql2";
import config from "../../config.js";

const pool = mysql.createPool({
  host: config.dbConfig.host,
  user: config.dbConfig.user,
  password: config.dbConfig.password,
  database: config.dbConfig.database,
});

export const db = pool.promise();
