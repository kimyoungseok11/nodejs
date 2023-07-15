import bcrpyt from "bcrypt";
import * as jwt from "../middleware/jwt.js";

let users = [
  {
    username: "bobobo",
    password: "abcd1234",
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
  const hashed = await bcrpyt.hash(password, 10);
  data.password = hashed;

  const existUser = users.filter((user) => user.username === data.username);
  if (existUser.length > 0) {
    return;
  }
  const token = await jwt.jwtToken(data.username);
  users = [...users, data];

  return { token: token, username: data.username };
}

export async function login(username) {
  return jwt.jwtToken(username);
}
