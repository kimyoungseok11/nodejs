const bcrpyt = require("bcrypt");

const password = "abcd1234";
const hashed = bcrpyt.hashSync(password, 10);
console.log(`password : ${password}, hashed : ${hashed}`);

const result = bcrpyt.compareSync("abcd1234", hashed);
console.log(result);
