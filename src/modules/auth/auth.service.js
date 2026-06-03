import Admin from "../../models/admin.model.js";
import bcrypt from "bcrypt";

export const loginService = async (email, password, secondPassword) => {
  const hashed = await bcrypt.hash(password, 10);
  const hashedSecond = await bcrypt.hash(secondPassword, 10);

  const admin = await Admin.findOne({ email }).select(
    "+password +email +secondPassword",
  );

  if (!admin) {
    throw new Error("Admin is not defined");
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
