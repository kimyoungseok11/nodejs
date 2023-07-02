import * as userData from "../data/userData.js";

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
  res.status(201).json(user);
}

export async function loginUser(req, res, next) {
  const token = await userData.login(req.body.username);
  console.log(token);
  res.status(201).json(token);
}
