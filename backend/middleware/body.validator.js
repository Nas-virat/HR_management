const { body } = require("express-validator");

const bodyValidation = () => {
  return [
    body("username").isLength({ max: 16 }).trim(),
    body("password").isLength({ min: 8, max: 36 }).trim(),
    body("email").isLength({ max: 64 }).isEmail().normalizeEmail(),
    body("firstName").isLength({ max: 64 }).trim(),
    body("lastName").isLength({ max: 64 }).trim(),
    body("phone").isLength({ max: 10 }).trim(),
    body("bio").isLength({ max: 150 }).trim()
  ];
};

module.exports = bodyValidation;