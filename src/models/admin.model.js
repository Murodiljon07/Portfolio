import mongoose from "mongoose";

const adminSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    surname: { type: String, required: true, trim: true },
    about: { type: String, required: true },
    age: { type: Number, required: true },
    birthday: { type: Date, required: true },
    profession: { type: String, required: true },
    experience: { type: String, required: true },
    avatar: { type: String, required: true },

    media: [
      {
        platform: { type: String, required: true },
        url: { type: String, required: true },
      },
      { _id: false },
    ],

    cv: {
      type: String,
      default: "",
    },

    adress: { type: String, required: true },
    currentCity: {
      type: String,
      default: "Fergana",
    },

    role: {
      type: String,
      default: "admin",
    },

    skills: {
      type: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "skills",
        },
      ],
      default: [],
    },

    interests: {
      type: [String],
      default: [],
    },

    projects: {
      type: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "projects",
        },
      ],
      default: [],
    },

    email: {
      type: String,
      required: true,
      unique: true,
      select: false,
      trim: true,
    },

    password: {
      type: String,
      required: true,
      select: false,
    },

    secondPassword: {
      type: String,
      required: true,
      select: false,
    },
  },
  { timestamps: true },
);

const Admin = mongoose.model("admin", adminSchema);

export default Admin;
