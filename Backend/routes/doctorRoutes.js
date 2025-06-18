const express = require("express");
const router = express.Router();
const { SignUpDoctor, SignInDoctor } = require("../controllers/doctorController");
const authMiddleware = require("../middleware/authMiddleware");
const doctorMiddleware = require("../middleware/doctorMiddleware");

// Auth
router.post("/signup", SignUpDoctor);
router.post("/signin", SignInDoctor);

// Protected
router.get("/dashboard", authMiddleware, doctorMiddleware, (req, res) => {
  res.json({ message: "Welcome Doctor", doctorId: req.user.id });
});

module.exports = router;
