import axios from "axios";

export const getPosts = async () => {
  const posts = await axios.get("http://localhost:4000");
  return posts;
};
