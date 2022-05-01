
require('dotenv').config();

const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {


  const authToken = req.headers['authorization'];

  const token = authToken && authToken.split(" ")[1];
  
  console.log("token: " + token);
  if (!token) {
    return res.status(403).send("A token is required for authentication");
  }
  try {
    const decoded = jwt.verify(token, process.env.ACCESS_TOKEN);
    req.user = decoded;
  } catch (err) {
    return res.status(401).send("Invalid Token");
  }
  return next();
};

module.exports = verifyToken;

