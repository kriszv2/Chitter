import Message from "../../models/Message.js";
export const postMessage = async (req, res) => {
  try {
    const newMessage = new Message(req.body);
    const message = await newMessage.save();
    return res.status(201).json(message);
  } catch (e) {
    res.status(400).send(`Adding new message failed`);
  }
};
