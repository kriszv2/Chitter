import Message from "../../models/message.js";

export const getPosts = async (req, res) => {
  const posts = await Message.find({});
  res.send(posts);
};
