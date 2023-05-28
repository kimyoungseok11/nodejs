import dotenv from "dotenv";

dotenv.config();

//.env에 key가 정의 되어있는지 아닌지 검사함
function required(key, defalutValue = undefined) {
  const val = process.env[key] || defalutValue;
  if (val == null) {
    throw new Error(`key ${key} is not defined`);
  }
  return val;
}

const config = {
  dbConfig: {
    host: required("DB_HOST"),
    user: required("DB_USER"),
    password: required("DB_PASSWORD"),
    database: required("DB_DATABASE"),
  },
  host: {
    port: parseInt(required("HOST_PORT", 8080)),
  },
};

export default config;
