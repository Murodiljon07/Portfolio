import jwt from "jsonwebtoken";

const authMiddleware = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];

  if (!token) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  try {
    const decoded = jwt.verify(token, process.env.SECRET_KEY);

    if (!decoded || !decoded.id) {
      return res.status(401).json({ error: "Invalid token" });
    }

    const { role, id } = decoded;

    if (role !== "admin") {
      return res.status(403).json({ error: "Forbidden" });
    }

    req.adminId = id;
    next();
  } catch (err) {
    return res.status(401).json({ error: "Invalid token", err });
  }
};

export default authMiddleware;
