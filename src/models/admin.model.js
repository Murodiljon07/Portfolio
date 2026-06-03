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
  media: { type: [Object], required: true },
  cv: { type: String, required: true },
  adress: { type: String, required: true },
  currentCity: { type: String, required: true, default: "Fergana" },
  role: { type: String, required: true, default: "admin" },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  secondPassword: { type: String, required: true },
});

const Admin = mongoose.model("admin", adminSchema);

export default Admin;
