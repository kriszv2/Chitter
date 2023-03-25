import mongoose from "mongoose";
import { Schema } from "mongoose";

let Message;

if (mongoose.models.Message) {
  Message = mongoose.model("Message");
} else {
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

  Message = mongoose.model("Message", messageSchema);
}

export default Message;
