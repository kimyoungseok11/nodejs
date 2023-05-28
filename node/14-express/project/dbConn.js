import mysql from "mysql";

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "emaonx14",
  database: "projectDB",
});

export default connection;
