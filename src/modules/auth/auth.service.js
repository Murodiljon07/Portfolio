import Admin from "../../models/admin.model.js";
import bcrypt from "bcrypt";

export const loginService = async (email, password, secondPassword) => {
  const admin = await Admin.findOne({ email }).select(
    "+password +email +secondPassword",
  );

  if (!admin) {
    throw new Error("Invalid credentials");
  }

  const isPasswordMatch = await bcrypt.compare(password, admin.password);
  const isSecondPasswordMatch = await bcrypt.compare(
    secondPassword,
    admin.secondPassword,
  );

  if (!admin || !isPasswordMatch || !isSecondPasswordMatch) {
    throw new Error("Invalid credentials");
  }
  return admin;
};
