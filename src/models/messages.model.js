import mongoose from "mongoose";

const messageModel = mongoose.Schema({
  author: { type: String, require: true },
  message: { type: String, require: true },
});

const Message = mongoose.model("message", messageModel);

export default Message;
