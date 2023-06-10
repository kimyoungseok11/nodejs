import { db } from "../dbConnect/dbConn.js";
import hash from "../utils/password.js";

export async function getAllUser(req, res) {
  db.getConnection().then((connection) => {
    const result = connection.execute("select * from users");

    result.then((result) => {
      res.send(result[0]);
    });
  });
}

export async function getUserById(req, res) {
  db.getConnection().then((connection) => {
    const result = connection.execute("select * from users where id = ?", [
      req.params.id,
    ]);
    result.then((result) => res.send(result[0]));
  });
}

export async function deleteTweetByUserIdx(req, res) {
  db.getConnection().then((connection) => {
    const result = connection.execute("delete from users where idx = ?", [
      req.params.idx,
    ]);
    result.then((result) => res.send(result[0][0]));
  });
}

export async function createUser(req, res) {
  const { id, password } = req.body;
  const hashPass = hash(password);
  console.log(hashPass);
  db.getConnection().then((connection) => {
    const result = connection.execute("insert into users value (?,?)", [
      id,
      hashPass,
    ]);
    result.then((result) => res.send(result[0][0]));
  });
}
