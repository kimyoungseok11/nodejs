import * as authRepository from "../data/auth.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

function createJwtToken(id) {
  return jwt.sign({ id }, "sdklfaslkdfa", {
    expiresIn: 20,
  });
}

export async function signup(req, res) {
  console.log(req.body);
  const { id, password, email } = req.body;
  const passwordHash = await bcrypt.hash(password, 12);
  const isExist = await authRepository.findById(id);
  const token = createJwtToken(id);
  if (isExist) {
    return res.status(401).send("이미 존재하는 회원입니다");
  }
  const user = await authRepository.createUser(id, passwordHash, email);
  console.log(user);

  res.status(200).send({ id });
}

export async function login(req, res) {}
