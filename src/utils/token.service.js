import jwt from "jsonwebtoken";

export const generateToken = (admin) => {
  const payload = {
    id: admin._id,
    email: admin.email,
    role: admin.role,
  };

  return jwt.sign(payload, process.env.SECRET_KEY, { expiresIn: "1h" });
};
