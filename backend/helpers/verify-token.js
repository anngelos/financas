const jwt = require("jsonwebtoken");

const checkToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) return res.status(401).json({ message: "Acesso negado!" });

  try {
    const verified = jwt.verify(token, "degatembritt");
    req.user = verified;
    next(); //
  } catch (err) {
    res.status(400).json({ message: "O Token é inválido!" });
  }
};

module.exports = checkToken;


// FORMA ANTIGA DO VERIFY TOKEN
// const jwt = require('jsonwebtoken');
// const getToken = require('./get-token');

// const checkToken = (req, res, next) => {
//   if (!req.headers.authorization) {
//     return res.status(401).json({ message: "Acesso negado." })
//   }

//   const token = getToken(req)

//   if (!token) {
//     return res.status(401).json({ message: "Acesso negado." })
//   }

//   try {
//     const verified = jwt.verify(token, 'degatembritt')
//     req.user = verified
//     next()
//   } catch(error) {
//     return res.status(400).json({ message: "Token inválido." })
//   }
// }

// module.exports = checkToken