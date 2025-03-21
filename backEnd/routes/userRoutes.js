const express = require("express");
const { signup, login } = require("../controller/userController");
const router = express.Router();
const auth = require("../middleware/auth");
router.post("/signup", signup);
router.post("/login", login);
router.get("/user-profile", auth, async (req, res) => {
    try {
      const user = await User.findById(req.user.id).select("-password");
      res.json({ success: true, user });
    } catch (error) {
      res.status(500).json({ success: false, message: "❌ Internal server error" });
    }
  });
  
module.exports = router;
