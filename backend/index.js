const express = require("express");
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const cors = require("cors");
const CryptoJS = require("crypto-js");
const app = express();

app.use(cors());
const PORT = 5000;

app.use(bodyParser.json());

const users = [
  {
    id: 1,
    firstName: "Amir",
    lastname: "Mursal",
    username: "amir",
    password: bcrypt.hashSync("mursal", 10),
    role: "agent",
    email: "amir@manasik.com",
    agentStatus: "inprogress",
  },
];

const JWT_SECRET = "your_jwt_secret";

// Login route
app.post("/login", (req, res) => {
  const { username, password } = req.body;

  const decryptedPassword = CryptoJS.AES.decrypt(
    password,
    "secret-key"
  ).toString(CryptoJS.enc.Utf8);

  // Find the user
  const user = users.find((u) => u.username === username);

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  // Validate password
  const passwordIsValid = bcrypt.compareSync(decryptedPassword, user.password);

  if (!passwordIsValid) {
    return res.status(401).json({ message: "Invalid password" });
  }

  // Create JWT token
  const token = jwt.sign({ id: user.id, role: user.role }, JWT_SECRET, {
    expiresIn: "1h",
  });

  // Respond with the token and user details
  res.status(200).json({
    token,
    user: {
      id: user.id,
      username: user.username,
      email: user.email,
      role: user.role,
    },
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
