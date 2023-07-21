import jwt from "jsonwebtoken";

const JWT_SECRET = "mysecret";

export const generateToken = (user) => {
  const token = jwt.sign({ id: user.id, email: user.email }, JWT_SECRET, {
    expiresIn: "1d",
  });
  return token;
};

export const verifyToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  if (!authHeader) return res.sendStatus(401);
  const token = authHeader.split(" ")[1];
  jwt.verify(token, JWT_SECRET, (err, credentials) => {
    if (err) return res.status(403).send("Not authorized");
    req.user = credentials.user;
    next();
  });
};
