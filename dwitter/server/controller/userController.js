import * as userData from "../data/userData.js";
import bcrpyt from "bcrypt";

export async function findAllUser(req, res, next) {
  const data = await userData.getAllUser();
  res.status(200).json(data);
}

export async function findUserById(req, res, next) {
  const username = req.params.username;
  const data = await userData.getUserById(username);
  res.status(200).json(data);
}

export async function createUser(req, res, next) {
  const data = req.body;
  const user = await userData.insertUser(data);
  if (user) {
    res.status(201).json(user);
  } else {
    res.send("존재하는 아이디 입니다");
  }
}

export async function loginUser(req, res, next) {
  const data = await userData.getUserById(req.body.username);
  const hashed = await bcrpyt.hash(req.body.password, 10);
  if (data.length === 0) {
    res.send("회원 정보가 잘못되었습니다");
  } else {
    const result = await bcrpyt.compare(req.body.password, hashed);
    if (!result) {
      res.send("회원 정보가 잘못되었습니다");
    } else {
      const token = await userData.login(req.body.username);
      res.status(201).json({ token, username: req.body.username });
    }
  }
}
