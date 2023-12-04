const jwt = require("jsonwebtoken");
const User = require("../models/User");

const getUserByToken = async (token, res) => {
  if (!token) {
    return res.status(401).json({ error: "Acesso negado!" });
  }

  try {
    const decoded = jwt.verify(token, "degatembritt");

    const userId = decoded.id;

    const user = await User.findOne({ _id: userId });

    return user;
  } catch (err) {
    return res.status(401).json({ error: "Token inválido" });
  }
};

module.exports = getUserByToken;
