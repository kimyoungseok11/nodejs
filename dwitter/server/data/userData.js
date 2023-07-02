import bcrpyt from "bcrypt";
import * as jwt from "../middleware/jwt.js";

let users = [
  {
    username: "ee",
    password: "dd",
    name: "sd",
    email: "asdfn@naver.com",
    url: "wmftjq@naver.com",
  },
];

export async function getAllUser() {
  return users;
}

export async function getUserById(username) {
  return users.filter((user) => user.username === username);
}

export async function insertUser(data) {
  const password = data.password;
  const hashed = bcrpyt.hashSync(password, 10);
  data.password = hashed;

  const existUser = users.filter((user) => user.username == data.username);
  if (existUser.length > 0) {
    return;
  }
  users = [...users, data];
  return users;
}

export async function login(username) {
  return jwt.jwtToken(username);
}
