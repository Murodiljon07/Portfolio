import Admin from "../../models/admin.model.js";

export const loginService = async (email, password, secondPassword) => {
  const admin = await Admin.findOne({ email });
  if (!admin) {
    throw new Error("Invalid credentials");
  }
  return admin;
};
