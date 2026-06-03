import mongoose from "mongoose";

const messageModel = new mongoose.Schema({
  author: { type: String, required: true },
  message: { type: String, required: true },
});

const Message = mongoose.model("message", messageModel);

export default Message;
