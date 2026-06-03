import mongoose from "mongoose";
import Message from "../../models/messages.model.js";

export const getAllMessagesController = async (req, res) => {
  try {
    const messages = await Message.find();

    res.json({ msg: "succes", messages });
  } catch (error) {
    res.json({ msg: "Can't get messages", error });
  }
};

export const postMessageController = async (req, res) => {
  const data = req.body;

  try {
    const message = await Message.create(data);

    res.json({ msg: "Message sended", message });
  } catch (error) {
    res.json({ msg: "Can't send message", error });
  }
};

export const deleteMessageController = async (req, res) => {
  const { id } = req.params;

  console.log(id);

  try {
    await Message.findByIdAndDelete(id);

    res.json({ msg: "Message deleted" });
  } catch (error) {
    res.json({ msg: "Can't delete message", error });
  }
};
