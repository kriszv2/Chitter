import Message from "../../models/Message.js";

export const getPosts = async (req, res) => {
  const posts = await Message.find({});
  res.send(posts);
};
