import axios from "axios";

const baseUrl = "http://localhost:8080";

export const getApi = async (url) => {
  const getUrl = baseUrl + url;

  try {
    const response = await axios.get(getUrl);
    return response.status === 200 ? response.data : "error";
  } catch (err) {
    return err;
  }
};
