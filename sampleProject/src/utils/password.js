import crypto from "crypto";

function hash(password) {
  const salt = crypto.randomBytes(32).toString("hex");
  const hashPassword = crypto
    .pbkdf2Sync(password, salt, 1, 32, "sha512")
    .toString("hex");

  return hashPassword;
}

export default hash;
