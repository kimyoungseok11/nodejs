import * as userRepository from "../data/auth.js";

export async function createUser(req, res) {
  const user = await userRepository.insertUser(req.body);
  return user
    ? res.status(201).json(user)
    : res.status(409).json({ message: "아이디가 존재함" });
}

export async function loginUser(req, res) {
  const body = req.body;
  const loginResult = await userRepository.login(body);
  return res.status(201).json(loginResult);
}
