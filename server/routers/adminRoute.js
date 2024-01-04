const express = require("express");
const { getAllUsers, getAllUsersContact, deleteUserByID, getAllUsersByID } = require("../controllers/adminCtrl");
const authMiddleware = require("../middlewares/authMiddleware")


const router = express.Router();

router.get("/users", authMiddleware, getAllUsers)
router.get("/users/:id", authMiddleware, getAllUsersByID)
router.get("/users-contact", authMiddleware, getAllUsersContact)
router.delete("/users/delete/:id", authMiddleware, deleteUserByID)

module.exports = router;