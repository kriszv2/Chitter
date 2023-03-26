import axios from "axios";

export const getPosts = async () => {
  const BASE_URL = process.env.REACT_APP_BASE_URL;
  console.log(BASE_URL);
  const posts = await axios.get(BASE_URL);
  return posts;
};
