import axios from "axios";

const baseURL = "http://localhost:8080/";

export async function signUp(user) {
  const { id, password, email } = user;
  try {
    const data = await axios.post(`${baseURL}auth/signup`, {
      id: id,
      password: password,
      email: email,
    });
    return data;
  } catch (e) {
    console.log(e);
  }

  //   await axios
  //     .post(`${baseURL}auth/signup`, {
  //       id: id,
  //       password: password,
  //       email: email,
  //     })
  //     .then((response) => {
  //       return response;
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
}
