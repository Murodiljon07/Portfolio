import mongoose from "mongoose";

const adminSchema = new mongoose.Schema({
  name: { type: String, required: true },
  surname: { type: String, required: true },
  about: { type: String, required: true },
  age: { type: Number, required: true },
  birthday: { type: Date, required: true },
  profession: { type: String, required: true },
  experience: { type: String, required: true },
  avatar: { type: String, required: true },
  media: {
    type: [
      {
        type: String,
        url: { type: String, required: true },
        required: true,
      },
    ],
    required: true,
  },
  cv: { type: String, required: true },
  adress: { type: String, required: true },
  currentCity: { type: String, required: true, default: "Fergana" },
  role: { type: String, required: true, default: "admin" },

  skills: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Skills",
      required: true,
    },
  ],

  interests: { type: [String], required: true },

  projects: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Projects",
      required: true,
    },
  ],

  email: { type: String, required: true, unique: true, select: false },
  password: { type: String, required: true, select: false },
  secondPassword: { type: String, required: true, select: false },
});

const Admin = mongoose.model("admin", adminSchema);

export default Admin;
