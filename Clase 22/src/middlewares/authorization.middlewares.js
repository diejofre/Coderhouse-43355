const authorization = (role) => {
  return async (req, res, next) => {
    if (!req.user) return res.status(401).json({ message: "Unauthorized" });
    const { user } = req.user;
    if (user.role !== role) {
      return res.status(403).json({ message: "Forbidden" });
    }
    next();
  };
};

export default authorization;
