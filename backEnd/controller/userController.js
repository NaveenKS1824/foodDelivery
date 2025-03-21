const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/userSchema"); 
require("dotenv").config();

exports.signup = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    let user = await User.findOne({ email });
    if (user) return res.status(400).json({ message: "User already exists!" });

    console.log("🔑 Raw Password Before Hashing:", password);

    user = new User({ name, email,password });
    await user.save();

    res.status(201).json({ message: "User registered successfully!" });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};


exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    console.log("🔍 Searching for email:", email);
    const user = await User.findOne({ email });

    if (!user) return res.status(400).json({ message: "User not found!" });

    console.log("🔑 Entered Password:", password);
    console.log("🔒 Stored Hashed Password:", user.password);

    const isMatch = await bcrypt.compare(password.trim(), user.password);
    // const isMatch = (password === user.password);

    console.log("✅ bcrypt.compare() Result:", isMatch); // Debugging

    if (!isMatch) return res.status(400).json({ message: "Invalid credentials!" });

    const token = jwt.sign(
      { userId: user._id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    res.json({ message: "Login successful!", token, user: { name: user.name, email: user.email } });

  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};
