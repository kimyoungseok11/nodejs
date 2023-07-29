import { createJwtToken } from "../util/jwt.js";
import { passwordHash, comparePassword } from "../util/passwordHash.js";

let users = [
  {
    id: Date().toString(),
    username: "wmftjq",
    password: "$2b$10$MTmlW.C33feJsOr6pRWwTelmLJKYB4bJL43v90xMJYUVaW2a.rBYW",
  },
];

export async function findByUserName(userName) {
  return users.find((user) => userName === user.username);
}

export async function insertUser(user) {
  const { username, password } = user;
  const hashPassword = await passwordHash(password);
  const duplicateUser = await findByUserName(username);

  const newUser = {
    id: Date().toString(),
    username,
    password: hashPassword,
  };

  if (duplicateUser) {
    return;
  } else {
    users = [...users, newUser];
    return {
      username: username,
    };
  }
}

export async function login(user) {
  const { username, password } = user;
  const loginUser = await findByUserName(username);
  const passwordResult = await comparePassword(password, loginUser.password);

  if (!loginUser) {
    return res.status(401).json({ message: "Invalid user or password" });
  }

  if (!passwordResult) {
    return res.status(401).json({ message: "Invalid user or password" });
  }

  const token = await createJwtToken(loginUser.username);
  console.log(token);
  return { username, token };
}
