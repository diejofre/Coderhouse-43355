import jwt from "jsonwebtoken";

const SECRET_KEY = "coderSecret";

export const generateToken = (user) => {
  const token = jwt.sign({ user }, SECRET_KEY, { expiresIn: "300s" });
  return token;
};

export const authToken = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader)
    return res.status(401).json({ message: "Not authenticated" });

  const token = authHeader.split(" ")[1];

  jwt.verify(token, SECRET_KEY, (err, credentials) => {
    if (err) return res.status(403).json({ message: "Invalid token" });
    req.user = credentials.user;
    next();
  });
};
