import bcrypt from "bcrypt";

export async function passwordHash(password) {
  const hashed = bcrypt.hash(password, 10);
  return hashed;
}

export async function comparePassword(password, hashed) {
  const result = bcrypt.compare(password, hashed);
  return result;
}
