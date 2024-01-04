const express = require("express");
const { registerCtrl, loginCtrl, user } = require("../controllers/authCtrl");
const validate = require("../middlewares/validateMiddleware")
const { signupSchema, loginSchema } = require("../validators/authValidator")
const authMiddleware = require("../middlewares/authMiddleware")
const router = express.Router();

router.post("/register", validate(signupSchema), registerCtrl)
router.post("/login", validate(loginSchema), loginCtrl)
router.get("/user", authMiddleware, user)

module.exports = router;