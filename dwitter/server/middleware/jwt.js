import jwt from "jsonwebtoken";
const secret = "kjksjnfakjsfdjksf";
let decoded;

export async function jwtToken(username) {
  const token = jwt.sign(
    {
      username,
    },
    secret
    //   { expiresIn: 2 }
  );

  jwt.verify(token, secret, (error, decoded) => {
    decoded = decoded;
  });
  return token;
}

// setTimeout(() => {
//   jwt.verify(token, secret, (error, decoded) => {
//     console.log(error, decoded);
//   });
// }, 3000);
