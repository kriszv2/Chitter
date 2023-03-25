import mongoose from "mongoose";
import { Schema } from "mongoose";

const messageSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
    },
    message: {
      type: String,
    },
  },
  { timestamps: true }
);

const Message = mongoose.model("Message", messageSchema);

export default Message;
