import { db } from "../db/dbConn.js";

export async function createUser(id, password, email) {
  return db
    .execute("insert into users (id,password,email) values (?,?,?)", [
      id,
      password,
      email,
    ])
    .then((result) => result[0].insertId);
}

export async function findById(id) {
  return db
    .execute("select * from users where id = ?", [id])
    .then((result) => result[0][0]);
}
