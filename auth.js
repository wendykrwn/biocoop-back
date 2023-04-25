const jwt = require("jsonwebtoken")
const secretKey = "your_secret_key"

function generateToken(user) {
  const payload = {
    userId: user.id,
    email: user.email,
  }
  return jwt.sign(payload, secretKey, { expiresIn: "1h" })
}

function verifyToken(token) {
  return jwt.verify(token, secretKey)
}

module.exports = {
  generateToken,
  verifyToken,
}
