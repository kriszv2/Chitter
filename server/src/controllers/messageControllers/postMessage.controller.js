import Message from "../../models/message.js";

export const postMessage = async (req, res) => {
  const newMessage = new Message(req.body);
  return await newMessage.save();
};
