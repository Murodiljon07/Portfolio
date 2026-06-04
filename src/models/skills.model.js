import mongoose from "mongoose";

const skillsModel = new mongoose.Schema({
  name: { type: String, required: true },
  logo: { type: String, required: true },
  proficiency: { type: Number, required: true },
  catergory: { type: String, required: true },
});

const Skills = mongoose.model("skills", skillsModel);

export default Skills;
