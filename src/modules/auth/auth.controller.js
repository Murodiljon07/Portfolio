import Admin from "../../models/admin.model.js";

// Services
import { loginService } from "./auth.service.js";
import { generateToken } from "../../utils/token.service.js";

export const loginController = async (req, res) => {
  const { email, password, secondPassword } = req.body;
  try {
    const admin = await loginService(email, password, secondPassword);

    if (!admin) {
      return res.status(400).json({ error: "Invalid credentials" });
    }

    const token = await getenerateToken(admin);

    res.status(200).json({ admin, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
